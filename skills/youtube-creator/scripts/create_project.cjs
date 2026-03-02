const fs = require('fs/promises');
const path = require('path');

const newProjectName = process.argv[2];
const uploadTemplateName = process.argv[3] || 'upload-generic.md'; // Default to generic

if (!newProjectName) {
  console.error('Usage: node create_project.cjs <new-project-name> [upload-template-name.md]');
  process.exit(1);
}

const skillDir = path.resolve(__dirname, '..');
const templatePath = path.join(skillDir, 'assets', 'youtube-template');
const uploadDetailsPath = path.join(templatePath, 'upload_details');
const selectedUploadTemplatePath = path.join(uploadDetailsPath, uploadTemplateName);
const targetPath = path.join(process.cwd(), newProjectName); // This should be relative to the content root

async function createProject() {
  try {
    // Check if the target directory already exists before attempting to copy
    const targetExists = await fs.access(targetPath).then(() => true).catch(() => false);
    if (targetExists) {
      console.error(`Error: Directory '${targetPath}' already exists. Please choose a different name or remove the existing directory.`);
      process.exit(1);
    }
    await fs.cp(templatePath, targetPath, { recursive: true });

    // Copy the selected upload template and rename it to upload.md
    await fs.copyFile(selectedUploadTemplatePath, path.join(targetPath, 'upload.md'));

    console.log(`Successfully created new YouTube project: ${targetPath} with upload template: ${uploadTemplateName}`);
  } catch (error) {
    console.error(`Error creating project: ${error.message}`);
    process.exit(1);
  }
}

createProject();
