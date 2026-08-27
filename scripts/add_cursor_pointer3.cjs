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
            
            // Match <button ... > across multiple lines
            const buttonTagRegex = /<button([\s\S]+?)>/g;
            
            content = content.replace(buttonTagRegex, (match, attributes) => {
                // If it already has cursor-pointer or similar
                if (attributes.includes('cursor-pointer') || attributes.includes('cursor-not-allowed') || attributes.includes('cursor-default')) {
                    return match;
                }
                
                // If it has className="something"
                if (/className=(["'])([\s\S]*?)\1/.test(attributes)) {
                    modified = true;
                    const newAttrs = attributes.replace(/className=(["'])([\s\S]*?)\1/, (m, q, classes) => {
                        return `className=${q}${classes} cursor-pointer${q}`;
                    });
                    return `<button${newAttrs}>`;
                }
                // If it has className={`something`}
                else if (/className=\{`([\s\S]*?)`\}/.test(attributes)) {
                    modified = true;
                    const newAttrs = attributes.replace(/className=\{`([\s\S]*?)`\}/, (m, classes) => {
                        return `className={\`${classes} cursor-pointer\`}`;
                    });
                    return `<button${newAttrs}>`;
                }
                // If no className, add it
                else if (!attributes.includes('className=')) {
                     modified = true;
                     return `<button className="cursor-pointer"${attributes}>`;
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
