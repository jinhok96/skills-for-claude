#!/usr/bin/env node
import checkbox from '@inquirer/checkbox';
import { cpSync, mkdirSync, readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';
import { parseArgs } from 'util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillsDir = join(__dirname, '..', 'skills');

const { values } = parseArgs({
  options: {
    local: { type: 'boolean', default: false },
    help:  { type: 'boolean', short: 'h', default: false },
  },
  strict: false,
});

if (values.help) {
  console.log(`
Usage: npx skills-for-claude [options]

Options:
  --local    Install to .claude/skills/ (project-specific)
             Default: ~/.claude/skills/ (global)
  --help     Show this help message

Controls:
  Type to filter  Filter the skill list by name or description
  Space           Select / deselect a skill
  Enter           Confirm and install selected skills
`);
  process.exit(0);
}

const targetDir = values.local
  ? join(process.cwd(), '.claude', 'skills')
  : join(homedir(), '.claude', 'skills');

function readDescription(skillName) {
  try {
    const content = readFileSync(join(skillsDir, skillName, 'SKILL.md'), 'utf8');
    const match = content.match(/^description:\s*(.+)/m);
    if (!match) return '';
    // Strip the "Use when ..." trigger hint appended during conversion
    const desc = match[1].replace(/\s*Use when ".+" mentioned\.?\s*$/, '').trim();
    return desc.length > 72 ? desc.slice(0, 72) + '…' : desc;
  } catch {
    return '';
  }
}

const skills = readdirSync(skillsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => ({ name: d.name, description: readDescription(d.name) }))
  .sort((a, b) => a.name.localeCompare(b.name));

console.log(`\nClaude Code Skills Library — ${skills.length} skills available`);
console.log('Type to filter · Space to select · Enter to install\n');

const selected = await checkbox({
  message: 'Select skills to install',
  choices: skills.map(s => ({
    name: s.description ? `${s.name.padEnd(36)} ${s.description}` : s.name,
    value: s.name,
    short: s.name,
  })),
  pageSize: 20,
  loop: false,
}).catch(() => {
  console.log('\nCancelled.');
  process.exit(0);
});

if (selected.length === 0) {
  console.log('No skills selected.');
  process.exit(0);
}

mkdirSync(targetDir, { recursive: true });

for (const skill of selected) {
  cpSync(join(skillsDir, skill), join(targetDir, skill), { recursive: true });
}

console.log(`\nInstalled ${selected.length} skill(s) to ${targetDir}`);
if (!values.local) {
  console.log('Skills are now available across all your projects.');
} else {
  console.log('Skills are available in this project only.');
}
