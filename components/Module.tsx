'use client';

import { useState} from 'react';
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';
import VideoModal from './VideoModal';

interface Lesson {
  title: string;
  youtubeId?: string; // Agregamos esto para el futuro
}

interface ModuleProps {
  number: string;
  title: string;
  lessons: Lesson[];
  isExpanded?: boolean;
}

export default function Module({ number, title, lessons, isExpanded = false }: ModuleProps) {
  // Estado para abrir/cerrar el acordeón
  const [isOpen, setIsOpen] = useState(isExpanded);
  // Estado oculto para "recordar" qué valor tenía isExpanded la última vez
  const [prevIsExpanded, setPrevIsExpanded] = useState(isExpanded);
  // Estado para saber qué lección está seleccionada para el Modal
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  // Comparamos si la búsqueda cambió. Si cambió, actualizamos 'isOpen' directamente.
  // Esto no da error y es mucho más rápido para el navegador.
  if (isExpanded !== prevIsExpanded) {
    setIsOpen(isExpanded);
    setPrevIsExpanded(isExpanded);
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-auto mb-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Cabecera del módulo */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-6 transition-colors cursor-pointer ${
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

        {/* Lista de Jornadas */}
        {isOpen && (
          <div className="p-6 bg-white border-t border-gray-50">
            <ul className="flex flex-col gap-4">
              {lessons.map((lesson, index) => (
                <li 
                  key={index} 
                  onClick={() => setSelectedLesson(lesson)}
                  className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-dios-gold"></div>
                    <span className="text-dios-text text-sm md:text-base font-medium group-hover:text-dios-orange transition">
                      {lesson.title}
                    </span>
                  </div>
                  <PlayCircle className="text-dios-gold group-hover:text-dios-orange transition shrink-0" size={28} strokeWidth={1.5} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Renderizamos el Modal aquí. Solo se muestra si hay una lección seleccionada */}
      <VideoModal 
        isOpen={selectedLesson !== null} 
        onClose={() => setSelectedLesson(null)} 
        title={selectedLesson?.title || ""}
        youtubeId={selectedLesson?.youtubeId}
      />
    </>
  );
}