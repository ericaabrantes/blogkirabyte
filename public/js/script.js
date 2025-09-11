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
  