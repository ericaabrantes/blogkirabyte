export default async function handler(req, res) {
    const playlistId = "PLxxxxxxx"; // coloque aqui sua playlist (ou use channelId se preferir)
    const apiKey = process.env.YOUTUBE_API_KEY; // 🔑 pega do ambiente do Vercel
  
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${playlistId}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Erro na API do YouTube");
      const data = await response.json();
  
      res.status(200).json(data.items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  