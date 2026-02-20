
import Link from 'next/link';
import { getStandings } from '../lib/fetcher';

// Ücretsiz planda çalışan popüler lig kodları
const LEAGUES = [
  { name: 'Premier League', code: 'PL' },
  { name: 'La Liga', code: 'PD' },
  { name: 'Bundesliga', code: 'BL1' },
  { name: 'Serie A', code: 'SA' },
  { name: 'Ligue 1', code: 'FL1' },
  { name: 'Şampiyonlar Ligi', code: 'CL' },
];

export default async function PuanDurumu({ searchParams }) {
  // URL'den seçili ligi al, yoksa varsayılan PL (Premier League)
const params = await searchParams;
  const currentLeague = params.league || 'PL';
  
  const data = await getStandings(currentLeague);
  const standings = data?.standings?.[0]?.table || [];
  return (
<div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-black italic mb-8 uppercase tracking-tighter">
        PUAN <span className="text-green-500">DURUMU</span>
      </h1>

      {/* Lig Seçme Menüsü */}
     <div className="flex flex-wrap gap-2 mb-10">
        {LEAGUES.map((league) => (
          <Link
            key={league.code}
            href={`/score?league=${league.code}`}
            prefetch={false} // Önbelleğe almayı kapat, her defasında yeni veri çek
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              currentLeague === league.code 
              ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]' 
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {league.name}
          </Link>
        ))}
      </div>

      {/* Tablo Tasarımı */}
      <div className="bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-800/50 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
              <th className="p-4 text-center w-12">#</th>
              <th className="p-4">TAKIM</th>
              <th className="p-4 text-center">OM</th>
              <th className="p-4 text-center">G</th>
              <th className="p-4 text-center">B</th>
              <th className="p-4 text-center">M</th>
              <th className="p-4 text-center">AV</th>
              <th className="p-4 text-center bg-green-500/10 text-green-400 font-black italic">PUAN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {standings.map((team) => (
              <tr key={team.team.id} className="hover:bg-white/5 transition-colors group">
                <td className="p-4 text-center font-mono text-slate-500 group-hover:text-white">
                  {team.position}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={team.team.crest} alt="" className="w-8 h-8 object-contain" />
                    <span className="font-bold text-sm md:text-base">{team.team.shortName}</span>
                  </div>
                </td>
                <td className="p-4 text-center text-sm font-medium">{team.playedGames}</td>
                <td className="p-4 text-center text-sm text-slate-400">{team.won}</td>
                <td className="p-4 text-center text-sm text-slate-400">{team.draw}</td>
                <td className="p-4 text-center text-sm text-slate-400">{team.lost}</td>
                <td className="p-4 text-center text-sm text-slate-400">{team.goalDifference}</td>
                <td className="p-4 text-center font-black text-green-400 bg-green-500/5">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {standings.length === 0 && (
          <div className="p-20 text-center text-slate-500 italic">
            Bu lig için puan durumu verisi şu an mevcut değil.
          </div>
        )}
      </div>
    </div>
  );
}