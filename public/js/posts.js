document.addEventListener("DOMContentLoaded", async () => {
  const postsContainer = document.getElementById("posts-list");
  const categoriasMenu = document.getElementById("categorias-menu");
  const buscaInput = document.getElementById("busca-posts");
  const btnCarregarMais = document.getElementById("btn-carregar-mais");

  let posts = [];
  let postsFiltrados = [];
  let postsExibidos = 0;
  const POSTS_POR_PAGINA = 6;

  try {
    const res = await fetch("posts.json");
    if (!res.ok) throw new Error("Erro ao carregar posts.json");

    posts = await res.json();
    postsFiltrados = posts; // começa mostrando todos

    // 🔹 Extrair categorias únicas (suporta múltiplas categorias)
    const categorias = ["Todos", ...new Set(posts.flatMap(p => p.categorias || []))];

    // 🔹 Renderizar botões de categoria
    categoriasMenu.innerHTML = categorias.map(cat => `
      <button class="categoria-btn" data-categoria="${cat}">${cat}</button>
    `).join("");

    // 🔹 Renderizar posts (paginado)
    function renderPosts(reset = false) {
      if (reset) {
        postsExibidos = 0;
        postsContainer.innerHTML = "";
      }

      const proximaPagina = postsFiltrados.slice(postsExibidos, postsExibidos + POSTS_POR_PAGINA);

      postsContainer.innerHTML += proximaPagina.map(post => `
        <a href="${post.link}" class="destaque-card">
          <span class="badge">${(post.categorias || []).join(", ")}</span>
          <img src="${post.thumbnail}" alt="${post.titulo}" />
          <h3>${post.titulo}</h3>
          <p>${post.descricao}</p>
        </a>
      `).join("");

      postsExibidos += proximaPagina.length;

      // Mostrar ou esconder botão "Carregar mais"
      if (postsExibidos >= postsFiltrados.length) {
        btnCarregarMais.style.display = "none";
      } else {
        btnCarregarMais.style.display = "block";
      }
    }

    // 🔹 Render inicial
    renderPosts(true);

    // 🔹 Clique em categorias
    categoriasMenu.addEventListener("click", e => {
      if (e.target.classList.contains("categoria-btn")) {
        const categoria = e.target.getAttribute("data-categoria");

        postsFiltrados = categoria === "Todos"
          ? posts
          : posts.filter(p => (p.categorias || []).includes(categoria));

        // Atualiza active
        document.querySelectorAll(".categoria-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");

        renderPosts(true);
      }
    });

    // 🔹 Busca em tempo real
    buscaInput.addEventListener("input", e => {
      const termo = e.target.value.toLowerCase();

      postsFiltrados = posts.filter(p =>
        p.titulo.toLowerCase().includes(termo) ||
        p.descricao.toLowerCase().includes(termo) ||
        (p.categorias || []).some(c => c.toLowerCase().includes(termo))
      );

      renderPosts(true);
    });

    // 🔹 Botão "Carregar mais"
    btnCarregarMais.addEventListener("click", () => {
      renderPosts(false);
    });

  } catch (err) {
    postsContainer.innerHTML = `<p>Erro: ${err.message}</p>`;
  }
});
