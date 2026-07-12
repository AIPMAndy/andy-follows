# Andy Follows

**English** | [中文](#中文版)

---

## 🏠 Serving Andy's Freedom House (安迪自由之屋)

**Andy Follows** is an AI-powered intelligence system designed specifically for **Andy's Freedom House** — a strategic framework built on three pillars that represent the future intersection of AI with critical domains:

1. **🏗️ AI + Product** — Understanding how AI transforms product development, design, and user experience
2. **💰 AI + Investment** — Tracking capital flows, market dynamics, and business models in the AI economy  
3. **⚖️ AI + IP** — Monitoring intellectual property battles, open source movements, and regulatory landscapes

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
- **Navigate IP risks** — Understand open source vs. closed debates before they affect you
- **Stay ahead of regulation** — Track policy developments that could change the game

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

### ⚖️ AI + IP (Priority 3: Legal & Policy Context)
- Open source vs. closed source debates
- Copyright and patent litigation
- Regulatory developments (EU AI Act, etc.)
- Licensing strategies
- Policy proposals and their implications

**Example insights**: Meta's Llama 3.1 open source strategy; GitHub Copilot copyright case surviving dismissal.

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

### AI + IP Thought Leaders (10 sources)
**Twitter**: Yann LeCun, Ethan Mollick, François Chollet, Elon Musk (AI-only), and more  
**Blogs**: Hugging Face, Stability AI, Meta AI, OpenAI Policy  
**Podcasts**: Unsupervised Learning

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
3. **AI + IP** (legal and policy context)

### Bilingual Support
Native support for:
- English only
- Chinese only
- **Bilingual (default)** — English insight followed by Chinese translation with proper terminology

### Customizable Prompts
All summarization logic lives in editable markdown files:
- `prompts/summarize-ai-product.md` — Product insights extraction
- `prompts/summarize-ai-investment.md` — Investment analysis
- `prompts/summarize-ai-ip.md` — IP/legal developments
- `prompts/filter-ai-relevance.md` — Relevance filtering
- `prompts/translate.md` — Translation guidelines

Tell Claude "make summaries more technical" or edit files directly.

---

## 🆚 Comparison with follow-builders

Andy Follows is inspired by [follow-builders](https://github.com/zarazhangrui/follow-builders) by Zara Zhang, but customized for Andy's Freedom House framework:

| Feature | follow-builders | andy-follows |
|---------|----------------|--------------|
| **Focus** | General AI builders | AI + Product/Investment/IP pillars |
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

## 中文版

### 🏠 服务于安迪自由之屋

**Andy Follows** 是一个专为**安迪自由之屋**设计的 AI 情报系统——一个建立在三大支柱之上的战略框架，代表了 AI 与关键领域的未来交汇：

1. **🏗️ AI + 产品** — 理解 AI 如何改变产品开发、设计和用户体验
2. **💰 AI + 投资** — 追踪 AI 经济中的资本流动、市场动态和商业模式
3. **⚖️ AI + 知识产权** — 监控知识产权战争、开源运动和监管格局

这个系统存在的目的是回答一个问题：**AI 的建设者、投资者和塑造者们究竟在做什么、在想什么？**

---

### 💡 价值主张

#### 为什么重要

在 AI 时代，**信息不对称是最大的风险**。大多数 AI 报道是：
- 🚫 不懂技术的记者的二手评论
- 🚫 追逐流量的网红的炒作营销
- 🚫 错过战略意义的肤浅总结
- 🚫 淹没信号的噪音

**Andy Follows** 通过以下方式切入本质：

✅ **直达源头** — 来自建设十亿美元 AI 公司的创始人、部署资本的 VC、塑造领域的研究者的直接洞察  
✅ **第一性原理思考** — 理解决策背后的*原因*，而不仅仅是*发生了什么*  
✅ **战略背景** — 连接产品发布、投资趋势和知识产权战争  
✅ **全球视野** — 聚焦海外（主要是美国/欧洲）信息源，AI 创新的集中地  
✅ **AI 原生过滤** — 严格的 AI 相关内容，无关的科技新闻被排除

#### 你将获得什么

**时间**：每天 30-60 分钟精选洞察 vs. 数小时刷 Twitter/博客  
**清晰度**：战略信号与营销噪音分离  
**优势**：在第一性原理洞察成为主流之前获取  
**对齐**：按你的战略框架优先排序（产品 > 投资 > IP）

#### 实际影响

这个系统帮助你：
- **做出更好的产品决策** — 向解决类似问题的建设者学习
- **发现投资机会** — 看到资本和人才的流向
- **规避 IP 风险** — 在开源 vs 闭源辩论影响你之前理解它
- **领先监管** — 追踪可能改变游戏规则的政策发展

---

### 🎯 理念：关注建设者，而非影响者

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

### 📊 你将获得什么

每日或每周摘要，推送到你的首选渠道（Telegram、飞书或对话内显示）：

#### 🏗️ AI + 产品（优先级 1：基础知识）
- AI 公司的产品发布和更新
- 实现挑战的技术深度解析
- AI 界面的 UX/UI 模式
- 开发者体验洞察
- 产品策略和定位

**示例洞察**：Anthropic 如何优化 Claude 的上下文窗口以降低 80% 延迟；Vercel 的 v0 如何通过 AI 优先设计工具达到 100 万开发者。

#### 💰 AI + 投资（优先级 2：市场情报）
- 融资轮次和估值
- VC 投资理论和市场分析
- 商业模式创新
- 并购活动和战略动向
- 单位经济效益和盈利路径

**示例洞察**：OpenAI 的 66 亿美元融资暗示盈利路径；a16z 关于基础模型毛利压缩的理论。

#### ⚖️ AI + 知识产权（优先级 3：法律与政策背景）
- 开源 vs 闭源辩论
- 版权和专利诉讼
- 监管发展（欧盟 AI 法案等）
- 许可策略
- 政策提案及其影响

**示例洞察**：Meta 的 Llama 3.1 开源战略；GitHub Copilot 版权案件通过驳回动议。

---

### 🚀 快速开始

#### Claude Code 用户

1. **克隆仓库**：
```bash
git clone https://github.com/andyzheng547/andy-follows.git ~/.claude/skills/andy-follows
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

---

### 📡 信息源（45+ 总计）

#### AI + 产品建设者（19 个源）
**Twitter**：Andrej Karpathy, Swyx, Josh Woodward, Boris Cherny, Guillermo Rauch, Amjad Masad, Alex Albert 等  
**博客**：Anthropic Engineering, OpenAI Blog, Google AI Blog, Vercel AI  
**播客**：Latent Space

#### AI + 投资领袖（16 个源）
**Twitter**：Marc Andreessen, Garry Tan, Matt Turck, Sam Altman, Aaron Levie 等  
**博客**：a16z AI, Sequoia AI, YC Blog, FirstMark  
**播客**：No Priors, Training Data, The MAD Podcast

#### AI + 知识产权思想领袖（10 个源）
**Twitter**：Yann LeCun, Ethan Mollick, François Chollet, Elon Musk（仅 AI）等  
**博客**：Hugging Face, Stability AI, Meta AI, OpenAI Policy  
**播客**：Unsupervised Learning

所有信息源都**聚焦海外**（主要是美国/欧洲），代表有真正实战经验的**第一性原理思考者**。

---

### 📄 许可证

MIT License — 可自由使用、修改和分享。

---

### 🙏 致谢

本项目受 Zara Zhang 的 [follow-builders](https://github.com/zarazhangrui/follow-builders) 启发并基于其构建。中心化 feed 架构和对话式设置均改编自该优秀项目。

特别感谢 AI 社区在公开场合构建并分享洞察，使这样的项目成为可能。

---

**Generated by Andy Follows — Follow builders, not influencers**  
**为安迪自由之屋服务 — 关注建设者，而非影响者**
