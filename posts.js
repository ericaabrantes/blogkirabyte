document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("posts-list");
  
    try {
      const res = await fetch("posts.json");
      if (!res.ok) throw new Error("Erro ao carregar posts.json");
  
      const posts = await res.json();
  
      container.innerHTML = posts.map(post => `
        <a href="post.html?file=${post.link.replace('.html', '.md')}" class="destaque-card">
          <img src="assets/images/airflow-dia${post.id}.jpg" alt="${post.titulo}" />
          <h3>${post.titulo}</h3>
          <p>${post.descricao}</p>
        </a>
      `).join("");
  
    } catch (err) {
      container.innerHTML = `<p>Erro: ${err.message}</p>`;
    }
  });
  