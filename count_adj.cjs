const fs = require('fs');
const contentI = fs.readFileSync('src/data/vocabAdjetivosI.ts', 'utf8');
const contentNa = fs.readFileSync('src/data/vocabAdjetivosNa.ts', 'utf8');
console.log('I N5 matches:', (contentI.match(/jlpt: 'N5'/g) || []).length);
console.log('Na N5 matches:', (contentNa.match(/jlpt: 'N5'/g) || []).length);
