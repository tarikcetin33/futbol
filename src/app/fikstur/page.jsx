import { getMatches } from '../lib/fetcher';

export default async function Fikstur() {
  const data = await getMatches();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col mb-10">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">
          HAFTALIK <span className="text-green-500">FİKSTÜR</span>
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Dünya liglerinde oynanan ve oynanacak tüm maçlar</p>
      </div>
      
      <div className="overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-slate-400 text-[11px] uppercase tracking-[0.2em]">
              <th className="p-5 font-bold">Tarih / Saat</th>
              <th className="p-5 font-bold">Ev Sahibi</th>
              <th className="p-5 font-bold text-center">Durum / Skor</th>
              <th className="p-5 font-bold">Deplasman</th>
              <th className="p-5 font-bold hidden md:table-cell">Organizasyon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.matches?.length > 0 ? (
              data.matches.map((match) => (
                <tr key={match.id} className="hover:bg-green-500/5 transition-all group">
                  {/* Tarih ve Saat */}
                  <td className="p-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">
                        {new Date(match.utcDate).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short' })}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {new Date(match.utcDate).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </td>

                  {/* Ev Sahibi (Logo + İsim) */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-full p-2 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                        <img 
                          src={match.homeTeam.crest} 
                          alt={match.homeTeam.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-bold text-slate-200 group-hover:text-white">{match.homeTeam.shortName}</span>
                    </div>
                  </td>

                  {/* Skor */}
                  <td className="p-5 text-center">
                    <div className="inline-flex items-center justify-center bg-slate-950 px-4 py-2 rounded-xl border border-white/5 min-w-[80px]">
                      <span className={`font-black text-lg ${match.status === 'IN_PLAY' ? 'text-green-500' : 'text-slate-300'}`}>
                        {match.score.fullTime.home ?? '-'} : {match.score.fullTime.away ?? '-'}
                      </span>
                    </div>
                    {match.status === 'IN_PLAY' && (
                      <div className="text-[10px] text-green-500 font-bold mt-1 animate-pulse">CANLI</div>
                    )}
                  </td>

                  {/* Deplasman (Logo + İsim) */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-full p-2 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                        <img 
                          src={match.awayTeam.crest} 
                          alt={match.awayTeam.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-bold text-slate-200 group-hover:text-white">{match.awayTeam.shortName}</span>
                    </div>
                  </td>

                  {/* Lig Bilgisi */}
                  <td className="p-5 hidden md:table-cell">
                    <div className="flex flex-col">
                       <span className="text-xs font-medium text-slate-500">{match.competition.name}</span>
                       <span className="text-[10px] text-slate-600">Hafta {match.matchday}</span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-20 text-center text-slate-500 italic">
                  Fikstür bilgisi şu an yüklenemiyor...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}