document.addEventListener("DOMContentLoaded", async () => {
    // ATENÇÃO: O ID aqui deve ser posts-databricks (tem que bater com o HTML que criamos)
    const container = document.getElementById("posts-databricks");
  
    try {
      const res = await fetch("posts.json");
      if (!res.ok) throw new Error("Erro ao carregar posts.json");
  
      const posts = await res.json();
  
      // Filtra apenas posts do desafio Databricks
      const databricksPosts = posts
        .filter(p => p.desafio && p.desafio.toLowerCase() === "databricks")
        .sort((a, b) => (a.dia || 0) - (b.dia || 0)); // ordena pelo dia
  
      if (databricksPosts.length === 0) {
        container.innerHTML = "<p>🚧 Nenhum post publicado ainda para este desafio.</p>";
        return;
      }
  
      // Gera o HTML usando a mesma classe 'desafio-post-card' para manter o estilo
      container.innerHTML = databricksPosts.map(post => `
        <a href="${post.link}" class="desafio-post-card">
          <img src="${post.thumbnail}" alt="${post.titulo}">
          <h4>${post.titulo}</h4>
          <p>${post.descricao}</p>
        </a>
      `).join("");
    } catch (err) {
      container.innerHTML = `<p>Erro ao carregar posts: ${err.message}</p>`;
    }
  });