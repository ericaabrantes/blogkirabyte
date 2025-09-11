import fs from "fs";
import path from "path";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "posts-md");     // onde ficam os .md
const outputDir = path.join(process.cwd(), "public/posts"); // saída .html
const jsonFile = path.join(process.cwd(), "public/posts.json");

// Lê todos os .md
const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

let postsMeta = [];

files.forEach((file, index) => {
  const mdPath = path.join(postsDir, file);
  const mdContent = fs.readFileSync(mdPath, "utf-8");

  // Remove linhas de metadados antes de converter para HTML
  const contentSemMeta = mdContent
    .split("\n")
    .filter(l => !l.startsWith("Categoria:") &&
                 !l.startsWith("Data:") &&
                 !l.startsWith("Desafio:") &&
                 !l.startsWith("Dia:") &&
                 !l.startsWith("Imagem:") &&
                 !l.startsWith("Destaque:"))
    .join("\n");

  // Converte só o conteúdo real em HTML
  const htmlContent = marked(contentSemMeta);

  // Nome do arquivo HTML
  const baseName = file.replace(".md", "");
  const outFile = `${baseName}.html`;
  const outPath = path.join(outputDir, outFile);

  // Quebra em linhas
  const lines = mdContent.split("\n").filter(l => l.trim() !== "");
  const titulo = lines[0] ? lines[0].replace(/^# /, "") : "Post sem título";
  const descricao = lines[1] || "Post no Kirabyte Blog";

// Categorias (pode ser uma ou várias, separadas por vírgula)
const categoriaLine = lines.find(l => l.startsWith("Categoria:"));
const categorias = categoriaLine
  ? categoriaLine.replace("Categoria:", "")
      .split(",")
      .map(c => c.trim())
      .filter(c => c.length > 0)
  : ["Geral"];


  // Data
  const dataLine = lines.find(l => l.startsWith("Data:"));
  let dataISO = new Date().toISOString();
  let dataFormatada = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric"
  });
  if (dataLine) {
    const rawDate = dataLine.replace("Data:", "").trim();
    const parsedDate = new Date(rawDate);
    if (!isNaN(parsedDate)) {
      dataISO = parsedDate.toISOString();
      dataFormatada = parsedDate.toLocaleDateString("pt-BR", {
        day: "2-digit", month: "long", year: "numeric"
      });
    }
  }

  // Desafio
  const desafioLine = lines.find(l => l.startsWith("Desafio:"));
  const desafio = desafioLine ? desafioLine.replace("Desafio:", "").trim() : null;

  // Dia do desafio
  const diaLine = lines.find(l => l.startsWith("Dia:"));
  const dia = diaLine ? parseInt(diaLine.replace("Dia:", "").trim(), 10) : null;

  // Imagem principal
  const imgLine = lines.find(l => l.startsWith("Imagem:"));
  const imgPath = imgLine ? imgLine.replace("Imagem:", "").trim() : "assets/images/default.png";

  // Destaque
  const destaqueLine = lines.find(l => l.startsWith("Destaque:"));
  const destaque = destaqueLine ? destaqueLine.replace("Destaque:", "").trim().toLowerCase() === "true" : false;

  // Caminhos diferentes para HTML e JSON
  const thumbnailForHtml = `../${imgPath}`;
  const thumbnailForJson = imgPath;

  // Template do post
  const template = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titulo} | Kirabyte Blog</title>
  <meta name="description" content="${descricao}">
  
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/post.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
  <!-- Menu Global -->
  <nav class="menu-global">
    <div class="container">
      <button class="menu-toggle" id="menu-toggle">&#9776;</button>
      <ul class="menu-links" id="menu-links">
        <li><a href="../index.html">Início</a></li>
        <li><a href="../posts.html" class="active">Posts</a></li>
        <li><a href="../sobre-blog.html">Sobre o Blog</a></li>
        <li><a href="../cursos.html">Cursos</a></li>
        <li><a href="../guia.html">Guia</a></li>
        <li><a href="../comunidade.html">Comunidade</a></li>
        <li><a href="../desafios.html">Desafios</a></li>
      </ul>
    </div>
  </nav>

  <!-- Conteúdo do Post -->
  <main class="container post-conteudo">
    <article>
      <p class="meta">
        Publicado em ${dataFormatada} | Categorias: ${categorias.join(", ")}
        ${desafio ? ` | Desafio: ${desafio}${dia ? ` (Dia ${dia})` : ""}` : ""}
      </p>

      ${imgPath !== "assets/images/default.png" 
        ? `<img src="${thumbnailForHtml}" alt="${titulo}" class="post-thumbnail" />` 
        : ""}

      <div class="post-body">
        ${htmlContent}
      </div>
    </article>

    <!-- Botões de Compartilhamento -->
    <div class="post-compartilhar">
      <span>Compartilhe:</span>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://kirabyte.com.br/${outFile}" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
      <a href="https://api.whatsapp.com/send?text=Olha%20esse%20post:%20https://kirabyte.com.br/${outFile}" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
      <a href="https://twitter.com/intent/tweet?url=https://kirabyte.com.br/${outFile}&text=Olha%20esse%20post!" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a>
    </div>

    <!-- Navegação -->
    <div class="post-nav">
      <a href="../posts.html" class="btn">⬅ Voltar para Posts</a>
    </div>
  </main>

  <!-- Footer -->
  <footer>
    <p>© 2025 Kirabyte Blog | Criado por Érica Abrantes Ignatios 🌸</p>
    <p>Visite também: <a href="https://www.ericaignatios.com.br" target="_blank">www.ericaignatios.com.br</a></p>
  </footer>

  <script src="../js/script.js"></script>
</body>
</html>`;

  // Salva HTML
  fs.writeFileSync(outPath, template, "utf-8");

  // Metadados para posts.json
  postsMeta.push({
    id: index + 1,
    titulo,
    descricao,
    categorias,   // agora é array
    data: dataISO,
    link: `posts/${outFile}`,
    desafio,
    dia,
    thumbnail: thumbnailForJson,
    destaque
  });
  
  console.log(`✅ Gerado: ${outFile}`);
});

// Inverte ordem
postsMeta = postsMeta.reverse();

// Atualiza posts.json
fs.writeFileSync(jsonFile, JSON.stringify(postsMeta, null, 2), "utf-8");
console.log("📄 posts.json atualizado!");
