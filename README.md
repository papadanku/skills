# AI Agent Skills Repository

This repository contains a collection of specialized skills designed to extend the capabilities of various AI development tools that support agent skills. These skills enable AI agents to perform specific tasks, generate content, or interact with various systems more effectively.

## Available Skills

- **reshadefx-coder**: Expert ReShadeFX (HLSL) assistant for finding bugs, generating shader code, and suggesting optimized revisions.
- **restructuredtext-writer**: Multi-tool for reStructuredText (RST) and Sphinx documentation management and generation.
- **youtube-creator**: Facilitates the creation and management of YouTube video projects, including scripts and assets.

## Available Agents

- **git-diff-summarizer**: Summarizes staged changes concisely using the Conventional Commits format.

## Installation

- Install these skills by placing the `skills` folder in your AI CLI's search path.
- Install these agents by placing the `agents` folder in your AI CLI's search path.

### Gemini CLI

Gemini CLI looks for `SKILL.md` and subagent files in the following locations:

- **Global (Skills)**: `~/.gemini/skills/`
- **Project (Skills)**: `./.agents/skills/`
- **Global (Subagents)**: `~/.gemini/agents/`
- **Project (Subagents)**: `./.agents/agents/`

### Claude Code

Claude Code discovers skills and subagent files in these folders:

- **Global (Skills)**: `~/.claude/skills/`
- **Project (Skills)**: `./.claude/skills/`
- **Global (Subagents)**: `~/.claude/agents/`
- **Project (Subagents)**: `./.claude/agents/`

### Mistral Vibe

Mistral Vibe searches for skills and subagent files in these locations:

- **Global (Skills)**: `~/.vibe/skills/`
- **Project (Skills)**: `./.vibe/skills/`
- **Global (Subagents)**: `~/.vibe/agents/`
- **Project (Subagents)**: `./.vibe/agents/`

### How to Install

To install a skill, copy its specific folder (e.g., `skills/python-coder`) into the appropriate directory for your CLI. For project-specific use, symlinking the `skills/` directory to your project's root is the recommended approach.
