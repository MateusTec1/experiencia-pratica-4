const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('--- Iniciando processo de Build e Otimização para Produção ---');

// 1. Limpa ou cria pasta dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'assets', 'images'), { recursive: true });

// Função para minificação básica e segura de CSS
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comentários
    .replace(/\s+/g, ' ')             // múltiplos espaços viram um
    .replace(/\s*([{}:;,])\s*/g, '$1') // remove espaços ao redor de delimitadores
    .replace(/;\}/g, '}')             // remove ponto e vírgula antes de fechar chave
    .trim();
}

// Função para minificação básica e segura de JS
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comentários de bloco
    .replace(/(^|[^:])\/\/.*/g, '$1')  // remove comentários de linha preservando URLs
    .replace(/^\s+|\s+$/gm, '')       // remove espaços no início/fim de linhas
    .replace(/\n\s*\n/g, '\n')        // remove linhas vazias
    .trim();
}

// 2. Otimizar e copiar arquivos HTML
const htmlFiles = fs.readdirSync(rootDir).filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf-8');
  fs.writeFileSync(path.join(distDir, file), content, 'utf-8');
  console.log(`[HTML] Copiado: ${file}`);
});

// 3. Minificar e copiar CSS
const cssDir = path.join(rootDir, 'css');
if (fs.existsSync(cssDir)) {
  fs.readdirSync(cssDir).filter(f => f.endsWith('.css')).forEach(file => {
    const raw = fs.readFileSync(path.join(cssDir, file), 'utf-8');
    const minified = minifyCSS(raw);
    fs.writeFileSync(path.join(distDir, 'css', file), minified, 'utf-8');
    const savings = ((1 - minified.length / raw.length) * 100).toFixed(1);
    console.log(`[CSS] Minificado: ${file} (Redução: ${savings}%)`);
  });
}

// 4. Minificar e copiar JS
const jsDir = path.join(rootDir, 'js');
if (fs.existsSync(jsDir)) {
  fs.readdirSync(jsDir).filter(f => f.endsWith('.js')).forEach(file => {
    const raw = fs.readFileSync(path.join(jsDir, file), 'utf-8');
    const minified = minifyJS(raw);
    fs.writeFileSync(path.join(distDir, 'js', file), minified, 'utf-8');
    const savings = ((1 - minified.length / raw.length) * 100).toFixed(1);
    console.log(`[JS] Minificado: ${file} (Redução: ${savings}%)`);
  });
}

// 5. Copiar imagens e assets
const imagesSrc = path.join(rootDir, 'assets', 'images');
const imagesDest = path.join(distDir, 'assets', 'images');
if (fs.existsSync(imagesSrc)) {
  fs.readdirSync(imagesSrc).forEach(img => {
    fs.copyFileSync(path.join(imagesSrc, img), path.join(imagesDest, img));
  });
  console.log(`[Assets] Imagens e ícones SVG copiados para dist/assets/images`);
}

console.log('--- Build concluído com sucesso em dist/ ---');
