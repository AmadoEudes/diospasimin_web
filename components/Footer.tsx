import { Mail, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dios-dark text-white pt-16 pb-6 px-6 mt-auto flex flex-col items-center">
      {/* Ícono de correo */}
      <div className="bg-[#3A1808] p-3 rounded-xl mb-6">
        <Mail className="text-dios-orange" size={24} />
      </div>

      <p className="text-xl md:text-2xl italic font-light mb-4">
        Astawan yachaykunaykipaq contacto email
      </p>
      
      <a href="mailto:inayacucho@hotmail.com" className="text-dios-orange font-bold text-3xl md:text-4xl underline decoration-dios-orange mb-16 hover:text-orange-400 transition">
        inayacucho@hotmail.com
      </a>

      {/* Barra inferior */}
      <div className="w-full max-w-5xl border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-gray-400 font-medium">
        <div className="flex items-center gap-2">
          <div className="bg-dios-orange p-1 rounded">
            <BookOpen size={14} className="text-white" />
          </div>
          <span>RIMAY RELEE - AYACUCHO, PERÚ</span>
        </div>
        
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-white transition">INICIO</Link>
          <Link href="/" className="hover:text-white transition">PRIVACIDAD</Link>
          <Link href="/" className="hover:text-white transition">CONTACTO</Link>
        </nav>
      </div>
    </footer>
  );
}