---
name: andy-follows
description: AI-powered digest focusing on AI + Product, AI + Investment, and AI + IP from top builders and investors
version: 1.0.0
author: Andy
---

# Andy Follows

Your personalized AI digest tracking the top builders, investors, and thought leaders across three key areas:

1. **🏗️ AI + Product** — Product development, design, and commercialization
2. **💰 AI + Investment** — Funding trends, market dynamics, and strategic insights
3. **⚖️ AI + IP** — Open source, legal developments, and policy

**Philosophy**: Follow people who build, invest in, and shape AI — not influencers who regurgitate information.

## Quick Start

When the user says "set up Andy Follows" or invokes `/andy-follows`, guide them through:

### 1. Initial Setup

Ask the user:

**Delivery preferences:**
- "How would you like to receive your digest?"
  - Telegram (provide bot token and chat ID)
  - Lark/Feishu (provide webhook URL)
  - In-chat only (no external delivery)

**Schedule:**
- "How often? Daily or weekly?"
- "What time? (e.g., 8:00 AM)" 
- "What timezone? (e.g., Asia/Shanghai)"

**Language:**
- "Language preference? English, Chinese, or Bilingual (中英对照)?"

**Content preferences:**
- "Any specific focus areas or people you want to prioritize?"

### 2. Configuration

Create or update `~/.andy-follows/.env`:

```bash
# Telegram (optional)
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Lark/Feishu (optional)
LARK_WEBHOOK_URL=your_webhook_url_here

# Schedule
DIGEST_FREQUENCY=daily
DIGEST_TIME=08:00
DIGEST_TIMEZONE=Asia/Shanghai

# Preferences
DIGEST_LANGUAGE=bilingual
AI_RELEVANCE_THRESHOLD=high
```

### 3. First Digest

After setup, immediately generate and deliver the first digest:

1. Run `node scripts/generate-digest.js` to load feeds and prompts
2. Process the feeds using the provided prompts:
   - Filter for AI relevance using `prompts/filter-ai-relevance.md`
   - Summarize each category using the respective prompts
   - Structure according to `prompts/digest-intro.md`
3. Save the digest to `latest-digest.md`
4. Run `node scripts/deliver.js` to send to configured channels

### 4. Schedule Setup

Set up a cron job or scheduled task:

**macOS/Linux (crontab):**
```bash
# Daily at 8 AM
0 8 * * * cd ~/.claude/skills/andy-follows && node scripts/generate-digest.js && node scripts/deliver.js
```

**Or use Claude Code's built-in scheduler:**
```javascript
// Schedule daily digest generation
await schedule({
  cron: '0 8 * * *',
  task: 'Generate and deliver Andy Follows digest',
  command: 'cd ~/.claude/skills/andy-follows && node scripts/generate-digest.js && node scripts/deliver.js'
});
```

## Ongoing Management

### View Current Settings

When user asks "show my Andy Follows settings", read and display `~/.andy-follows/.env`.

### Modify Settings

Handle requests like:
- "Switch to weekly digests on Monday mornings"
- "Change language to English only"
- "Add [person] to my sources"
- "Make summaries shorter"

Update the relevant config files or env variables.

### Manual Digest Generation

When user says "generate Andy Follows digest" or "show me today's AI updates":

1. Run the digest generation workflow
2. Display the result in chat
3. Optionally deliver to configured channels

## Key Files

- `config/sources-ai-product.json` — AI + Product sources
- `config/sources-ai-investment.json` — AI + Investment sources  
- `config/sources-ai-ip.json` — AI + IP sources
- `prompts/summarize-ai-product.md` — Product summarization prompt
- `prompts/summarize-ai-investment.md` — Investment summarization prompt
- `prompts/summarize-ai-ip.md` — IP summarization prompt
- `prompts/filter-ai-relevance.md` — AI relevance filter
- `prompts/digest-intro.md` — Digest format template

## Sources

This digest tracks:
- **26+ AI product builders** (Andrej Karpathy, Swyx, Josh Woodward, etc.)
- **12+ top VCs and founders** (Marc Andreessen, Garry Tan, Sam Altman, etc.)
- **8+ AI policy/IP leaders** (Yann LeCun, Ethan Mollick, Elon Musk [AI-only], etc.)
- **Official AI company blogs** (Anthropic, OpenAI, Google AI, etc.)
- **6+ AI podcasts** (Latent Space, No Priors, Training Data, etc.)

Sources are curated centrally and updated automatically.

## Privacy

- No API keys sent externally (feeds fetched centrally)
- Telegram/Lark credentials stored locally in `~/.andy-follows/.env`
- Only reads public content
- Configuration stays on your machine

## Customization

Users can customize summarization prompts by editing files in `prompts/`:
- Ask the agent to modify prompts conversationally
- Or directly edit markdown files for full control

## Notes for Agent

- The feed JSONs (`feed-ai-product.json`, etc.) are fetched from a central repository
- In production, these would be updated daily via GitHub Actions
- For MVP, you may need to use placeholder data or reference the follow-builders feeds
- Focus on AI relevance — strictly filter non-AI content using the filter prompt
- Maintain the priority order: Product → Investment → IP

## License

MIT
