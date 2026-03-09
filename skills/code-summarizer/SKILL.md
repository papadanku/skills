---
name: code-summarizer
description: Summarize code changes for commit messages and PRs using headless mode. Use when generating summaries from git diffs, staged changes, or piped input.
---

# Code Summarizer

This skill helps summarize code changes concisely, often following Conventional Commits format, using Gemini CLI's headless mode.

## Workflows

### 1. Summarize Staged Changes
Run the following to get a summary of changes staged for commit:
```bash
node scripts/summarize.cjs --staged
```

### 2. Summarize Unstaged Changes
Run the following to get a summary of unstaged changes in the work tree:
```bash
node scripts/summarize.cjs --unstaged
```

### 3. Manual Headless Pipe
You can also manually pipe a git diff to `gemini` in headless mode:
```bash
git diff --cached | gemini -p "Summarize these changes as a commit message"
```

## Reference Materials

- **[commit_conventions.md](references/commit_conventions.md)**: Guidelines for Conventional Commits and best practices for writing summaries.

## Bundled Resources

- **scripts/summarize.cjs**: A Node.js script that fetches git diffs and calls `gemini --headless` to generate a summary.
