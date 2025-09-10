document.addEventListener("DOMContentLoaded", async () => {
    const airflowContainer = document.getElementById("lista-airflow");
  
    try {
      const res = await fetch("posts.json");
      const posts = await res.json();
  
      // Filtra só os posts do desafio 30 Dias de Airflow
      const airflowPosts = posts
        .filter(p => p.desafio === "30 Dias de Airflow")
        .sort((a, b) => a.dia - b.dia); // ordena pelo número do dia
  
      if (airflowPosts.length === 0) {
        airflowContainer.innerHTML = "<p>🚧 Ainda não há posts deste desafio.</p>";
        return;
      }
  
      airflowContainer.innerHTML = airflowPosts.map(post => `
        <a href="${post.link}" class="desafio-card">
          <img src="assets/images/airflow-dia${post.dia || post.id}.jpg" alt="${post.titulo}">
          <h4>${post.titulo}</h4>
          <p>${post.descricao}</p>
        </a>
      `).join("");
    } catch (err) {
      airflowContainer.innerHTML = `<p>Erro: ${err.message}</p>`;
      console.error("Erro ao carregar desafio:", err);
    }
  });
  