'use client'; // Esto es súper importante para que funcione el clic

import { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';

// Definimos qué datos necesita recibir este componente
interface Lesson {
  title: string;
}

interface ModuleProps {
  number: string;
  title: string;
  lessons: Lesson[];
}

export default function Module({ number, title, lessons }: ModuleProps) {
  // Estado para saber si está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto mb-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Cabecera del módulo (donde se hace clic) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 transition-colors ${
          isOpen ? 'bg-[#FCF8F2]' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl font-black italic text-dios-gold opacity-60">
            {number}
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-dios-text text-left">
            {title}
          </h2>
        </div>
        {isOpen ? (
          <ChevronUp className="text-dios-orange" />
        ) : (
          <ChevronDown className="text-dios-orange" />
        )}
      </button>

      {/* Contenido desplegable (las jornadas) */}
      {isOpen && (
        <div className="p-6 bg-white border-t border-gray-50">
          <ul className="flex flex-col gap-4">
            {lessons.map((lesson, index) => (
              <li key={index} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-dios-gold"></div>
                  <span className="text-dios-text text-sm md:text-base">{lesson.title}</span>
                </div>
                <PlayCircle className="text-dios-gold group-hover:text-dios-orange transition" size={24} strokeWidth={1.5} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}