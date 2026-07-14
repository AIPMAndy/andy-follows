# Contributing to Andy Follows

Thanks for your interest in making Andy Follows better! 🚀

## Philosophy First

Before contributing, understand the core principle:

> **Follow builders, not influencers.**

We only include sources from people who:
- ✅ BUILD products (ship code, launch companies)
- ✅ DEPLOY capital (invest real money, not opinions)
- ✅ SHAPE policy (work in government, write legislation)

We exclude:
- ❌ Generic AI influencers who retweet news
- ❌ "Thought leaders" with no skin in the game
- ❌ Motivational content without tactics

## How to Contribute

### 🎯 High-Value Contributions

#### 1. Suggest New Sources

**Requirements**:
- Must fit one of the three pillars (AI + Product, AI + Investment, AI + Personal Brand)
- Must be a builder/investor/creator with real work to show
- Must be overseas-focused (non-China)
- Must consistently produce AI-relevant content

**How to submit**:
1. Open an issue using the "Suggest a source" template
2. Include 2-3 examples of their valuable content
3. Explain why they're a "builder, not influencer"

**What makes a good source**:
- ✅ Andrej Karpathy: Builds AI systems at OpenAI, ships code
- ✅ Marc Andreessen: Deploys billions in AI investments
- ✅ Dan Koe: Runs creator business, shares tactics with data
- ❌ Generic tech blogger: Recaps news without original insight
- ❌ AI influencer: Tweets motivational quotes about AI

#### 2. Improve Prompts

All summarization logic lives in `prompts/*.md`. Better prompts = better insights.

**What we're looking for**:
- More specific extraction criteria
- Better relevance filtering
- Improved translation quality
- Clearer output structure

**How to submit**:
1. Edit the prompt file
2. Test with real data
3. Show before/after examples in your PR
4. Explain the improvement

#### 3. Fix Bugs

Found something broken? Please:
1. Check if it's already reported in Issues
2. Include reproduction steps
3. Provide your environment (OS, Node version, Claude Code version)
4. Suggest a fix if you have one

#### 4. Improve Documentation

Help others get started:
- Setup guides for different environments
- Troubleshooting common issues
- Examples of customization
- Translation to other languages (Spanish, French, German welcome)

### 🚫 What We Won't Accept

- Chinese sources (project is overseas-focused by design)
- AI influencers without real work
- Non-AI content sources
- Features that break the local-first architecture
- Paid/proprietary dependencies

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/andy-follows.git
cd andy-follows

# Install dependencies
cd scripts && npm install

# Make your changes
# ...

# Test locally
# Run with Claude Code or manually test scripts

# Commit with clear message
git commit -m "feat: add new source for AI + Product pillar"

# Push and open PR
git push origin your-branch-name
```

## Commit Message Format

We use conventional commits:

- `feat:` New feature (new source, new capability)
- `fix:` Bug fix
- `docs:` Documentation only
- `style:` Code style (formatting, no logic change)
- `refactor:` Code refactor
- `test:` Adding tests
- `chore:` Maintenance (deps, config)

Examples:
```
feat: add Justin Welsh to AI + Personal Brand sources
fix: handle RSS feed parsing errors gracefully
docs: improve AnySearch setup instructions
```

## Pull Request Process

1. **Open an issue first** for major changes
2. **Keep PRs focused** — one feature/fix per PR
3. **Update docs** if behavior changes
4. **Test your changes** — run with real data
5. **Link related issues** — use "Fixes #123" in description

### PR Title Format

```
[Pillar] Brief description

Examples:
[Product] Add Simon Willison blog to sources
[Investment] Improve VC thesis extraction prompt
[Brand] Add Pieter Levels Twitter account
[Infra] Fix RSS parsing for podcasts
```

### PR Description Template

```markdown
## What does this PR do?

Brief explanation of the change.

## Which pillar does this affect?
- [ ] AI + Product
- [ ] AI + Investment  
- [ ] AI + Personal Brand
- [ ] Infrastructure/Tooling

## Why is this valuable?

How does this make Andy Follows better?

## Testing

How did you test this? Include examples.

## Screenshots (if applicable)

Show before/after if it's a visual change.
```

## Code Style

- Use existing patterns in the codebase
- Keep functions small and focused
- Comment complex logic
- No commented-out code
- No console.logs in committed code

## Questions?

- 💬 [Open a Discussion](https://github.com/AIPMAndy/andy-follows/discussions) for questions
- 🐛 [Open an Issue](https://github.com/AIPMAndy/andy-follows/issues) for bugs
- 📧 Email: andy@freedomhouse.ai

## Recognition

Contributors are recognized in:
- README acknowledgments
- Release notes
- Community shoutouts

Significant contributions may earn you a spot in the Andy Follows "Builders Circle" 🏗️

---

**Thank you for helping others achieve freedom in the AI era!** 🚀
