# Andy Follows

**English** | [中文](#中文版)

## Follow Builders, Not Influencers

An AI-powered digest that tracks top builders, investors, and thought leaders across three key areas:

1. **🏗️ AI + Product** — Product development, design, and commercialization insights from builders
2. **💰 AI + Investment** — Funding trends, market analysis, and strategic insights from VCs and founders
3. **⚖️ AI + IP** — Intellectual property, open source debates, and legal/policy developments

**Philosophy**: Follow people who build, invest in, and shape AI — not influencers who regurgitate information. This digest focuses on first-principles thinking and original insights from overseas sources.

## What You Get

A daily or weekly digest delivered to your preferred messaging app (Telegram, Lark, or in-chat) with:

- **AI Product insights**: New launches, technical deep-dives, UX patterns, and product strategy
- **AI Investment insights**: Funding rounds, market analysis, business models, and VC perspectives
- **AI IP insights**: Open source releases, copyright cases, patents, and regulatory developments
- Links to all original content
- Available in English, Chinese, or Bilingual

## Quick Start

### For Claude Code Users

1. Clone this skill:
```bash
git clone https://github.com/YOUR_USERNAME/andy-follows.git ~/.claude/skills/andy-follows
cd ~/.claude/skills/andy-follows/scripts && npm install
```

2. Say "set up Andy Follows" or invoke `/andy-follows`

3. The agent walks you through setup conversationally — no config files to edit

### For Manual Setup

1. Clone the repository
2. Install dependencies: `cd scripts && npm install`
3. Configure delivery in `~/.andy-follows/.env`:
```bash
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
LARK_WEBHOOK_URL=your_webhook
DIGEST_LANGUAGE=bilingual
```
4. Run: `node scripts/generate-digest.js && node scripts/deliver.js`

## Changing Settings

Your delivery preferences are configurable through conversation with Claude:

- "Switch to weekly digests on Monday mornings"
- "Change language to Chinese"
- "Make the summaries shorter"
- "Show me my current settings"

## Default Sources

### AI + Product Builders (14+)

[Andrej Karpathy](https://twitter.com/karpathy), [Swyx](https://twitter.com/swyx), [Josh Woodward](https://twitter.com/joshwhiton), [Boris Cherny](https://twitter.com/bcherny), [Guillermo Rauch](https://twitter.com/rauchg), [Amjad Masad](https://twitter.com/amasad), [Alex Albert](https://twitter.com/alexalbert__), and more...

### AI + Investment Leaders (9+)

[Marc Andreessen](https://twitter.com/pmarca), [Garry Tan](https://twitter.com/garrytan), [Matt Turck](https://twitter.com/mattturck), [Sam Altman](https://twitter.com/sama), [Aaron Levie](https://twitter.com/levie), and more...

### AI + IP Thought Leaders (5+)

[Yann LeCun](https://twitter.com/ylecun), [Ethan Mollick](https://twitter.com/emollick), [François Chollet](https://twitter.com/fchollet), [Elon Musk](https://twitter.com/elonmusk) (AI-related only), and more...

### Official Blogs (8+)

Anthropic Engineering, OpenAI Blog, Google AI Blog, a16z AI, Hugging Face, Meta AI, and more...

### Podcasts (6+)

Latent Space, No Priors, Training Data, Unsupervised Learning, The MAD Podcast, AI & I by Every

## How It Works

1. A central feed is updated daily with the latest content from all sources
2. Your agent fetches the feeds — one HTTP request, no API keys needed
3. AI filters for relevance and summarizes using your preferences
4. The digest is delivered to your messaging app or shown in-chat

See [examples/sample-digest.md](examples/sample-digest.md) for sample output.

## Key Features

### AI Relevance Filtering
- Strictly filters for AI-related content
- Elon Musk tweets about SpaceX? Filtered out.
- Elon Musk tweets about xAI or Grok? Included.

### Priority Ordering
Content is presented in order of strategic importance:
1. AI + Product (foundational knowledge)
2. AI + Investment (market insights)
3. AI + IP (policy & legal context)

### Bilingual Support
Native support for English/Chinese bilingual output with proper terminology translation.

### Customizable Prompts
All summarization logic is in plain-English markdown files you can customize:
- `prompts/summarize-ai-product.md`
- `prompts/summarize-ai-investment.md`
- `prompts/summarize-ai-ip.md`
- `prompts/filter-ai-relevance.md`

## Customization

### Through Conversation (Recommended)
Tell your agent what you want:
- "Focus more on AI product strategy"
- "I want deeper technical details"
- "Make it more concise"

### Direct Editing (Power Users)
Edit the prompt files directly. Changes take effect on the next digest.

## Privacy

- No API keys sent anywhere — all content fetched centrally
- Telegram/Lark credentials stored locally in `~/.andy-follows/.env`
- Only reads public content (public posts, blogs, podcasts)
- Your configuration and reading history stay on your machine

## Requirements

- An AI agent (Claude Code or similar)
- Node.js 18+ (for running scripts)
- Internet connection (to fetch the central feed)

No API keys needed for content access.

## Installation

### Claude Code
```bash
git clone https://github.com/YOUR_USERNAME/andy-follows.git ~/.claude/skills/andy-follows
cd ~/.claude/skills/andy-follows/scripts && npm install
```

### OpenClaw
```bash
git clone https://github.com/YOUR_USERNAME/andy-follows.git ~/skills/andy-follows
cd ~/skills/andy-follows/scripts && npm install
```

## Comparison with follow-builders

Andy Follows is inspired by [follow-builders](https://github.com/zarazhangrui/follow-builders) but focuses specifically on:

| Feature | follow-builders | andy-follows |
|---------|----------------|--------------|
| **Focus** | General AI builders | AI + Product/Investment/IP |
| **Geography** | Global | Overseas only (non-China) |
| **Filtering** | General AI | Strict AI relevance + category fit |
| **Structure** | Single feed | 3 category feeds with priority |
| **Sources** | 26 Twitter + 6 podcasts | 28+ Twitter + 6 podcasts + 8+ blogs |

## Contributing

Contributions welcome! Especially:
- Additional high-quality sources (must be overseas, builder-focused)
- Improvements to summarization prompts
- Bug fixes and performance improvements

## Acknowledgments

This project is inspired by [follow-builders](https://github.com/zarazhangrui/follow-builders) by Zara Zhang. The central feed architecture and conversational setup approach are adapted from that excellent project.

## License

MIT

---

## 中文版

### 关注建设者，而非影响者

一个 AI 驱动的资讯摘要，追踪三大关键领域的顶级建设者、投资人和思想领袖：

1. **🏗️ AI + 产品** — 来自建设者的产品开发、设计和商业化洞察
2. **💰 AI + 投资** — 来自 VC 和创始人的融资趋势、市场分析和战略洞察
3. **⚖️ AI + 知识产权** — 开源、法律发展和政策动态

**理念**：关注真正在构建、投资和塑造 AI 的人——而非转述信息的影响者。专注于第一性原理思考和来自海外的原创洞察。

### 你将获得什么

每日或每周摘要，推送到你的消息应用（Telegram、飞书或对话内显示）：

- **AI 产品洞察**：新产品发布、技术深度、UX 模式、产品策略
- **AI 投资洞察**：融资轮次、市场分析、商业模式、VC 视角
- **AI 知识产权洞察**：开源发布、版权案例、专利、监管动态
- 所有原始内容链接
- 支持英文、中文或双语

### 快速开始

#### Claude Code 用户

1. 克隆此技能：
```bash
git clone https://github.com/YOUR_USERNAME/andy-follows.git ~/.claude/skills/andy-follows
cd ~/.claude/skills/andy-follows/scripts && npm install
```

2. 对 Claude 说："设置 Andy Follows" 或调用 `/andy-follows`

3. Agent 会通过对话引导你完成设置——无需手动编辑配置文件

### 修改设置

通过与 Claude 对话来配置：

- "切换到每周一早晨的摘要"
- "改成中文"
- "让摘要更简洁"
- "显示我当前的设置"

### 如何运作

1. 中心化 feed 每天更新所有信息源的最新内容
2. 你的 agent 获取 feed——一个 HTTP 请求，无需 API 密钥
3. AI 根据你的偏好过滤相关性并生成摘要
4. 摘要推送到你的消息应用或在对话中显示

查看 [examples/sample-digest.md](examples/sample-digest.md) 了解示例输出。

### 主要特性

#### AI 相关性过滤
- 严格过滤 AI 相关内容
- Elon Musk 发 SpaceX 推文？过滤掉。
- Elon Musk 发 xAI 或 Grok 推文？保留。

#### 优先级排序
内容按战略重要性排序：
1. AI + 产品（基础知识）
2. AI + 投资（市场洞察）
3. AI + 知识产权（政策和法律背景）

#### 双语支持
原生支持中英双语输出，专业术语翻译优化。

### 许可证

MIT

---

**Generated by Andy Follows — Follow builders, not influencers**
