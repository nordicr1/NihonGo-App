import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src/components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip Header.tsx since it's already dark and we added the button there
  if (filePath.endsWith('Header.tsx')) return;

  // Replace background colors
  content = content.replace(/bg-white/g, 'bg-white dark:bg-stone-900');
  content = content.replace(/bg-stone-50/g, 'bg-stone-50 dark:bg-stone-800/50');
  content = content.replace(/bg-stone-100/g, 'bg-stone-100 dark:bg-stone-800');
  content = content.replace(/bg-indigo-50/g, 'bg-indigo-50 dark:bg-indigo-900/40');
  content = content.replace(/bg-emerald-50/g, 'bg-emerald-50 dark:bg-emerald-900/40');
  content = content.replace(/bg-rose-50/g, 'bg-rose-50 dark:bg-rose-900/40');
  content = content.replace(/bg-amber-50/g, 'bg-amber-50 dark:bg-amber-900/40');
  content = content.replace(/bg-cyan-50/g, 'bg-cyan-50 dark:bg-cyan-900/40');

  // Replace text colors
  content = content.replace(/text-stone-900/g, 'text-stone-900 dark:text-stone-100');
  content = content.replace(/text-stone-800/g, 'text-stone-800 dark:text-stone-200');
  content = content.replace(/text-stone-700/g, 'text-stone-700 dark:text-stone-300');
  content = content.replace(/text-stone-600/g, 'text-stone-600 dark:text-stone-400');
  content = content.replace(/text-indigo-950/g, 'text-indigo-950 dark:text-indigo-100');
  content = content.replace(/text-indigo-900/g, 'text-indigo-900 dark:text-indigo-200');
  content = content.replace(/text-indigo-800/g, 'text-indigo-800 dark:text-indigo-300');

  // Replace border colors
  content = content.replace(/border-stone-200/g, 'border-stone-200 dark:border-stone-700/50');
  content = content.replace(/border-stone-100/g, 'border-stone-100 dark:border-stone-800');

  // Deduplicate in case of multiple runs
  content = content.replace(/bg-white dark:bg-stone-900 dark:bg-stone-900/g, 'bg-white dark:bg-stone-900');
  // Just a simple script, it should work fine for one run.

  fs.writeFileSync(filePath, content, 'utf-8');
}

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
for (const file of files) {
  processFile(path.join(componentsDir, file));
}
console.log('Applied dark mode classes to components!');
