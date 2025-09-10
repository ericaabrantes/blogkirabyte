document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("posts-airflow");

  try {
    const res = await fetch("posts.json");
    if (!res.ok) throw new Error("Erro ao carregar posts.json");

    const posts = await res.json();

    // Filtra apenas posts do desafio Airflow
    const airflowPosts = posts
      .filter(p => p.desafio && p.desafio.toLowerCase() === "airflow")
      .sort((a, b) => (a.dia || 0) - (b.dia || 0)); // ordena pelo dia

    if (airflowPosts.length === 0) {
      container.innerHTML = "<p>🚧 Nenhum post publicado ainda para este desafio.</p>";
      return;
    }

    container.innerHTML = airflowPosts.map(post => `
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
