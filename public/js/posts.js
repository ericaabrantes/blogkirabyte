document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("posts-list");
  const buscaInput = document.getElementById("busca-posts");

  try {
    const res = await fetch("posts.json");
    if (!res.ok) throw new Error("Erro ao carregar posts.json");

    let posts = await res.json();

    // Função para renderizar lista
    function renderPosts(lista) {
      container.innerHTML = lista.map(post => `
        <a href="${post.link}" class="destaque-card">
          <span class="badge">${post.categoria}</span>
          <img src="${post.thumbnail}" alt="${post.titulo}" />
          <h3>${post.titulo}</h3>
          <p>${post.descricao}</p>
        </a>
      `).join("");
    }
    
    

    // Render inicial
    renderPosts(posts);

    // Busca em tempo real
    buscaInput.addEventListener("input", e => {
      const termo = e.target.value.toLowerCase();
      const filtrados = posts.filter(p =>
        p.titulo.toLowerCase().includes(termo) ||
        p.descricao.toLowerCase().includes(termo) ||
        p.categoria.toLowerCase().includes(termo)
      );
      renderPosts(filtrados);
    });

  } catch (err) {
    container.innerHTML = `<p>Erro: ${err.message}</p>`;
  }
});
