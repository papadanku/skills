# AI Agent Skills Repository

This repository contains a collection of specialized skills designed to extend the capabilities of various AI development tools that support agent skills. These skills enable AI agents to perform specific tasks, generate content, or interact with various systems more effectively.

## Available Skills

- **psychologist-writer**: Assists in generating psychological assessments and reports.
- **reshadefx-coder**: Provides assistance with ReShadeFX shader development.
- **restructuredtext-writer**: Helps in writing and formatting documentation using reStructuredText.
- **youtube-creator**: Facilitates the creation of YouTube video content, including scripts and assets.

## Installation

Install these skills by placing the `skills` folder in your AI CLI's search path.

### Gemini CLI

Gemini CLI looks for `SKILL.md` files in the following locations:

- **Global**: `~/.gemini/skills/`
- **Project**: `./.agents/skills/`

### Claude Code

Claude Code discovers skills in these folders:

- **Global**: `~/.claude/skills/`
- **Project**: `./.claude/skills/`

### Mistral Vibe

Mistral Vibe searches for skills in these locations:

- **Global**: `~/.vibe/skills/`
- **Project**: `./.vibe/skills/`

### How to Install

To install a skill, copy its specific folder (e.g., `skills/python-coder`) into the appropriate directory for your CLI. For project-specific use, symlinking the `skills/` directory to your project's root is the recommended approach.
