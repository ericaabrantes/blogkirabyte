export default async function handler(req, res) {
    const channelId = "UCfbF-WRAt6paMIo-ZUDZtOA"; // 👉 coloque aqui o ID do seu canal do YouTube
    const apiKey = process.env.YOUTUBE_API_KEY; // 🔑 pega do ambiente da Vercel
  
    try {
      // 1. Pega a playlist "Uploads" do canal
      const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
      const channelResp = await fetch(channelUrl);
      if (!channelResp.ok) throw new Error("Erro ao buscar canal");
      const channelData = await channelResp.json();
  
      const uploadsPlaylistId =
        channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;
      if (!uploadsPlaylistId) throw new Error("Playlist de uploads não encontrada");
  
      // 2. Pega os vídeos dessa playlist (ordenados por mais recentes)
      const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${apiKey}`;
      const videosResp = await fetch(videosUrl);
      if (!videosResp.ok) throw new Error("Erro ao buscar vídeos");
      const videosData = await videosResp.json();
  
      res.status(200).json(videosData.items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  