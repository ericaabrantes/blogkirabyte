document.addEventListener("DOMContentLoaded", async () => {
    const postsContainer = document.getElementById("posts-list");
    const categoriasMenu = document.getElementById("categorias-menu");
  
    try {
      const res = await fetch("posts.json");
      if (!res.ok) throw new Error("Erro ao carregar posts.json");
  
      const posts = await res.json();
  
      // 🔹 Extrair categorias únicas
      const categorias = ["Todos", ...new Set(posts.map(p => p.categoria))];
  
      // 🔹 Renderizar botões de categoria
      categoriasMenu.innerHTML = categorias.map(cat => `
        <button class="categoria-btn" data-categoria="${cat}">${cat}</button>
      `).join("");
  
      // 🔹 Função para renderizar posts filtrados
      function renderPosts(filtro) {
        const filtrados = filtro === "Todos"
          ? posts
          : posts.filter(p => p.categoria === filtro);
  
        postsContainer.innerHTML = filtrados.map(post => `
          <a href="${post.link}" class="destaque-card">
            <img src="assets/images/airflow-dia${post.id}.jpg" alt="${post.titulo}" />
            <h3>${post.titulo}</h3>
            <p>${post.descricao}</p>
          </a>
        `).join("");
      }
  
      // Render inicial (todos os posts)
      renderPosts("Todos");
  
      // 🔹 Clique nos botões
      document.querySelectorAll(".categoria-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const categoria = btn.getAttribute("data-categoria");
          renderPosts(categoria);
  
          // Ativar botão selecionado
          document.querySelectorAll(".categoria-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });
  
    } catch (err) {
      postsContainer.innerHTML = `<p>Erro: ${err.message}</p>`;
    }
  });
  