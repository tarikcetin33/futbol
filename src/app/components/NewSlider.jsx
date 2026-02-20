"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const NEWS = [
  { id: 1, title: "Arda Güler'den Şık Gol!", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800" },
  { id: 2, title: "Şampiyonlar Ligi Heyecanı Başlıyor", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800" },
  { id: 3, title: "Transferde Büyük Takas!", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800" },
];

export default function NewsSlider() {
  return (
    <div className="w-full rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/5">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="h-[400px]"
      >
        {NEWS.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">SON DAKİKA</span>
                <h2 className="text-4xl font-black text-white max-w-lg">{item.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}