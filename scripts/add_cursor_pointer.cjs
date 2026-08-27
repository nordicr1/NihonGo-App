const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // This regex finds <button ... className="...". 
            // It needs to handle quotes properly.
            // A safer approach without complex regex for JSX interpolation:
            // Just find `className="something"` and replace with `className="something cursor-pointer"` 
            // ONLY if it's inside a <button> block. 
            // Actually, matching `<button ... className="classes"` is safe enough for most basic classNames.
            
            // Simple replace approach:
            const buttonRegex = /<button([\s\S]*?)className=(["']|`|{"|{`)([\s\S]*?)\2/g;
            content = content.replace(buttonRegex, (match, beforeClass, quote, classes) => {
                if (!classes.includes('cursor-pointer')) {
                    modified = true;
                    return `<button${beforeClass}className=${quote}${classes} cursor-pointer${quote}`;
                }
                return match;
            });

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

const targetDir = path.join(process.cwd(), 'src/components');
processDirectory(targetDir);
console.log('Done!');
