export default function MatchCard({ match }) {
  return (
    <div className="bg-slate-900 border border-white/5 p-5 rounded-2xl hover:bg-slate-800/50 transition-all group shadow-xl">
      <div className="flex items-center justify-between gap-4">
        {/* Ev Sahibi */}
        <div className="flex flex-col items-center w-1/3">
          <img src={match.homeTeam.crest} alt="logo" className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-bold text-center leading-tight">{match.homeTeam.shortName}</span>
        </div>

        {/* Skor Bölümü */}
        <div className="flex flex-col items-center">
          <div className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold text-green-400 mb-2 uppercase tracking-widest border border-green-500/20">
            {match.status === 'TIMED' ? 'BAŞLAMADI' : 'CANLI'}
          </div>
          <div className="text-3xl font-black flex items-center gap-3">
            <span>{match.score.fullTime.home ?? 0}</span>
            <span className="text-slate-600 text-xl">-</span>
            <span>{match.score.fullTime.away ?? 0}</span>
          </div>
          <span className="text-[10px] text-slate-500 mt-2 font-mono">
            {new Date(match.utcDate).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

        {/* Deplasman */}
        <div className="flex flex-col items-center w-1/3">
          <img src={match.awayTeam.crest} alt="logo" className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-bold text-center leading-tight">{match.awayTeam.shortName}</span>
        </div>
      </div>
    </div>
  );
}