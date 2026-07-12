# Andy Follows

[English](#english-version) | **中文**

---

## 🏠 服务于 Andy 自由之屋

**Andy Follows** 是一个专为 **Andy 自由之屋**设计的 AI 情报系统——一个建立在三大支柱之上的战略框架，代表了 AI 与关键领域的未来交汇：

1. **🏗️ AI + 产品** — 理解 AI 如何改变产品开发、设计和用户体验
2. **💰 AI + 投资** — 追踪 AI 经济中的资本流动、市场动态和商业模式
3. **🎨 AI + 个人品牌** — 用 AI 建设个人品牌、内容创作和创作者经济

这个系统存在的目的是回答一个问题：**AI 的建设者、投资者和塑造者们究竟在做什么、在想什么？**

---

## 💡 价值主张

### 为什么重要

在 AI 时代，**信息不对称是最大的风险**。大多数 AI 报道是：
- 🚫 不懂技术的记者的二手评论
- 🚫 追逐流量的网红的炒作营销
- 🚫 错过战略意义的肤浅总结
- 🚫 淹没信号的噪音

**Andy Follows** 通过以下方式切入本质：

✅ **直达源头** — 来自建设十亿美元 AI 公司的创始人、部署资本的 VC、塑造领域的研究者的直接洞察  
✅ **第一性原理思考** — 理解决策背后的*原因*，而不仅仅是*发生了什么*  
✅ **战略背景** — 连接产品发布、投资趋势和个人品牌建设  
✅ **全球视野** — 聚焦海外（主要是美国/欧洲）信息源，AI 创新的集中地  
✅ **AI 原生过滤** — 严格的 AI 相关内容，无关的科技新闻被排除

### 你将获得什么

**时间**：每天 30-60 分钟精选洞察 vs. 数小时刷 Twitter/博客  
**清晰度**：战略信号与营销噪音分离  
**优势**：在第一性原理洞察成为主流之前获取  
**对齐**：按你的战略框架优先排序（产品 > 投资 > IP）

### 实际影响

这个系统帮助你：
- **做出更好的产品决策** — 向解决类似问题的建设者学习
- **发现投资机会** — 看到资本和人才的流向
- **建设个人品牌** — 学习顶级创作者如何用 AI 扩大影响力
- **打造创作者业务** — 掌握内容变现和数字产品策略

---

## 🎯 理念：关注建设者，而非影响者

**Andy Follows 原则**：

> 关注那些**构建**产品、**部署**资本、**塑造**政策的人——而非仅仅**谈论**它的人。

这意味着：
- ✅ Andrej Karpathy（构建 AI 系统）→ **纳入**
- ❌ 泛泛的"AI 网红"（转发新闻）→ **排除**
- ✅ Marc Andreessen（部署数十亿美元于 AI）→ **纳入**
- ❌ "AI 思想领袖"（没有实战）→ **排除**

**海外聚焦**：AI 创新集中在美国和欧洲。中国信息源被有意排除，以保持对全球 AI 发展最相关的市场和生态系统的关注。

**AI 优先**：严格的相关性过滤确保你只看到 AI 相关内容。马斯克的 SpaceX 发射？过滤掉。他的 xAI 公告？保留。

---

## 📊 你将获得什么

每日或每周摘要，推送到你的首选渠道（Telegram、飞书或对话内显示）：

### 🏗️ AI + 产品（优先级 1：基础知识）
- AI 公司的产品发布和更新
- 实现挑战的技术深度解析
- AI 界面的 UX/UI 模式
- 开发者体验洞察
- 产品策略和定位

**示例洞察**：Anthropic 如何优化 Claude 的上下文窗口以降低 80% 延迟；Vercel 的 v0 如何通过 AI 优先设计工具达到 100 万开发者。

### 💰 AI + 投资（优先级 2：市场情报）
- 融资轮次和估值
- VC 投资理论和市场分析
- 商业模式创新
- 并购活动和战略动向
- 单位经济效益和盈利路径

**示例洞察**：OpenAI 的 66 亿美元融资暗示盈利路径；a16z 关于基础模型毛利压缩的理论。

### 🎨 AI + 个人品牌（优先级 3：创作者经济）
- AI 辅助内容创作和生产力提升
- 个人品牌建设和受众增长策略
- 创作者商业模式和变现路径
- 数字产品和一人公司实践
- 内容工具和创作者平台

**示例洞察**：Dan Koe 如何用 AI 扩大内容产出 5 倍；Justin Welsh 的 AI 辅助 LinkedIn 策略达到月均 1000 万曝光；创作者使用 AI 的收入是不使用者的 2.3 倍。

---

## 🚀 快速开始

### Claude Code 用户

1. **克隆仓库**：
```bash
git clone https://github.com/AIPMAndy/andy-follows.git ~/.claude/skills/andy-follows
cd ~/.claude/skills/andy-follows/scripts && npm install
```

2. **通过对话设置**：
```
说："设置 Andy Follows" 或调用 /andy-follows
```

3. **配置推送**（agent 会引导你）：
   - Telegram bot（可选）
   - 飞书 webhook（可选）
   - 语言偏好（英文、中文或双语）
   - 频率（每日或每周）

4. **立即收到第一份摘要**

### 手动设置

```bash
# 克隆
git clone https://github.com/AIPMAndy/andy-follows.git
cd andy-follows/scripts && npm install

# 配置
mkdir -p ~/.andy-follows
cp .env.example ~/.andy-follows/.env
# 编辑 ~/.andy-follows/.env 添加你的凭证

# 运行
node scripts/generate-digest.js && node scripts/deliver.js
```

---

## 📡 信息源（45+ 总计）

### AI + 产品建设者（19 个源）
**Twitter**：Andrej Karpathy, Swyx, Josh Woodward, Boris Cherny, Guillermo Rauch, Amjad Masad, Alex Albert 等  
**博客**：Anthropic Engineering, OpenAI Blog, Google AI Blog, Vercel AI  
**播客**：Latent Space

### AI + 投资领袖（16 个源）
**Twitter**：Marc Andreessen, Garry Tan, Matt Turck, Sam Altman, Aaron Levie 等  
**博客**：a16z AI, Sequoia AI, YC Blog, FirstMark  
**播客**：No Priors, Training Data, The MAD Podcast

### AI + 个人品牌创作者（18 个源）
**Twitter**：Dan Koe, Justin Welsh, Sahil Bloom, Dickie Bush, Pieter Levels, Nathan Barry, Lenny Rachitsky, Alex Garcia, Blake Emal, Alexis Ohanian 等  
**博客**：Lenny's Newsletter, ConvertKit Blog, Li Jin's Blog, Not Boring, Every  
**播客**：My First Million, The Creator Economy Show, How I Write

所有信息源都**聚焦海外**（主要是美国/欧洲），代表有真正实战经验的**第一性原理思考者**。

---

## 🔧 工作原理

### 架构

```
中心化 Feed (GitHub) → 你的 Agent (Claude) → AI 处理 → 多渠道推送
```

1. **中心化 feed 每日更新**（通过 GitHub Actions）
   - 从 Twitter API、RSS feeds、YouTube 转录抓取
   - 为每个类别生成 JSON feeds
   - 你不需要任何 API keys

2. **你的 agent 本地处理**
   - 抓取 feeds（一次 HTTP 请求）
   - 过滤 AI 相关性（使用专用 prompt）
   - 按类别总结（使用专门的 prompts）
   - 生成双语输出（如果配置）

3. **推送到你的渠道**
   - Telegram bot
   - 飞书 webhook
   - Claude 对话内显示

查看 [examples/sample-digest.md](examples/sample-digest.md) 了解示例输出。

---

## ✨ 核心特性

### 严格的 AI 相关性过滤
每条内容都根据 AI 相关性标准评估：
- ✅ 讨论 AI 模型、产品、公司或研究
- ✅ 关于 AI 投资、融资或市场动态
- ✅ 涵盖 AI 政策、版权或监管
- ❌ 没有 AI 组件的泛科技新闻
- ❌ 与 AI 无关的个人内容

**示例**：Elon Musk 发推关于 SpaceX 发射 → 过滤掉。Elon Musk 发推关于 xAI 的 Grok 模型 → 保留。

### 基于优先级的排序
内容按战略优先级顺序呈现：
1. **AI + 产品**（最重要 — 基础知识）
2. **AI + 投资**（市场情报）
3. **AI + IP**（法律和政策背景）

### 双语支持
原生支持：
- 仅英文
- 仅中文
- **双语（默认）** — 英文洞察后跟中文翻译，保留专业术语

### 可自定义 Prompts
所有总结逻辑都在可编辑的 markdown 文件中：
- `prompts/summarize-ai-product.md` — 产品洞察提取
- `prompts/summarize-ai-investment.md` — 投资分析
- `prompts/summarize-ai-ip.md` — IP/法律发展
- `prompts/filter-ai-relevance.md` — 相关性过滤
- `prompts/translate.md` — 翻译指南

告诉 Claude "让摘要更技术化"或直接编辑文件。

---

## 🆚 与 follow-builders 的比较

Andy Follows 受 Zara Zhang 的 [follow-builders](https://github.com/zarazhangrui/follow-builders) 启发，但专为 Andy 自由之屋框架定制：

| 特性 | follow-builders | andy-follows |
|---------|----------------|--------------|
| **焦点** | 通用 AI 建设者 | AI + 产品/投资/IP 三大支柱 |
| **地域** | 全球 | 仅海外（非中国） |
| **过滤** | 通用 AI 内容 | 严格 AI 相关性 + 类别契合 |
| **结构** | 单一统一 feed | 3 个类别 feed + 优先级排序 |
| **信息源** | 26 Twitter + 6 播客 + 2 博客 | 28 Twitter + 5 播客 + 12 博客 |
| **理念** | 关注建设者 | 关注建设者 + 第一性原理聚焦 |

**致谢**：中心化 feed 架构和对话式设置方法改编自优秀的 follow-builders 项目。

---

## 🔐 隐私与安全

- ✅ **无 API keys 外发** — 所有内容由 GitHub Actions 集中抓取
- ✅ **本地凭证存储** — Telegram/飞书 tokens 存储在 `~/.andy-follows/.env`
- ✅ **仅公开内容** — 只读取公开可用的帖子、博客、播客
- ✅ **数据保持本地** — 配置和历史永不离开你的机器

---

## 🛠️ 自定义

### 对话式（推荐）
告诉 Claude 你想要什么：
- "更关注 AI 产品策略"
- "我想要更深的技术细节"
- "让摘要更简洁"
- "切换到每周摘要"

### 直接编辑（高级用户）
编辑 `prompts/` 目录中的文件。更改在下次摘要时立即生效。

---

## 🤝 贡献

欢迎贡献！特别是：
- **高质量海外信息源**（必须是建设者/投资者/塑造者，非网红）
- **Prompt 改进**以获得更好的总结
- **Bug 修复和增强**

提交 issue 或 PR。

---

## 📄 许可证

MIT License — 可自由使用、修改和分享。

---

## 🙏 致谢

本项目受 Zara Zhang 的 [follow-builders](https://github.com/zarazhangrui/follow-builders) 启发并基于其构建。中心化 feed 架构和对话式设置均改编自该优秀项目。

特别感谢 AI 社区在公开场合构建并分享洞察，使这样的项目成为可能。

---

## English Version

### 🏠 Serving Andy's Freedom House

**Andy Follows** is an AI-powered intelligence system designed specifically for **Andy's Freedom House** — a strategic framework built on three pillars that represent the future intersection of AI with critical domains:

1. **🏗️ AI + Product** — Understanding how AI transforms product development, design, and user experience
2. **💰 AI + Investment** — Tracking capital flows, market dynamics, and business models in the AI economy  
3. **🎨 AI + Personal Brand** — Using AI for personal branding, content creation, and creator economy

This system exists to answer one question: **What are the builders, investors, and shapers of AI actually doing and thinking?**

---

## 💡 The Value Proposition

### Why This Matters

In the age of AI, **information asymmetry is the biggest risk**. Most AI coverage is:
- 🚫 Second-hand commentary from journalists who don't build
- 🚫 Hype-driven marketing from influencers chasing engagement
- 🚫 Superficial summaries that miss strategic implications
- 🚫 Noise that drowns out signal

**Andy Follows** cuts through the noise by:

✅ **Going to the source** — Direct insights from founders building billion-dollar AI companies, VCs deploying capital, and researchers shaping the field  
✅ **First-principles thinking** — Understanding *why* decisions are made, not just *what* happened  
✅ **Strategic context** — Connecting product launches to investment trends to IP battles  
✅ **Global perspective** — Focusing on overseas (primarily US/Europe) sources where AI innovation is concentrated  
✅ **AI-native filtering** — Strictly relevant AI content, no tangential tech news

### What You Gain

**Time**: 30-60 minutes of curated insights daily vs. hours of scrolling Twitter/blogs  
**Clarity**: Strategic signal separated from marketing noise  
**Edge**: First-principles insights before they become mainstream wisdom  
**Alignment**: Content prioritized by your strategic framework (Product > Investment > IP)

### Real-World Impact

This system helps you:
- **Make better product decisions** — Learn from builders who solved similar problems
- **Spot investment opportunities** — See where capital and talent are flowing
- **Build personal brand** — Learn how top creators use AI to scale their impact
- **Create creator businesses** — Master content monetization and digital product strategies

---

## 🎯 Philosophy: Follow Builders, Not Influencers

**The Andy Follows Principle**: 

> Follow people who **build** products, **deploy** capital, and **shape** policy — not those who merely **talk** about it.

This means:
- ✅ Andrej Karpathy (builds AI systems) → **Included**
- ❌ Generic "AI influencer" (retweets news) → **Excluded**
- ✅ Marc Andreessen (deploys billions in AI) → **Included**  
- ❌ "AI thought leader" (no skin in the game) → **Excluded**

**Overseas Focus**: AI innovation is concentrated in the US and Europe. Chinese sources are intentionally excluded to maintain focus on the markets and ecosystems most relevant to global AI development.

**AI-First**: Strict relevance filtering ensures you only see AI-related content. Elon Musk's SpaceX launches? Filtered out. His xAI announcements? Included.

---

## 📊 What You Get

A daily or weekly digest delivered to your preferred channel (Telegram, Lark, or in-chat) with:

### 🏗️ AI + Product (Priority 1: Foundational Knowledge)
- Product launches and updates from AI companies
- Technical deep-dives on implementation challenges  
- UX/UI patterns for AI interfaces
- Developer experience insights
- Product strategy and positioning

**Example insights**: How Anthropic optimized Claude's context window for 80% latency reduction; Vercel's v0 reaching 1M developers with AI-first design tools.

### 💰 AI + Investment (Priority 2: Market Intelligence)
- Funding rounds and valuations
- VC investment theses and market analysis
- Business model innovations
- M&A activity and strategic moves
- Unit economics and profitability paths

**Example insights**: OpenAI's $6.6B raise signals path to profitability; a16z's thesis on foundation model margin compression.

### 🎨 AI + Personal Brand (Priority 3: Creator Economy)
- AI-assisted content creation and productivity
- Personal brand building and audience growth strategies
- Creator business models and monetization paths
- Digital products and one-person business practices
- Content tools and creator platforms

**Example insights**: How Dan Koe uses AI to scale content output 5x; Justin Welsh's AI-assisted LinkedIn strategy reaching 10M monthly impressions; creators using AI earn 2.3x more than those who don't.

---

## 🚀 Quick Start

### For Claude Code Users

1. **Clone this repository**:
```bash
git clone https://github.com/AIPMAndy/andy-follows.git ~/.claude/skills/andy-follows
cd ~/.claude/skills/andy-follows/scripts && npm install
```

2. **Set up via conversation**:
```
Say: "set up Andy Follows" or invoke /andy-follows
```

3. **Configure delivery** (the agent will guide you):
   - Telegram bot (optional)
   - Lark/Feishu webhook (optional)
   - Language preference (English, Chinese, or Bilingual)
   - Frequency (daily or weekly)

4. **Receive your first digest immediately**

### For Manual Setup

```bash
# Clone
git clone https://github.com/AIPMAndy/andy-follows.git
cd andy-follows/scripts && npm install

# Configure
mkdir -p ~/.andy-follows
cp .env.example ~/.andy-follows/.env
# Edit ~/.andy-follows/.env with your credentials

# Run
node scripts/generate-digest.js && node scripts/deliver.js
```

---

## 📡 Information Sources (45+ Total)

### AI + Product Builders (19 sources)
**Twitter**: Andrej Karpathy, Swyx, Josh Woodward, Boris Cherny, Guillermo Rauch, Amjad Masad, Alex Albert, and more  
**Blogs**: Anthropic Engineering, OpenAI Blog, Google AI Blog, Vercel AI  
**Podcasts**: Latent Space

### AI + Investment Leaders (16 sources)
**Twitter**: Marc Andreessen, Garry Tan, Matt Turck, Sam Altman, Aaron Levie, and more  
**Blogs**: a16z AI, Sequoia AI, YC Blog, FirstMark  
**Podcasts**: No Priors, Training Data, The MAD Podcast

### AI + Personal Brand Creators (18 sources)
**Twitter**: Dan Koe, Justin Welsh, Sahil Bloom, Dickie Bush, Pieter Levels, Nathan Barry, Lenny Rachitsky, Alex Garcia, Blake Emal, Alexis Ohanian, and more  
**Blogs**: Lenny's Newsletter, ConvertKit Blog, Li Jin's Blog, Not Boring, Every  
**Podcasts**: My First Million, The Creator Economy Show, How I Write

All sources are **overseas-focused** (primarily US/Europe) and represent **first-principles thinkers** with real skin in the game.

---

## 🔧 How It Works

### Architecture

```
Central Feed (GitHub) → Your Agent (Claude) → AI Processing → Multi-Channel Delivery
```

1. **Central feed updated daily** (via GitHub Actions)
   - Fetches from Twitter API, RSS feeds, YouTube transcripts
   - Generates JSON feeds for each category
   - No API keys needed on your end

2. **Your agent processes locally**
   - Fetches feeds (one HTTP request)
   - Filters for AI relevance (using dedicated prompt)
   - Summarizes per category (using specialized prompts)
   - Generates bilingual output if configured

3. **Delivered to your channels**
   - Telegram bot
   - Lark/Feishu webhook
   - Claude in-chat display

See [examples/sample-digest.md](examples/sample-digest.md) for sample output.

---

## ✨ Key Features

### Strict AI Relevance Filtering
Every piece of content is evaluated against AI relevance criteria:
- ✅ Discusses AI models, products, companies, or research
- ✅ About AI investment, funding, or market dynamics  
- ✅ Covers AI policy, copyright, or regulation
- ❌ General tech news without AI component
- ❌ Personal content unrelated to AI

**Example**: Elon Musk tweets about SpaceX launch → Filtered out. Elon Musk tweets about xAI's Grok model → Included.

### Priority-Based Ordering
Content is presented in strategic priority order:
1. **AI + Product** (most important — foundational knowledge)
2. **AI + Investment** (market intelligence)
3. **AI + Personal Brand** (creator economy and content strategy)

### Bilingual Support
Native support for:
- English only
- Chinese only
- **Bilingual (default)** — English insight followed by Chinese translation with proper terminology

### Customizable Prompts
All summarization logic lives in editable markdown files:
- `prompts/summarize-ai-product.md` — Product insights extraction
- `prompts/summarize-ai-investment.md` — Investment analysis
- `prompts/summarize-ai-ip.md` — Personal brand and creator economy insights
- `prompts/filter-ai-relevance.md` — Relevance filtering
- `prompts/translate.md` — Translation guidelines

Tell Claude "make summaries more technical" or edit files directly.

---

## 🆚 Comparison with follow-builders

Andy Follows is inspired by [follow-builders](https://github.com/zarazhangrui/follow-builders) by Zara Zhang, but customized for Andy's Freedom House framework:

| Feature | follow-builders | andy-follows |
|---------|----------------|--------------|
| **Focus** | General AI builders | AI + Product/Investment/Personal Brand pillars |
| **Geography** | Global | Overseas only (non-China) |
| **Filtering** | General AI content | Strict AI relevance + category fit |
| **Structure** | Single unified feed | 3 category feeds with priority ordering |
| **Sources** | 26 Twitter + 6 podcasts + 2 blogs | 28 Twitter + 5 podcasts + 12 blogs |
| **Philosophy** | Follow builders | Follow builders + first-principles focus |

**Credits**: The central feed architecture and conversational setup approach are adapted from the excellent follow-builders project.

---

## 🔐 Privacy & Security

- ✅ **No API keys sent anywhere** — All content fetched centrally by GitHub Actions
- ✅ **Local credential storage** — Telegram/Lark tokens stored in `~/.andy-follows/.env`
- ✅ **Public content only** — Only reads publicly available posts, blogs, podcasts
- ✅ **Your data stays local** — Configuration and history never leave your machine

---

## 🛠️ Customization

### Conversational (Recommended)
Tell Claude what you want:
- "Focus more on AI product strategy"
- "I want deeper technical details"  
- "Make summaries more concise"
- "Switch to weekly digests"

### Direct Editing (Power Users)
Edit files in `prompts/` directory. Changes take effect immediately on next digest.

---

## 🤝 Contributing

Contributions welcome! Especially:
- **High-quality overseas sources** (must be builders/investors/shapers, not influencers)
- **Prompt improvements** for better summarization
- **Bug fixes and enhancements**

Open an issue or submit a PR.

---

## 📄 License

MIT License — Free to use, modify, and share.

---

## 🙏 Acknowledgments

This project is inspired by and builds upon [follow-builders](https://github.com/zarazhangrui/follow-builders) by Zara Zhang. The central feed architecture and conversational setup are adapted from that excellent project.

Special thanks to the AI community for building in public and sharing insights that make projects like this possible.

---

**Generated by Andy Follows — Follow builders, not influencers**  
**为 Andy 自由之屋服务 — 关注建设者，而非影响者**
