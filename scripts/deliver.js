#!/usr/bin/env node

/**
 * Deliver Digest Script
 *
 * Sends the generated digest to configured delivery channels:
 * - Telegram
 * - Lark (Feishu)
 * - In-chat display
 */

const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(process.env.HOME, '.andy-follows', '.env') });

/**
 * Send to Telegram
 */
async function sendToTelegram(content) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.log('⚠️  Telegram credentials not configured. Skipping.');
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Split content if too long (Telegram has 4096 char limit)
    const chunks = splitContent(content, 4000);

    for (const chunk of chunks) {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: chunk,
          parse_mode: 'Markdown',
          disable_web_page_preview: true
        })
      });

      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.statusText}`);
      }

      // Small delay between chunks
      if (chunks.length > 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log('✅ Sent to Telegram');
    return true;
  } catch (error) {
    console.error('❌ Failed to send to Telegram:', error.message);
    return false;
  }
}

/**
 * Send to Lark (Feishu)
 */
async function sendToLark(content) {
  const webhookUrl = process.env.LARK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log('⚠️  Lark webhook not configured. Skipping.');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        msg_type: 'text',
        content: {
          text: content
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Lark webhook error: ${response.statusText}`);
    }

    console.log('✅ Sent to Lark');
    return true;
  } catch (error) {
    console.error('❌ Failed to send to Lark:', error.message);
    return false;
  }
}

/**
 * Split content into chunks (for Telegram message limits)
 */
function splitContent(content, maxLength) {
  if (content.length <= maxLength) {
    return [content];
  }

  const chunks = [];
  const lines = content.split('\n');
  let currentChunk = '';

  for (const line of lines) {
    if ((currentChunk + line + '\n').length > maxLength) {
      if (currentChunk) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = line + '\n';
    } else {
      currentChunk += line + '\n';
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

/**
 * Display in chat
 */
function displayInChat(content) {
  console.log('\n' + '='.repeat(80));
  console.log('📰 ANDY FOLLOWS DIGEST');
  console.log('='.repeat(80) + '\n');
  console.log(content);
  console.log('\n' + '='.repeat(80));
}

/**
 * Main delivery function
 */
async function deliverDigest(content, options = {}) {
  console.log('📤 Delivering digest...\n');

  const results = {
    telegram: false,
    lark: false,
    inChat: false
  };

  // Send to configured channels
  if (options.telegram !== false) {
    results.telegram = await sendToTelegram(content);
  }

  if (options.lark !== false) {
    results.lark = await sendToLark(content);
  }

  if (options.inChat !== false) {
    displayInChat(content);
    results.inChat = true;
  }

  console.log('\n✨ Delivery complete!');
  return results;
}

/**
 * CLI entry point
 */
async function main() {
  const digestPath = process.argv[2] || path.join(__dirname, '..', 'latest-digest.md');

  if (!fs.existsSync(digestPath)) {
    console.error('❌ Digest file not found:', digestPath);
    console.log('Usage: node deliver.js [path-to-digest.md]');
    process.exit(1);
  }

  const content = fs.readFileSync(digestPath, 'utf-8');
  await deliverDigest(content);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { deliverDigest, sendToTelegram, sendToLark };
