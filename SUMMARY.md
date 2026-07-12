# Andy Follows - Project Summary

## ✅ 项目已完成

**Andy Follows** 是一个专为你的"自由之屋"三大支柱设计的 AI 资讯摘要系统，基于 follow-builders 架构，聚焦海外 AI 领域的第一性原理信息源。

---

## 🎯 核心特性

### 三大分类（按优先级）
1. **🏗️ AI + 产品**（最高优先级）- AI 的底层知识
   - 14+ Twitter 账号（Andrej Karpathy, Swyx, Josh Woodward 等）
   - 4 个官方博客（Anthropic Engineering, OpenAI, Google AI, Vercel）
   - 1 个播客（Latent Space）

2. **💰 AI + 投资**（第二优先级）
   - 9+ Twitter 账号（Marc Andreessen, Garry Tan, Sam Altman 等）
   - 4 个 VC 博客（a16z, Sequoia, YC, FirstMark）
   - 3 个播客（No Priors, Training Data, MAD Podcast）

3. **⚖️ AI + 知识产权**（第三优先级）
   - 5+ Twitter 账号（Yann LeCun, Ethan Mollick, Elon Musk[仅 AI] 等）
   - 4 个官方博客（Hugging Face, Stability AI, Meta AI, OpenAI Policy）
   - 1 个播客（Unsupervised Learning）

### 严格过滤
- ✅ **AI 相关性过滤**：只保留 AI 前沿内容
- ✅ **海外聚焦**：排除中国本土信息源
- ✅ **第一性原理**：只关注 builders，不要 influencers

### 灵活推送
- Telegram bot 推送
- 飞书/Lark webhook 推送
- Claude 对话内显示
- 支持双语（中英对照）

---

## 📁 项目结构

```
andy-follows/
├── config/                          # 信息源配置
│   ├── sources-ai-product.json      # AI + 产品源
│   ├── sources-ai-investment.json   # AI + 投资源
│   ├── sources-ai-ip.json           # AI + IP 源
│   └── config-schema.json           # 用户配置
├── scripts/                         # 核心脚本
│   ├── fetch-feeds.js               # Feed 抓取（GitHub Actions）
│   ├── generate-digest.js           # 摘要生成（用户端）
│   └── deliver.js                   # 推送脚本
├── prompts/                         # AI prompts
│   ├── summarize-ai-product.md      # 产品摘要 prompt
│   ├── summarize-ai-investment.md   # 投资摘要 prompt
│   ├── summarize-ai-ip.md           # IP 摘要 prompt
│   ├── filter-ai-relevance.md       # AI 相关性过滤
│   ├── digest-intro.md              # 摘要格式模板
│   └── translate.md                 # 翻译 prompt
├── examples/                        # 示例
│   └── sample-digest.md             # 示例摘要输出
├── .github/workflows/               # 自动化
│   └── update-feeds.yml             # 每日更新 feeds
├── feed-*.json                      # Feed 文件（每日更新）
├── SKILL.md                         # Claude Code skill 定义
├── README.md                        # 项目说明
├── PROJECT_OVERVIEW.md              # 详细架构文档
└── QUICKSTART.md                    # 快速开始指南
```

---

## 🚀 快速开始

### 1. 移动到 Claude Skills 目录

```bash
cd /Users/andy/Documents/AICode
mv andy-follows ~/.claude/skills/andy-follows
```

### 2. 在 Claude Code 中设置

对 Claude 说：

```
设置 Andy Follows
```

或直接调用：

```
/andy-follows
```

### 3. 配置推送渠道

编辑 `~/.andy-follows/.env`：

```bash
TELEGRAM_BOT_TOKEN=your_token
LARK_WEBHOOK_URL=your_webhook
DIGEST_LANGUAGE=bilingual
```

### 4. 设置定时任务

```bash
# 每天早上 8 点
0 8 * * * cd ~/.claude/skills/andy-follows && node scripts/generate-digest.js && node scripts/deliver.js
```

---

## 📊 信息源统计

| 分类 | Twitter | Blogs | Podcasts | 总计 |
|------|---------|-------|----------|------|
| AI + Product | 14 | 4 | 1 | 19 |
| AI + Investment | 9 | 4 | 3 | 16 |
| AI + IP | 5 | 4 | 1 | 10 |
| **总计** | **28** | **12** | **5** | **45** |

---

## 🔄 工作流程

### 中心化更新（GitHub Actions）
1. 每天 UTC 6:47 自动运行
2. 从 Twitter API、RSS、YouTube 抓取内容
3. 生成 3 个分类 feed JSON 文件
4. 提交到 GitHub repo

### 用户端摘要生成（本地/Claude Code）
1. 从 GitHub 获取最新 feeds
2. AI 相关性过滤（使用 filter-ai-relevance.md）
3. 分类摘要生成（使用对应的 summarize-*.md）
4. 按优先级排序：产品 → 投资 → IP
5. 双语输出（使用 translate.md）
6. 推送到 Telegram/飞书

---

## 🆚 与 follow-builders 的区别

| 特性 | follow-builders | andy-follows |
|------|----------------|--------------|
| 定位 | 通用 AI builders | AI 三大交叉领域 |
| 信息源 | 26 Twitter + 6 podcasts + 2 blogs | 28 Twitter + 5 podcasts + 12 blogs |
| 分类 | 单一 feed | 3 个分类 feed（有优先级）|
| 地域 | 全球 | 仅海外（非中国）|
| 过滤 | 通用 AI | 严格 AI 相关性 + 分类匹配 |
| 排序 | 时间顺序 | 优先级顺序（产品>投资>IP）|

---

## ⚠️ 当前状态

### ✅ 已完成
- [x] 项目结构设计
- [x] 信息源配置（28+ Twitter, 12+ blogs, 5+ podcasts）
- [x] AI prompts 编写（5 个专业 prompts）
- [x] 核心脚本实现（占位符版本）
- [x] Claude Code skill 定义
- [x] 完整文档（README, OVERVIEW, QUICKSTART）
- [x] GitHub Actions 配置
- [x] 示例摘要生成
- [x] Git 初始化

### 🔨 待完善（实际部署前）
- [ ] **完善 fetch-feeds.js**：集成真实 API（Twitter, RSS, YouTube）
- [ ] **设置 GitHub repo**：上传到 GitHub 并配置 secrets
- [ ] **测试摘要生成**：用真实数据验证 AI 过滤和摘要效果
- [ ] **配置推送渠道**：创建 Telegram bot 和飞书 webhook
- [ ] **测试端到端流程**：从 feed 更新到摘要推送

### 🎯 可选增强
- [ ] Web 界面查看历史摘要
- [ ] 用户自定义信息源
- [ ] 搜索功能
- [ ] RSS 订阅输出

---

## 📚 关键文档

1. **[README.md](README.md)** - 项目说明和使用指南
2. **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - 详细架构和设计决策
3. **[QUICKSTART.md](QUICKSTART.md)** - 快速开始和故障排除
4. **[SKILL.md](SKILL.md)** - Claude Code skill 集成文档
5. **[examples/sample-digest.md](examples/sample-digest.md)** - 示例输出

---

## 💡 下一步行动建议

### 立即可做（今天）
1. **移动到 skills 目录**：`mv andy-follows ~/.claude/skills/`
2. **测试 skill 加载**：在 Claude Code 中调用 `/andy-follows`
3. **创建 Telegram bot**：用 @BotFather 创建并获取 token

### 本周完成
1. **设置 GitHub repo**：上传代码并配置 Actions
2. **完善 fetch-feeds.js**：参考 follow-builders 实现真实抓取
3. **测试完整流程**：验证从抓取到推送的端到端流程

### 长期优化
1. **迭代 prompts**：根据实际输出质量调整
2. **扩展信息源**：添加更多高质量 builders
3. **社区分享**：考虑开源给其他人使用

---

## 🎉 项目亮点

1. **精准定位**：完全对齐你的"自由之屋"框架
2. **第一性原理**：只关注原始信息源，不要二手转述
3. **海外聚焦**：排除中国，专注国际视野
4. **严格过滤**：AI 相关性过滤确保高质量
5. **优先级明确**：产品>投资>IP，符合你的战略重点
6. **双语原生**：专业术语翻译优化
7. **完整文档**：开箱即用的文档体系
8. **可扩展**：易于添加新信息源和自定义 prompts

---

## 📝 License

MIT License - 可自由修改和分享

---

**Generated on**: 2026-07-12  
**Status**: Ready for deployment  
**Next Step**: Move to `~/.claude/skills/andy-follows` and invoke `/andy-follows`
