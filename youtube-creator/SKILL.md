name: youtube-creator
description: Skill for creating and managing YouTube video projects. Use this skill to duplicate a YouTube video template, initiate a new video project, and edit the script within the template.
---

# YouTube Video Creator Skill

This skill provides functionality for managing YouTube video projects, including creating new projects from a template and editing their scripts.

## Upload Detail Templates

Upload detail templates are stored in the `youtube-creator/assets/youtube-template/upload_details/` directory. These templates provide pre-defined video details and descriptions for different types of YouTube videos.

Available templates:
- `upload-generic.md`
- `upload-project-reality-devblogs.md`
- `upload-project-reality-gameplay.md`
- `upload-project-reality-media.md`
- `upload-reshade-devlogs.md`

## Usage

### 1. Create a New Video Project

To create a new YouTube video project based on the standard template, use the `create_project.cjs` script. This will duplicate the `youtube-template` from the skill's assets to a new directory and copy a specified upload detail template into the new project as `upload.md`. If no upload template is specified, `upload-generic.md` will be used by default.

**Command:**
```bash
node .agents\skills\youtube-creator\scripts\create_project.cjs <NewProjectName> [upload-template-name.md]
```
- `<NewProjectName>`: The desired name for your new video project directory (e.g., `My Awesome Video`).
- `[upload-template-name.md]`: (Optional) The filename of the upload detail template to use from the `upload_details` directory (e.g., `upload-project-reality-devblogs.md`).

### 2. Edit a Video Project Script

To edit the `script.md` file of an existing YouTube video project, use the `edit_script.cjs` script.

**Command:**
```bash
node .agents\skills\youtube-creator\scripts\edit_script.cjs <ProjectName> "<NewScriptContent>"
```
- `<ProjectName>`: The name of the existing video project (e.g., `My Awesome Video`).
- `<NewScriptContent>`: The entire new content for the `script.md` file, enclosed in double quotes. Be careful with special characters and newlines within the string. For complex edits, it might be better to read the file, modify it programmatically, and then write it back.
