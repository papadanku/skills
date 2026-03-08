#!/usr/bin/env node
const { execSync } = require('child_process');

/**
 * Summarize code changes using headless gemini CLI.
 * Usage: node summarize.cjs [--staged | --unstaged | --branch <branch_name>]
 */

function getDiff(args) {
  let diffCmd = 'git diff';
  if (args.includes('--staged')) {
    diffCmd = 'git diff --cached';
  } else if (args.includes('--unstaged')) {
    diffCmd = 'git diff';
  } else if (args.includes('--branch')) {
    const branchIndex = args.indexOf('--branch');
    const branchName = args[branchIndex + 1];
    diffCmd = `git diff ${branchName}...HEAD`;
  }
  
  try {
    return execSync(diffCmd, { encoding: 'utf-8' });
  } catch (err) {
    console.error('Error getting git diff:', err.message);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);
  const diff = getDiff(args);

  if (!diff || diff.trim() === '') {
    console.log('No changes detected.');
    return;
  }

  // Define the prompt
  const prompt = "Summarize the following code changes concisely. If appropriate, follow Conventional Commits format (feat, fix, refactor, etc.). Respond with JUST the summary, no other text.";
  
  // Use gemini in headless mode to generate the summary
  try {
    const geminiCmd = `gemini --headless -p "${prompt}"`;
    const result = execSync(geminiCmd, { input: diff, encoding: 'utf-8' });
    console.log(result.trim());
  } catch (err) {
    console.error('Error calling gemini CLI:', err.message);
    process.exit(1);
  }
}

main();
