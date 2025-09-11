document.addEventListener("DOMContentLoaded", async () => {
    const categoriasGrid = document.getElementById("categorias-grid");
    if (!categoriasGrid) return;
  
    try {
      const res = await fetch("posts.json");
      if (!res.ok) throw new Error("Erro ao carregar posts.json");
  
      const posts = await res.json();
  
      // Extrai categorias únicas
      const categorias = [...new Set(posts.flatMap(p => p.categorias || []))];
  
      // Renderiza badges de categoria (linkando para posts.html filtrado)
      categoriasGrid.innerHTML = categorias.map(cat => `
        <a href="posts.html?categoria=${encodeURIComponent(cat)}" class="categoria-badge">
          ${cat}
        </a>
      `).join("");
    } catch (err) {
      categoriasGrid.innerHTML = "<p>Erro ao carregar categorias 😢</p>";
      console.error("Erro categorias:", err);
    }
  });
  