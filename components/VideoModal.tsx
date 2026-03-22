'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  youtubeId?: string;
}

export default function VideoModal({ isOpen, onClose, title, youtubeId = "dQw4w9WgXcQ" }: VideoModalProps) {
  // Prevención de scroll en el fondo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Fondo oscuro con desenfoque (NO CLICKEABLE para cerrar) */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />

      {/* Contenedor relativo principal */}
      <div className="relative w-full max-w-4xl flex flex-col items-center z-10">

        {/* Contenedor principal de la Tarjeta del Modal */}
        <div className="relative w-full bg-dios-brown rounded-3xl shadow-2xl overflow-hidden flex flex-col">

          {/* Cabecera del Modal con el botón integrado */}
          <div className="flex items-center justify-between p-6 border-b border-dios-brown-100 bg-dios-brown">
            <h3 className="font-extrabold text-xl md:text-2xl text-white leading-tight pr-4">
              {title}
            </h3>
            
            {/* Botón de Cerrar "X" (Dentro de la tarjeta) */}
            <button
              onClick={onClose}
              className="p-2 bg-gray-100 hover:bg-dios-orange text-gray-600 hover:text-dios-text rounded-full transition cursor-pointer flex-shrink-0"
              title="Cerrar enseñanza"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Contenedor del Video (Relación de aspecto 16:9) */}
          <div className="relative w-full pt-[56.25%] bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-none"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0`}
              title="Reproductor de enseñanzas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Zona de descripción */}
          <div className="p-8 bg-[#FBF9F2]">
            <p className="text-gray-700 leading-relaxed">
              Aquí irá la descripción detallada de la enseñanza.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}