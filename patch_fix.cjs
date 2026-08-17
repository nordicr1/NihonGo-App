const fs = require('fs');
let content = fs.readFileSync('src/components/GamesHub.tsx', 'utf-8');

// Replace const definitions with function declarations to enable hoisting
content = content.replace(/const generateWordCompletion = \(\) => {/g, 'function generateWordCompletion() {');
content = content.replace(/const handleWcAnswer = \(opt: string\) => {/g, 'function handleWcAnswer(opt: string) {');
content = content.replace(/const generateSpotDiff = \(\) => {/g, 'function generateSpotDiff() {');
content = content.replace(/const handleSdAnswer = \(isDiff: boolean\) => {/g, 'function handleSdAnswer(isDiff: boolean) {');

fs.writeFileSync('src/components/GamesHub.tsx', content, 'utf-8');
console.log("Fixed hoisting");
