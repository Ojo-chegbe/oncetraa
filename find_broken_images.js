const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const missingImages = [];

walk(srcDir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        // match strings like "/home/xxx.png"
        const regex = /"(\/(home|images|impact|resources|team)\/[^"]+\.(png|jpg|jpeg|svg|webp))"/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const imagePath = match[1];
            const fullPublicPath = path.join(publicDir, imagePath);
            if (!fs.existsSync(fullPublicPath)) {
                missingImages.push({ file: filePath, image: imagePath });
            }
        }
    }
});

console.log("Missing images:");
console.log(missingImages);
