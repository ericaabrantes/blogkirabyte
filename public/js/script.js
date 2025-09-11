document.addEventListener("DOMContentLoaded", async () => {
    const timelineList = document.getElementById("timeline-list");
    if (!timelineList) return;
  
    try {
      const resp = await fetch("posts.json");
      const posts = await resp.json();
  
      posts.sort((a, b) => new Date(a.data) - new Date(b.data));
  
      posts.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${post.link}">
            <strong>${post.data}</strong> - ${post.titulo}
          </a>
        `;
        timelineList.appendChild(li);
      });
    } catch (err) {
      timelineList.innerHTML = `<li>Erro ao carregar timeline 😢</li>`;
      console.error("Erro timeline:", err);
    }
  });
  

//   Menu Global
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu-links");
  
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
      });
    }
  });
  //Posts recentes
  document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("ultimos-posts");
  
    try {
      const res = await fetch("./posts.json");
      if (!res.ok) throw new Error("Erro ao carregar posts.json");
  
      let posts = await res.json();
  
      // Pega só os 3 mais recentes
      const recentes = posts.slice(0, 3);
  
      // Monta os artigos no mesmo estilo que você já tinha
      container.innerHTML = recentes.map(post => `
        <article class="post">
          <h3><a href="${post.link}">${post.titulo}</a></h3>
          <p class="meta">Publicado em ${new Date(post.data).toLocaleDateString("pt-BR")} | Categoria: ${post.categoria}</p>
          <p>${post.descricao}</p>
          <a href="${post.link}" class="btn">Ler mais</a>
        </article>
      `).join("");
  
    } catch (err) {
      container.innerHTML = `<p>Erro: ${err.message}</p>`;
    }
  });
 
  //Render Destaques posts
  document.addEventListener("DOMContentLoaded", async () => {
    const destaquesContainer = document.getElementById("destaques-grid");
    if (!destaquesContainer) return;
  
    try {
      const res = await fetch("./posts.json");
      if (!res.ok) throw new Error("Erro ao carregar posts.json");
  
      const posts = await res.json();
  
      // Filtra só os marcados como destaque
      const destaques = posts.filter(p => p.destaque);
  
      // Se quiser só os 3 primeiros:
      // const destaques = posts.filter(p => p.destaque).slice(0, 3);
  
      destaquesContainer.innerHTML = destaques.map(post => `
        <a href="${post.link}" class="destaque-card">
          <img src="${post.thumbnail}" alt="${post.titulo}">
          <h3>${post.titulo}</h3>
        </a>
      `).join("");
  
    } catch (err) {
      destaquesContainer.innerHTML = `<p>Erro: ${err.message}</p>`;
    }
  });
  //Categorias automaticas
  document.addEventListener("DOMContentLoaded", async () => {
    const grid = document.getElementById("categorias-grid");
    if (!grid) return;
  
    try {
      const res = await fetch("./posts.json");
      if (!res.ok) throw new Error("Erro ao carregar posts.json");
  
      const posts = await res.json();
  
      // Pega todas as categorias únicas
      const categorias = [...new Set(posts.map(p => p.categoria).filter(Boolean))];
  
      // Ícones sugeridos (pode trocar ou adicionar)
      const icones = {
        "Engenharia de Dados": "bi bi-database-fill",
        "Tutoriais Práticos": "bi bi-terminal-fill",
        "Carreira & Estudos": "bi bi-mortarboard-fill",
        "Reflexões Pessoais": "bi bi-chat-left-quote-fill",
        "Aprendizado": "bi bi-journal-code",
        "Desafios": "bi bi-lightning-fill"
      };
  
      // Monta os links
      grid.innerHTML = categorias.map(cat => `
        <a href="posts.html?categoria=${encodeURIComponent(cat)}" class="categoria-badge">
          <i class="${icones[cat] || "bi bi-folder-fill"}"></i>
          ${cat}
        </a>
      `).join("");
    } catch (err) {
      console.error("Erro ao carregar categorias:", err);
      grid.innerHTML = "<p>Erro ao carregar categorias 😢</p>";
    }
  });
  