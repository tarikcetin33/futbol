import { getMatches } from './lib/fetcher';
import MatchCard from './components/MatchCard';
import NewsSlider from './components/NewSlider';

export default async function Home() {
  const data = await getMatches();
  // Sadece ilk 3 maçı al
  const featuredMatches = data.matches?.slice(0, 3) || [];

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* 1. Header Yazısı */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-black tracking-tighter mb-4 italic">
          FUTBOLUN <span className="text-green-500 underline underline-offset-8">KALBİ</span> BURADA
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Dünya liglerinden en güncel skorlar, transfer haberleri ve anlık fikstür takibi.
        </p>
      </div>

      {/* 2. Öne Çıkan 3 Maç (Yan Yana) */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span> Popüler Maçlar
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      {/* 3. Haber Slider */}
      <section>
        <h3 className="text-xl font-bold mb-6">Öne Çıkan Haberler</h3>
        <NewsSlider />
      </section>
    </main>
  );
}