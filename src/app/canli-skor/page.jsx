import { getMatches } from '../lib/fetcher';
import MatchCard from '../components/MatchCard';

export default async function CanliSkor() {
  const data = await getMatches();
  // Sadece canlı maçları filtrele (veya statüsü IN_PLAY olanları)
  const liveMatches = data.matches?.filter(m => m.status === 'IN_PLAY' || m.status === 'LIVE') || [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" />
        <h1 className="text-4xl font-black italic uppercase">CANLI SONUÇLAR</h1>
      </div>

      <div className="grid gap-6">
        {liveMatches.length > 0 ? (
          liveMatches.map(match => <MatchCard key={match.id} match={match} />)
        ) : (
          <div className="text-center py-32 bg-slate-900 rounded-3xl border border-dashed border-white/10">
            <p className="text-slate-500">Şu an oynanan bir maç bulunmuyor.</p>
          </div>
        )}
      </div>
    </div>
  );
}