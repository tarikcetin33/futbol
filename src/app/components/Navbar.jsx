import Link from 'next/link';
import { Trophy, Calendar, Activity } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          FUTBOL.IO
        </h1>
        <div className="flex gap-6 text-slate-300">
          <Link href="/" className="hover:text-green-400 flex items-center gap-1"><Activity size={18}/> Canlı</Link>
          <Link href="/fikstur" className="hover:text-green-400 flex items-center gap-1"><Calendar size={18}/> Fikstür</Link>
          <Link href="/score" className="hover:text-green-400 flex items-center gap-1"><Trophy size={18}/> Puan Durumu</Link>
        </div>
      </div>
    </nav>
  );
}