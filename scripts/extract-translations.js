const fs = require("fs");
const path = require("path");

const srcDir = path.resolve("src");
const outputFile = path.resolve("messages/en.json");

const translations = {}; // { namespace: { nested keys } }

function walk(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (/\.(js|ts|jsx|tsx)$/.test(file)) {
      extractFromFile(fullPath);
    }
  }
}

function extractFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  const namespaceMatch = content.match(/(?:useTranslations|getTranslations)\(\s*["'`]([\w-]+)["'`]\s*\)/);
  if (!namespaceMatch) return;

  const namespace = namespaceMatch[1];
  if (!translations[namespace]) translations[namespace] = {};

  const regex = /t\(\s*["'`]([\w.-]+)["'`]\s*,\s*(?:{[^}]*})?\s*,\s*["'`]([\s\S]*?)["'`]\s*\)/g;

  let match;
  while ((match = regex.exec(content))) {
    const fullKey = match[1]; 
    const fallback = match[2];

    if (fullKey && fallback) {
      setNestedKey(translations[namespace], fullKey, fallback);
    }
  }
}

function setNestedKey(obj, keyPath, value) {
  const keys = keyPath.split(".");
  let current = obj;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) current[key] = {};
      current = current[key];
    }
  });
}

walk(srcDir);

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(translations, null, 2), "utf8");
console.log(`✅ Translations written to ${outputFile}`);
