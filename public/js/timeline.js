document.addEventListener("DOMContentLoaded", async () => {
    const timeline = document.querySelector(".timeline-blog");
    if (!timeline) return;
  
    try {
      const resp = await fetch("posts.json");
      const posts = await resp.json();
  
      timeline.innerHTML = posts.map(post => `
        <li>
          <div class="timeline-card">
            <h3>${post.titulo}</h3>
            <p>${post.descricao}</p>
            <a href="${post.link}">Ver mais</a>
          </div>
        </li>
      `).join("");
    } catch (e) {
      timeline.innerHTML = `<p>Erro ao carregar posts: ${e.message}</p>`;
    }
  });
  