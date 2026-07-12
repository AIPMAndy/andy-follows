# Andy Follows Project Overview

## 项目定位

**Andy Follows** 是一个专注于 AI 领域的个性化资讯摘要系统，基于 [follow-builders](https://github.com/zarazhangrui/follow-builders) 架构，但聚焦在 Andy 的"自由之屋"三大支柱：

1. **🏗️ AI + 产品（最高优先级）** — AI 产品的底层知识和实践
2. **💰 AI + 投资** — AI 行业的资本流动和商业洞察
3. **⚖️ AI + 知识产权** — 开源、法律和政策发展

## 核心特性

### 1. 第一性原理的信息源
- ✅ 只关注 **builders**：创始人、投资人、产品负责人、研究者
- ✅ 原创观点和第一手经验
- ❌ 排除：媒体记者、转述者、营销号

### 2. 海外聚焦
- ✅ 只包含海外（美国、欧洲等）信息源
- ❌ 排除中国本土信息源
- 特例：中国出海 AI 公司在海外的声音可纳入

### 3. 严格的 AI 相关性过滤
- 使用专门的 AI 过滤 prompt
- Elon Musk 的 SpaceX 推文？过滤掉
- Elon Musk 的 xAI/Grok 推文？保留

### 4. 双语支持
- 原生支持中英双语输出
- 专业术语翻译优化
- 符合中文阅读习惯

### 5. 灵活推送
- Telegram bot
- 飞书 webhook
- Claude 对话内显示

## 项目结构

```
andy-follows/
├── config/                          # 配置文件
│   ├── sources-ai-product.json      # AI + 产品信息源（14+ Twitter, 4 blogs, 1 podcast）
│   ├── sources-ai-investment.json   # AI + 投资信息源（9+ Twitter, 4 blogs, 3 podcasts）
│   ├── sources-ai-ip.json           # AI + IP 信息源（5+ Twitter, 4 blogs, 1 podcast）
│   └── config-schema.json           # 用户配置 schema
├── scripts/                         # 核心脚本
│   ├── fetch-feeds.js               # 抓取脚本（GitHub Actions 运行）
│   ├── generate-digest.js           # 生成摘要（用户端运行）
│   └── deliver.js                   # 推送脚本（Telegram/Lark）
├── prompts/                         # AI prompts
│   ├── summarize-ai-product.md      # 产品内容摘要 prompt
│   ├── summarize-ai-investment.md   # 投资内容摘要 prompt
│   ├── summarize-ai-ip.md           # IP 内容摘要 prompt
│   ├── filter-ai-relevance.md       # AI 相关性过滤 prompt
│   ├── digest-intro.md              # 摘要格式模板
│   └── translate.md                 # 翻译 prompt
├── .github/workflows/               # GitHub Actions
│   └── update-feeds.yml             # 每日自动更新 feeds
├── feed-*.json                      # 生成的 feed 文件
├── SKILL.md                         # Claude Code skill 定义
└── README.md                        # 项目说明
```

## 工作流程

### 中心化 Feed 更新（GitHub Actions）

1. 每天 UTC 6:47 运行 `fetch-feeds.js`
2. 从 Twitter API、RSS、YouTube API 抓取内容
3. 生成 `feed-ai-product.json`, `feed-ai-investment.json`, `feed-ai-ip.json`
4. 提交到 GitHub repo

### 用户端摘要生成（本地/Claude Code）

1. 从 GitHub raw URL 获取最新 feeds
2. 使用 AI 相关性过滤 prompt 筛选内容
3. 使用类别特定 prompt 生成摘要
4. 按优先级排序：产品 → 投资 → IP
5. 根据语言偏好生成最终 digest
6. 推送到配置的渠道

## 信息源概览

### AI + Product（28+ 总计）
- **Twitter**: Andrej Karpathy, Swyx, Josh Woodward, Boris Cherny, Guillermo Rauch, Amjad Masad, Alex Albert, Cat Wu, Thariq, Google Labs, Peter Steinberger, Dan Shipper, Peter Yang, Thibault Sottiaux
- **Blogs**: Anthropic Engineering, OpenAI Blog, Google AI Blog, Vercel AI Blog
- **Podcasts**: Latent Space

### AI + Investment（16+ 总计）
- **Twitter**: Marc Andreessen, Garry Tan, Matt Turck, Sam Altman, Aaron Levie, Ryo Lu, Aditya Agarwal, Nikunj Kothari, Nan Yu
- **Blogs**: a16z AI, Sequoia AI, YC Blog AI, FirstMark Blog
- **Podcasts**: No Priors, Training Data, The MAD Podcast

### AI + IP（10+ 总计）
- **Twitter**: Yann LeCun, Ethan Mollick, François Chollet, Chris Albon, Elon Musk (AI-only)
- **Blogs**: Hugging Face, Stability AI, Meta AI, OpenAI Policy
- **Podcasts**: Unsupervised Learning

## 下一步工作

### 立即可做
1. ✅ 项目结构已完成
2. ✅ 配置文件已创建
3. ✅ Prompts 已编写
4. ✅ 核心脚本已实现（占位符）
5. ✅ SKILL.md 已定义

### 需要完善（实际部署前）
1. **完善 fetch-feeds.js**
   - 集成 Twitter API（需要 API keys）
   - 集成 RSS 解析器
   - 集成 YouTube 转录 API
   - 参考 follow-builders 的实现

2. **设置 GitHub repo**
   - 创建 GitHub repository
   - 添加 secrets（Twitter API keys 等）
   - 启用 GitHub Actions

3. **测试摘要生成**
   - 用真实 feed 数据测试
   - 验证 AI 过滤效果
   - 调整 prompts

4. **配置推送渠道**
   - 创建 Telegram bot
   - 配置飞书 webhook
   - 测试推送功能

### 可选增强
- Web 界面查看历史 digests
- 添加更多信息源
- 支持用户自定义信息源
- 添加搜索功能

## 使用方式

### For You (Andy)

1. **安装到 Claude Code**:
```bash
mv /Users/andy/Documents/AICode/andy-follows ~/.claude/skills/andy-follows
```

2. **首次配置**:
   - 在 Claude Code 中说："设置 Andy Follows"
   - 或直接调用 `/andy-follows`

3. **配置 Telegram/飞书**:
   - 创建 `~/.andy-follows/.env` 文件
   - 填入 bot token 和 webhook URL

4. **设置定时任务**:
```bash
# 每天早上 8 点
0 8 * * * cd ~/.claude/skills/andy-follows && node scripts/generate-digest.js && node scripts/deliver.js
```

### For Open Source (如果你想开源)

1. **创建 GitHub repo**: `andy/andy-follows`
2. **添加说明**: 在 README 中说明这是基于你的需求定制的版本
3. **提供安装指南**: 让其他人可以 fork 并修改信息源
4. **贡献回 follow-builders**: 如果有通用改进，可以 PR 回原项目

## 与 follow-builders 的对比

| 特性 | follow-builders | andy-follows |
|------|----------------|--------------|
| **定位** | 通用 AI builders | AI + 产品/投资/IP |
| **信息源** | 26 Twitter + 6 podcasts + 2 blogs | 28+ Twitter + 6 podcasts + 12+ blogs |
| **分类** | 单一 AI feed | 3 个分类 feed（有优先级）|
| **地域** | 全球 | 仅海外（非中国）|
| **过滤** | 通用 AI | 严格 AI 相关性 + 分类匹配 |
| **语言** | 英文/中文/双语 | 同左，但双语为默认 |

## 技术债务和已知限制

1. **fetch-feeds.js 是占位符**
   - 需要实际的 API 集成
   - 参考 follow-builders 的实现

2. **没有错误重试机制**
   - API 失败时没有重试
   - 需要添加 exponential backoff

3. **没有内容去重**
   - 同一内容可能在多个源出现
   - 需要添加去重逻辑

4. **AI 过滤依赖 Claude**
   - 需要 Claude API 或本地运行
   - 可以考虑添加规则引擎作为 fallback

## 成本估算

### GitHub Actions（免费）
- Public repo: 免费无限
- Private repo: 2000 分钟/月免费

### API 成本（如果部署完整版）
- Twitter API: $100-500/月（取决于调用量）
- YouTube Transcript API: 免费（Google API）
- Claude API: ~$1-5/天（用于摘要生成和过滤）

### 用户端成本
- Telegram: 免费
- 飞书: 免费
- Claude Code: 用户已有订阅

## License

MIT License - 可以自由修改和使用
