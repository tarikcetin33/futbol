const API_KEY = '6ef31b62d0d44a43b8b63c6447ab3d27'; // Buraya aldığın API key gelecek
const BASE_URL = 'https://api.football-data.org/v4';

export async function getMatches() {
  const res = await fetch(`${BASE_URL}/matches`, {
    headers: { 'X-Auth-Token': API_KEY },
    next: { revalidate: 60 }, // Veriyi her 60 saniyede bir tazele
  });
  
  if (!res.ok) throw new Error('Veri alınamadı');
  return res.json();
}

export async function getStandings(leagueCode = 'PL') {
  try {
    const res = await fetch(`${BASE_URL}/competitions/${leagueCode}/standings`, {
      headers: { 'X-Auth-Token': API_KEY },
      next: { revalidate: 3600 }, // Puan durumu maçlar kadar sık değişmez, 1 saatte bir yenilemek yeterli
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}