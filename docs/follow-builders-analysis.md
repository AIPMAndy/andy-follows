# Follow-Builders 实现分析报告

## 核心架构

### 1. 数据获取方式

**Twitter/X 数据**
- 使用 **Twitter API v2 官方接口**
- 需要环境变量: `X_BEARER_TOKEN`
- 特点:
  - 批量查询用户 ID（每批 5 个用户）
  - 获取每个用户最近 5 条推文，过滤转推和回复
  - 支持长推文（note_tweet）
  - 包含互动数据（likes, retweets, replies）
  - 24 小时回溯窗口
  - 每用户最多 3 条推文

**Podcast 数据**
- 使用 **RSS feed + pod2txt API**
- 需要环境变量: `POD2TXT_API_KEY`
- 流程:
  1. 从 RSS feed 获取最新 episode 列表
  2. 调用 pod2txt API 获取 transcript（支持异步轮询）
  3. 通过 YouTube Atom RSS 或页面抓取匹配 YouTube 视频 URL
  4. 14 天回溯窗口（因为播客不是每天更新）

**Blog 数据**
- 使用 **HTML 页面抓取**
- 支持两个博客:
  - Anthropic Engineering (解析 Next.js `__NEXT_DATA__` JSON)
  - Claude Blog (解析 Webflow HTML + JSON-LD)
- 流程:
  1. 抓取首页获取文章列表
  2. 逐个抓取文章页面提取全文
  3. 72 小时回溯窗口
  4. 每个博客最多 3 篇文章

### 2. 去重机制

使用 **state-feed.json** 文件持久化已处理内容:

```json
{
  "seenTweets": { "tweet_id": timestamp },
  "seenVideos": { "episode_guid": timestamp },
  "seenArticles": { "article_url": timestamp }
}
```

- 自动清理 7 天前的记录
- 每次运行前加载，运行后保存
- 确保同一内容不会重复出现在 feed 中

### 3. GitHub Actions 自动化

**定时触发**
- 每天 UTC 6:17am 运行一次（避开整点）
- 支持手动触发（workflow_dispatch）
- 可选择运行模式: all/tweets-only/podcasts-only/blogs-only

**环境变量**
- `X_BEARER_TOKEN` - Twitter API 密钥（存储在 GitHub Secrets）
- `POD2TXT_API_KEY` - Podcast 转录 API 密钥

**输出文件**
- `feed-x.json` - Twitter 内容
- `feed-podcasts.json` - Podcast 内容
- `feed-blogs.json` - Blog 内容
- `state-feed.json` - 去重状态

**自动提交**
- 使用 github-actions bot 提交更新
- Commit message 包含 `[skip ci]` 避免循环触发

### 4. 数据格式

**feed-x.json 结构**
```json
{
  "generatedAt": "2024-01-15T06:17:00Z",
  "lookbackHours": 24,
  "x": [
    {
      "source": "x",
      "name": "Andrej Karpathy",
      "handle": "karpathy",
      "bio": "...",
      "tweets": [
        {
          "id": "...",
          "text": "...",
          "createdAt": "...",
          "url": "...",
          "likes": 1234,
          "retweets": 567,
          "replies": 89
        }
      ]
    }
  ],
  "stats": { "xBuilders": 10, "totalTweets": 25 },
  "errors": []
}
```

**feed-podcasts.json 结构**
```json
{
  "generatedAt": "2024-01-15T06:17:00Z",
  "lookbackHours": 336,
  "podcasts": [
    {
      "source": "podcast",
      "name": "Latent Space",
      "title": "Episode Title",
      "guid": "...",
      "url": "https://www.youtube.com/watch?v=...",
      "publishedAt": "...",
      "transcript": "Full transcript text..."
    }
  ],
  "stats": { "podcastEpisodes": 1 }
}
```

## 关键技术点

### 1. 无需用户 API Keys
- README 强调 "No API keys needed — all content is fetched centrally"
- 实际上是通过 **GitHub Actions Secrets** 存储密钥
- 用户只需 fork 仓库，不需要自己申请 API key
- 这是一个"中心化获取，去中心化消费"的模式

### 2. 容错与重试
- Twitter API 支持重试（500/502/503/504 状态码）
- pod2txt 支持异步轮询（最多 5 次，每次等待 30 秒）
- 错误收集但不中断流程（errors 数组）

### 3. 性能优化
- Twitter 批量查询用户 ID（减少 API 调用）
- 小批次处理（5 个用户/批）降低单次失败影响
- 请求间添加延迟（200ms-500ms）避免触发限流

### 4. YouTube 匹配算法
- 优先尝试 Atom RSS feed（稳定但某些频道不可用）
- 降级到页面抓取（解析 ytInitialData JSON）
- 标题标准化匹配（移除标点、小写、token 重叠 ≥50%）

## 与 Andy Follows 的差异

| 维度 | follow-builders | Andy Follows |
|------|----------------|--------------|
| **定位** | AI builders 追踪 | Andy 的自由之屋三大支柱 |
| **数据源** | 26 Twitter + 6 Podcasts + 2 Blogs | 三个类别各有独立源（需配置）|
| **Twitter** | 官方 API v2 | **需要实现** |
| **Podcast** | RSS + pod2txt | **可复用** |
| **Blog** | HTML 抓取 | **需要 RSS 解析器** |
| **总结** | 未实现（只采集原始数据）| **需要 Claude API 总结** |
| **推送** | 未实现（只生成 JSON）| **需要 Telegram/Lark** |
| **语言** | 仅英文 | **双语（中英）** |

## 对 Andy Follows 的启发

### 可以直接复用的：

1. **GitHub Actions 架构** - 定时任务 + 自动提交
2. **去重机制** - state-feed.json 模式
3. **Podcast 抓取** - RSS + pod2txt（如果有 API key）
4. **错误处理** - errors 数组 + 非中断式错误收集
5. **YouTube 匹配算法** - 标题标准化匹配逻辑

### 需要新增的：

1. **Twitter 数据获取** 
   - 方案 A: 申请 Twitter API（需要 $100/月 Basic 套餐）
   - 方案 B: 使用 nitter 或其他第三方 API
   - 方案 C: 使用 webbridge + 浏览器抓取

2. **AI 总结层**
   - 集成 Claude API
   - 实现三个类别的专用 prompt
   - 双语生成（中英文）

3. **RSS Feed 解析**
   - 为 Blog 源添加 RSS parser
   - 支持更多 RSS feed 格式

4. **推送集成**
   - Telegram Bot API
   - 飞书 Webhook/Bot
   - 邮件推送（可选）

5. **个人品牌特化**
   - 创作者经济数据源
   - Dan Koe / Justin Welsh 等人的内容监控
   - 更侧重实操策略而非技术深度

## 推荐实施路径

### 阶段 1: 基础设施（1-2 天）
- [x] ✅ 项目结构已建立
- [x] ✅ 配置文件已创建
- [ ] 设置 GitHub Actions workflow
- [ ] 实现 state 管理和去重

### 阶段 2: 数据采集（3-5 天）
- [ ] 实现 RSS feed 解析器（针对博客）
- [ ] 决定 Twitter 方案并实现
- [ ] 复用 podcast 抓取逻辑（如需要）
- [ ] 测试各数据源的稳定性

### 阶段 3: AI 总结（2-3 天）
- [ ] 集成 Claude API
- [ ] 实现三个类别的总结 prompt
- [ ] 双语生成逻辑
- [ ] 质量测试和 prompt 优化

### 阶段 4: 推送集成（2-3 天）
- [ ] Telegram Bot 实现
- [ ] 飞书推送实现
- [ ] 消息格式优化
- [ ] 推送频率控制

### 阶段 5: 优化与上线（1-2 天）
- [ ] 完整端到端测试
- [ ] 文档完善
- [ ] 监控和告警
- [ ] 公开发布

## 成本估算

### API 成本
- **Twitter API**: $100/月（Basic 套餐，每月 10,000 条推文）
- **Claude API**: 
  - 估算每天 50 条内容 × 平均 2000 tokens/条 = 100K tokens/天
  - Sonnet 3.5: $3/M input + $15/M output ≈ $1-2/天 ≈ $30-60/月
- **pod2txt**: 未知（需确认定价）

### 替代方案（降低成本）
1. Twitter: 使用免费抓取工具（不稳定）
2. Podcast: 直接用 RSS（无 transcript）
3. Claude: 用更便宜的模型（Haiku）降低到 $0.25/M

## 技术债务提醒

1. **HTML 抓取脆弱性** - 网站改版会导致解析失败
2. **API 限流风险** - 需要优雅降级
3. **数据新鲜度** - 24 小时延迟可能不满足需求
4. **扩展性** - 新增数据源需要修改核心代码

## 总结

Follow-builders 提供了一个**生产级别的 feed 聚合架构**，核心优势是：
- 完全自动化（GitHub Actions）
- 可靠的去重机制
- 容错良好的数据采集
- 清晰的数据格式

Andy Follows 可以**继承这个架构**，并在此基础上添加：
- AI 驱动的智能总结
- 双语支持
- 个人品牌/创作者经济的特化内容
- 多渠道推送

**关键差异**：follow-builders 是"数据聚合器"，Andy Follows 是"智能内容助理"。
