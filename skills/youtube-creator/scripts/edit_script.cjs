const fs = require('fs/promises');
const path = require('path');

const projectName = process.argv[2];
const newScriptContent = process.argv[3]; // The new script content as a string

if (!projectName || !newScriptContent) {
  console.error('Usage: node edit_script.cjs <project-name> "<new-script-content>"');
  process.exit(1);
}

const scriptPath = path.join(process.cwd(), projectName, 'script.md');

async function editScript() {
  try {
    await fs.writeFile(scriptPath, newScriptContent);
    console.log(`Successfully updated script.md for project: ${projectName}`);
  } catch (error) {
    console.error(`Error updating script.md: ${error.message}`);
    process.exit(1);
  }
}

editScript();
