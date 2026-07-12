#!/usr/bin/env node

/**
 * Generate Digest Script
 *
 * Fetches feed JSONs and generates a formatted digest using AI summarization.
 * This runs on the user's machine via Claude Code skill.
 */

const fs = require('fs');
const path = require('path');

// Load configuration
const config = require('../config/config-schema.json');

/**
 * Fetch feed from URL or local file
 */
async function fetchFeed(url) {
  // In production, fetch from GitHub raw URL
  // For local testing, read from file
  const filename = path.basename(url);
  const filepath = path.join(__dirname, '..', filename);

  if (fs.existsSync(filepath)) {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  }

  // Fallback to fetch if file doesn't exist
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error.message);
    return null;
  }
}

/**
 * Load prompts
 */
function loadPrompts() {
  const promptsDir = path.join(__dirname, '..', 'prompts');

  return {
    aiProduct: fs.readFileSync(path.join(promptsDir, 'summarize-ai-product.md'), 'utf-8'),
    aiInvestment: fs.readFileSync(path.join(promptsDir, 'summarize-ai-investment.md'), 'utf-8'),
    aiIP: fs.readFileSync(path.join(promptsDir, 'summarize-ai-ip.md'), 'utf-8'),
    filter: fs.readFileSync(path.join(promptsDir, 'filter-ai-relevance.md'), 'utf-8'),
    digestIntro: fs.readFileSync(path.join(promptsDir, 'digest-intro.md'), 'utf-8')
  };
}

/**
 * Main digest generation function
 * This would be called by the Claude Code agent
 */
async function generateDigest(options = {}) {
  console.log('📰 Generating Andy Follows digest...\n');

  // Load prompts
  const prompts = loadPrompts();

  // Fetch feeds
  const feeds = {
    product: await fetchFeed(config.feed_urls.ai_product),
    investment: await fetchFeed(config.feed_urls.ai_investment),
    ip: await fetchFeed(config.feed_urls.ai_ip)
  };

  // Check if feeds are available
  const availableFeeds = Object.entries(feeds).filter(([_, feed]) => feed !== null);

  if (availableFeeds.length === 0) {
    console.error('❌ No feeds available. Run fetch-feeds.js first or check feed URLs.');
    return null;
  }

  console.log(`✅ Loaded ${availableFeeds.length} feed(s)`);
  console.log('');

  // Return structured data for AI agent to process
  return {
    feeds,
    prompts,
    config: {
      language: config.user_config.language,
      aiRelevanceThreshold: config.user_config.content_preferences.ai_relevance_threshold,
      maxItemsPerCategory: config.user_config.content_preferences.max_items_per_category
    },
    instructions: `
Generate a digest following these steps:

1. For each feed category (product, investment, ip):
   a. Filter items using the AI relevance filter prompt
   b. Keep only high-confidence AI-relevant items
   c. Take top ${config.user_config.content_preferences.max_items_per_category} items by date

2. For each selected item:
   a. Apply the appropriate summarization prompt
   b. Extract key insights following the prompt format
   c. Ensure summaries are concise and actionable

3. Structure the final digest:
   a. Use the digest-intro template as framework
   b. Present categories in priority order: Product → Investment → IP
   c. Format in markdown with clear sections

4. Language: ${config.user_config.language === 'bilingual' ? 'Provide both English and Chinese (中英对照)' : config.user_config.language}

Return the complete digest as markdown text.
    `.trim()
  };
}

/**
 * CLI entry point
 */
async function main() {
  const result = await generateDigest();

  if (result) {
    console.log('✨ Digest data prepared!');
    console.log('\nNext steps:');
    console.log('1. Process feeds through AI agent using the prompts');
    console.log('2. Generate formatted digest');
    console.log('3. Deliver via Telegram/Lark using deliver.js');
    console.log('\nTo use as a skill, invoke via Claude Code with: /andy-follows');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateDigest, loadPrompts, fetchFeed };
