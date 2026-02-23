# AI Agent Skills Repository

This repository contains a collection of specialized skills designed to extend the capabilities of various AI development tools that support agent skills. These skills enable AI agents to perform specific tasks, generate content, or interact with various systems more effectively.

## Available Skills

- **psychologist-writer**: Assists in generating psychological assessments and reports.
- **reshadefx-coder**: Provides assistance with ReShadeFX shader development.
- **restructuredtext-writer**: Helps in writing and formatting documentation using reStructuredText.
- **youtube-creator**: Facilitates the creation of YouTube video content, including scripts and assets.

## How to Install a Skill

To install a skill from this repository into your AI agent environment, follow these general steps:

1.  **Clone the Repository (if you haven't already):**
    ```bash
    git clone https://github.com/your-username/skills.git
    ```
    (Replace `https://github.com/your-username/skills.git` with the actual URL of this repository if it's different).

### For Gemini CLI

Gemini CLI allows you to install skills directly from a local path or a repository.

1.  **Navigate to the Skill Directory:**
    Change your current directory to the specific skill you want to install. For example, to install `youtube-creator`:
    ```bash
    cd skills/youtube-creator
    ```

2.  **Install the Skill:**
    Use the `gemini install` command, specifying the path to the skill's `SKILL.md` file.
    ```bash
    gemini install --path SKILL.md
    ```
    Alternatively, you can install directly from the repository URL if the skill is at the root or a known subdirectory:
    ```bash
    gemini install --repo https://github.com/your-username/skills.git --path youtube-creator/SKILL.md
    ```

For more detailed information, refer to the official Gemini CLI documentation: [https://geminicli.com/docs/cli/skills/](https://geminicli.com/docs/cli/skills/)

### For Mistral Vibe

Mistral Vibe allows you to integrate skills using its agents and skills framework.

Refer to the official Mistral Vibe documentation for detailed instructions on how to add external skills: [https://docs.mistral.ai/mistral-vibe/agents-skills](https://docs.mistral.ai/mistral-vibe/agents-skills)

### For Other AI Agent Tools

The exact method for installing a skill will depend on the specific AI development tool you are using. Most tools will require you to specify the path to the skill's definition file (often `SKILL.md` or a similar configuration file) or provide a repository URL.

Please consult the documentation for your AI agent tool for detailed instructions on how to add external skills or plugins.
