document.addEventListener("DOMContentLoaded", async () => {
    const grid = document.getElementById("yt-grid");
  
    if (!grid) return;
  
    try {
      const res = await fetch("/api/youtube"); // 🔒 chama o endpoint seguro
      const videos = await res.json();
  
      grid.innerHTML = videos.map(video => `
        <a href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}" 
           target="_blank" class="yt-card">
          <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
          <h3>${video.snippet.title}</h3>
        </a>
      `).join("");
    } catch (err) {
      grid.innerHTML = "<p>Erro ao carregar vídeos 😢</p>";
      console.error("YouTube API error:", err);
    }
  });
  