# Quick Start Guide - Andy Follows

## For Andy (Immediate Use)

### Step 1: Move to Claude Skills Directory

```bash
cd /Users/andy/Documents/AICode
mv andy-follows ~/.claude/skills/andy-follows
```

### Step 2: Configure Delivery Channels

Create config directory and file:

```bash
mkdir -p ~/.andy-follows
cp ~/.claude/skills/andy-follows/.env.example ~/.andy-follows/.env
```

Edit `~/.andy-follows/.env`:

```bash
# Telegram (get from @BotFather)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Feishu/Lark (get from custom bot)
LARK_WEBHOOK_URL=your_webhook_url

# Preferences
DIGEST_LANGUAGE=bilingual
DIGEST_FREQUENCY=daily
DIGEST_TIME=08:00
```

### Step 3: Test It

Open Claude Code and say:

```
设置 Andy Follows
```

Or invoke directly:

```
/andy-follows
```

The agent will generate your first digest immediately.

### Step 4: Schedule Daily Digest

#### Option A: Using Claude Code (Recommended)

Tell Claude:

```
每天早上 8 点自动生成 Andy Follows 摘要
```

#### Option B: Using crontab

```bash
crontab -e
```

Add:

```
0 8 * * * cd ~/.claude/skills/andy-follows && node scripts/generate-digest.js && node scripts/deliver.js >> ~/.andy-follows/logs/cron.log 2>&1
```

## For GitHub Deployment (Optional)

If you want the central feed to auto-update:

### Step 1: Create GitHub Repository

```bash
cd ~/.claude/skills/andy-follows
gh repo create andy/andy-follows --public --source=. --remote=origin --push
```

### Step 2: Add API Secrets

Go to GitHub repo settings → Secrets and add:

- `TWITTER_API_KEY`
- `TWITTER_API_SECRET`
- `YOUTUBE_API_KEY`

### Step 3: Enable GitHub Actions

The workflow will run daily at 6:47 AM UTC to update feeds.

### Step 4: Update Feed URLs

Edit `config/config-schema.json`:

```json
"feed_urls": {
  "ai_product": "https://raw.githubusercontent.com/andy/andy-follows/main/feed-ai-product.json",
  "ai_investment": "https://raw.githubusercontent.com/andy/andy-follows/main/feed-ai-investment.json",
  "ai_ip": "https://raw.githubusercontent.com/andy/andy-follows/main/feed-ai-ip.json"
}
```

## Telegram Bot Setup

### Create Bot

1. Open Telegram, search for `@BotFather`
2. Send `/newbot`
3. Follow prompts to name your bot (e.g., "Andy Follows Bot")
4. Save the bot token

### Get Chat ID

1. Send a message to your bot
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Find `"chat":{"id":123456789}` in the response
4. Save that number as your chat ID

## Lark/Feishu Webhook Setup

1. Open Lark/Feishu
2. Create a group or use existing one
3. Group settings → Bots → Add Bot → Custom Bot
4. Copy the webhook URL
5. Paste into `.env`

## Testing the Digest

### Manual Test Run

```bash
cd ~/.claude/skills/andy-follows

# Generate digest (will use placeholder data initially)
node scripts/generate-digest.js

# If you have a digest markdown file, deliver it
node scripts/deliver.js latest-digest.md
```

### With Real Feeds

Once GitHub Actions has run and generated real feeds, the digest will pull actual content.

## Customizing Sources

### Add a New Twitter Account

Edit the relevant source file (`config/sources-ai-*.json`):

```json
{
  "username": "new_account",
  "name": "Person Name",
  "role": "Their Role",
  "focus": "What they focus on"
}
```

### Modify Summarization Prompts

Edit prompt files in `prompts/`:

- `summarize-ai-product.md` - For product insights
- `summarize-ai-investment.md` - For investment insights
- `summarize-ai-ip.md` - For IP/legal insights

Or tell Claude:

```
修改 AI 产品摘要的 prompt，让它更关注技术实现细节
```

## Troubleshooting

### "No feeds available"

The feed JSON files are currently placeholders. To get real content:

1. Deploy to GitHub with API keys (see above), OR
2. Manually populate feed files with test data, OR
3. Wait for follow-builders integration

### Telegram not sending

- Check bot token is correct
- Check chat ID is correct (it's a number, not username)
- Test manually: `curl -X POST "https://api.telegram.org/bot<TOKEN>/sendMessage" -d "chat_id=<CHAT_ID>&text=Test"`

### Lark/Feishu not sending

- Check webhook URL is complete (starts with `https://open.feishu.cn/open-apis/bot/v2/hook/`)
- Test manually: `curl -X POST "<WEBHOOK_URL>" -H "Content-Type: application/json" -d '{"msg_type":"text","content":{"text":"Test"}}'`

## What's Next

1. **Get real feed data**: Deploy to GitHub with API keys or integrate with follow-builders
2. **Test AI filtering**: Verify that non-AI content is properly filtered
3. **Refine prompts**: Adjust summarization style based on output quality
4. **Set up scheduling**: Automate daily digest generation
5. **Monitor and iterate**: Adjust sources and preferences based on digest quality

## Support

For issues or questions:
- Check `PROJECT_OVERVIEW.md` for detailed architecture
- Review `SKILL.md` for Claude Code integration details
- Reference [follow-builders](https://github.com/zarazhangrui/follow-builders) for feed fetching implementation
