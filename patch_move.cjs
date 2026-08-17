const fs = require('fs');
let content = fs.readFileSync('src/components/GamesHub.tsx', 'utf-8');

// The functions start with:
// // ==================== COMPLETAR PALAVRA LOGIC ====================
// and end right before:
//   return (

const startIndex = content.indexOf('  // ==================== COMPLETAR PALAVRA LOGIC ====================');
const endIndex = content.indexOf('  return (', startIndex);

if (startIndex > -1 && endIndex > -1) {
    const functionsBlock = content.substring(startIndex, endIndex);
    
    // Remove the functions from the bottom
    content = content.substring(0, startIndex) + content.substring(endIndex);
    
    // Insert them right after the states (around line 100)
    // Find // Initialize and filter games when localJlpt or activeGame changes
    const insertIndex = content.indexOf('  // Initialize and filter games when localJlpt or activeGame changes');
    
    if (insertIndex > -1) {
        content = content.substring(0, insertIndex) + functionsBlock + '\n' + content.substring(insertIndex);
    }
}

fs.writeFileSync('src/components/GamesHub.tsx', content, 'utf-8');
console.log("Moved functions above useEffects");
