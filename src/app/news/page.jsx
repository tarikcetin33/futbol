const NEWS = [
  { id: 1, title: "Şampiyonlar Ligi'nde Dev Eşleşme", desc: "Çeyrek final kuraları çekildi, futbol dünyası bu maçı bekliyor.", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800" },
  { id: 2, title: "Transferde Sıcak Saatler", desc: "Yıldız golcü İstanbul uçağına bindi, işte detaylar.", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800" },
];

export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Son Dakika Haberler</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {NEWS.map(post => (
          <div key={post.id} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
            <img src={post.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-slate-300 text-sm line-clamp-2">{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}