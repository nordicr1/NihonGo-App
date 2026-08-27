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
            
            // Match <button ... >
            // We use a regex that matches the opening tag of a button
            const buttonTagRegex = /<button\s+([^>]+)>/g;
            
            content = content.replace(buttonTagRegex, (match, attributes) => {
                // If it already has cursor-pointer, skip
                if (attributes.includes('cursor-pointer') || attributes.includes('cursor-not-allowed') || attributes.includes('cursor-default')) {
                    return match;
                }
                
                // If it has className="something"
                if (/className=(["'])(.*?)\1/.test(attributes)) {
                    modified = true;
                    const newAttrs = attributes.replace(/className=(["'])(.*?)\1/, (m, q, classes) => {
                        return `className=${q}${classes} cursor-pointer${q}`;
                    });
                    return `<button ${newAttrs}>`;
                }
                // If it has className={`something`}
                else if (/className=\{`(.*?)`\}/s.test(attributes)) {
                    modified = true;
                    const newAttrs = attributes.replace(/className=\{`(.*?)`\}/s, (m, classes) => {
                        return `className={\`${classes} cursor-pointer\`}`;
                    });
                    return `<button ${newAttrs}>`;
                }
                // Otherwise skip complex ones to avoid breaking
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
