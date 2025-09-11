document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("yt-grid");
  if (!grid) return;

  const channelId = "UCfbF-WRAt6paMIo-ZUDZtOA";
  const apiKey = "AIzaSyAFsK5QnNk0Qw1g7QfFkeJSg2BgX1qxqqM"; 

  try {
    // 1. Pegar a playlist "uploads" do canal
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
    const channelResp = await fetch(channelUrl);
    if (!channelResp.ok) throw new Error("Erro ao buscar canal");
    const channelData = await channelResp.json();

    const uploadsPlaylistId =
      channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) throw new Error("Playlist não encontrada");

    // 2. Pegar os vídeos dessa playlist
    const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${apiKey}`;
    const videosResp = await fetch(videosUrl);
    if (!videosResp.ok) throw new Error("Erro ao buscar vídeos");
    const videosData = await videosResp.json();

    // 3. Renderizar
    grid.innerHTML = videosData.items.map(video => `
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
