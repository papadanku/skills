# AI Agent Skills Repository

This repository contains a collection of specialized skills designed to extend the capabilities of various AI development tools that support agent skills. These skills enable AI agents to perform specific tasks, generate content, or interact with various systems more effectively.

## Available Skills

- **prbf2-cs-coder**: Assistant for finding bugs, generating, and optimizing CS-Script (.csx) build scripts in Project Reality BF2.
- **prbf2-python-coder**: Assistant for debugging, generating, and optimizing Python 2.7.18 game logic for Project Reality: BF2.
- **prbf2-shader-coder**: Expert HLSL assistant for finding bugs, generating, and optimizing shaders for RealityShaders in Project Reality: BF2.
- **reshadefx-coder**: Expert ReShadeFX (HLSL) assistant for finding bugs, generating shader code, and suggesting optimized revisions.
- **restructuredtext-writer**: Multi-tool for reStructuredText (RST) and Sphinx documentation management and generation.
- **youtube-creator**: Facilitates the creation and management of YouTube video projects, including scripts and assets.

## Available Agents

- **git-diff-summarizer**: Summarizes staged changes concisely using the Conventional Commits format.

## Installation

- Install these skills by placing the `skills` folder in your AI CLI's global or workspace-specific search path.
- Install these agents by placing the `agents` folder in your AI CLI's global or workspace-specific search path.

### Antigravity

> https://antigravity.google/

*Google Antigravity* looks for `SKILL.md` and subagent files in the following locations:

- **Global (All Workspaces)**
    - Skills: `~/.gemini/config/skills/<skill-folder>/`
- **Workspace-Specific**
    - Skills: `<workspace-root>/.agents/skills/<skill-folder>/`

### Claude Code

> https://claude.com/product/claude-code

*Claude Code* looks for `SKILL.md` and subagent files in the following locations:

- **Global (All Workspaces)**
    - Skills: `./.claude/skills/`
    - Subagents: `./.claude/agents/`
- **Workspace-Specific**
    - Skills: `~/.claude/skills/`
    - Subagents: `~/.claude/agents/`

### opencode

> https://opencode.ai/

*opencode* looks for `SKILL.md` and subagent files in the following locations:

- **Global (All Workspaces)**
    - Skills: `.opencode/skills/<name>/SKILL.md`
    - Subagents: `.opencode/agents/`
- **Workspace-Specific**
    - Skills: `~/.config/opencode/skills/<name>/SKILL.md`
    - Subagents: `~/.config/opencode/agents/`

### Mistral Vibe

> https://mistral.ai/products/vibe/

Mistral Vibe looks for `SKILL.md` and subagent files in the following locations:

- **Global (All Workspaces)**
    - Skills: `~/.vibe/agents/`
    - Subagents: `./.vibe/agents/`
- **Workspace-Specific**
    - Skills: `~/.vibe/skills/`
    - Subagents: `./.vibe/skills/`
