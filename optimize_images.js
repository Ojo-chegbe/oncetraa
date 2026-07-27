const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Install sharp
console.log("Installing sharp...");
execSync('npm i -D sharp', { stdio: 'inherit' });

const sharp = require('sharp');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walk(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

// 2. Fix broken paths in code FIRST (before we convert everything to webp)
console.log("Fixing broken paths in code...");
walk(srcDir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let modified = false;
        
        if (content.includes('/home/education_support.png')) {
            content = content.replace(/\/home\/education_support\.png/g, '/impact/education_support.png');
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Fixed broken paths in ${filePath}`);
        }
    }
});

// 3. Convert all images to webp and delete old ones
console.log("Converting images to WebP...");
const promises = [];
walk(publicDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const basename = path.basename(filePath);
    
    // Ignore small icons
    if (basename === 'favicon.png' || basename === 'logo.png') {
        return;
    }
    
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const outPath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';
        const p = sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outPath)
            .then(() => {
                fs.unlinkSync(filePath); // delete original
                console.log(`Converted ${basename} to webp`);
            })
            .catch(err => console.error(`Error converting ${filePath}`, err));
        promises.push(p);
    }
});

// 4. Update references in codebase
Promise.all(promises).then(() => {
    console.log("Updating code references...");
    walk(srcDir, (filePath) => {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf-8');
            
            // replace all .png and .jpg inside image tags or background images (except logo/favicon)
            // match exactly what is in the code like imageSrc="/home/banner.png"
            // we will replace .png and .jpg with .webp, but ensure we don't replace favicon/logo.
            
            const regex = /"(\/(home|images|impact|resources|team)\/[^"]+)\.(png|jpg|jpeg)"/g;
            let modifiedContent = content.replace(regex, '"$1.webp"');
            
            if (content !== modifiedContent) {
                fs.writeFileSync(filePath, modifiedContent, 'utf-8');
                console.log(`Updated extensions in ${filePath}`);
            }
        }
    });
    
    // Also check index.css or other files?
    const cssPath = path.join(srcDir, 'index.css');
    if (fs.existsSync(cssPath)) {
        let cssContent = fs.readFileSync(cssPath, 'utf-8');
        const regex = /url\(['"]?(\/[^'"]+)\.(png|jpg|jpeg)['"]?\)/g;
        let modifiedCss = cssContent.replace(regex, (match, p1) => {
            if (p1.includes('favicon') || p1.includes('logo')) return match;
            return `url('${p1}.webp')`;
        });
        if (cssContent !== modifiedCss) {
            fs.writeFileSync(cssPath, modifiedCss, 'utf-8');
            console.log(`Updated extensions in index.css`);
        }
    }
    
    console.log("All done!");
});
