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
  