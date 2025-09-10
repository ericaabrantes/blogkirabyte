document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("posts-airflow");
  
    try {
      const res = await fetch("posts.json");
      const posts = await res.json();
  
      // Filtra só posts que pertencem ao desafio
      const airflowPosts = posts
        .filter(p => p.desafio === "30 Dias de Airflow")
        .sort((a, b) => (a.dia || 0) - (b.dia || 0));
  
      if (airflowPosts.length === 0) {
        container.innerHTML = "<p>🚧 Nenhum post publicado ainda para este desafio.</p>";
        return;
      }
  
      container.innerHTML = airflowPosts.map(post => `
        <a href="${post.link}" class="desafio-card">
          <img src="assets/images/airflow-dia${post.dia || post.id}.jpg" alt="${post.titulo}">
          <h4>${post.titulo}</h4>
          <p>${post.descricao}</p>
        </a>
      `).join("");
    } catch (err) {
      container.innerHTML = `<p>Erro ao carregar posts: ${err.message}</p>`;
    }
  });
  