// gerar-posts.js
import fs from "fs";
import path from "path";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "posts-md");     // onde ficam os .md
const outputDir = path.join(process.cwd(), "public/posts"); // saída .html
const jsonFile = path.join(process.cwd(), "public/posts.json");

// Lê todos os .md
const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

// Lista de metadados dos posts
let postsMeta = [];

files.forEach((file, index) => {
  const mdPath = path.join(postsDir, file);
  const mdContent = fs.readFileSync(mdPath, "utf-8");

  // Converte para HTML
  const htmlContent = marked(mdContent);

  // Nome do arquivo HTML
  const baseName = file.replace(".md", "");
  const outFile = `${baseName}.html`;
  const outPath = path.join(outputDir, outFile);

  // Quebra em linhas
  const lines = mdContent.split("\n").filter(l => l.trim() !== "");
  const titulo = lines[0] ? lines[0].replace(/^# /, "") : "Post sem título";
  const descricao = lines[1] || "Post no Kirabyte Blog";

  // Categoria (linha que começa com "Categoria:")
  const categoriaLine = lines.find(l => l.startsWith("Categoria:"));
  const categoria = categoriaLine ? categoriaLine.replace("Categoria:", "").trim() : "Geral";

  // Data (linha que começa com "Data:")
  const dataLine = lines.find(l => l.startsWith("Data:"));
  let dataISO = new Date().toISOString();
  let dataFormatada = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  if (dataLine) {
    const rawDate = dataLine.replace("Data:", "").trim();
    const parsedDate = new Date(rawDate);
    if (!isNaN(parsedDate)) {
      dataISO = parsedDate.toISOString();
      dataFormatada = parsedDate.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    }
  }

  // Template do post com SEO
  const template = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titulo} | Kirabyte Blog</title>
  <meta name="description" content="${descricao}">
  
  <!-- OpenGraph -->
  <meta property="og:title" content="${titulo} | Kirabyte Blog">
  <meta property="og:description" content="${descricao}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://kirabyte.com.br/${outFile}">
  <meta property="og:site_name" content="Kirabyte Blog">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${titulo}">
  <meta name="twitter:description" content="${descricao}">

  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="../post.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1 class="logo">🌸 Kirabyte Blog</h1>
      <nav>
        <ul class="nav-links">
          <li><a href="../index.html">Início</a></li>
          <li><a href="../posts.html">Posts</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="container post-conteudo">
    <article>
      <h2>${titulo}</h2>
      <p class="meta">Publicado em ${dataFormatada} | Categoria: ${categoria}</p>
      ${htmlContent}
    </article>
    <div class="post-nav">
      <a href="../posts.html" class="btn">⬅ Voltar para o Blog</a>
    </div>
  </main>
  <footer>
    <p>© 2025 Kirabyte Blog | Criado por Érica Ignatios 🌸</p>
  </footer>
</body>
</html>`;

  // Salva o HTML
  fs.writeFileSync(outPath, template, "utf-8");

  // Atualiza metadados
  postsMeta.push({
    id: index + 1,
    titulo,
    descricao,
    categoria,
    data: dataISO,
    link: `posts/${outFile}`
  });

  console.log(`✅ Gerado: ${outFile}`);
});

// Inverte ordem: posts mais recentes primeiro
postsMeta = postsMeta.reverse();

// Atualiza o posts.json
fs.writeFileSync(jsonFile, JSON.stringify(postsMeta, null, 2), "utf-8");
console.log("📄 posts.json atualizado!");
