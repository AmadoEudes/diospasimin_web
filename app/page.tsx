'use client'; // Necesario para usar el buscador en tiempo real

import { useState } from 'react';
import SearchBar from "../components/SearchBar";
import Module, { Lesson } from "../components/Module";
import VideoModal from "../components/VideoModal";

export default function Home() {
  // Gardamos lo que el usuario escribe
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const modulo_a1 = [{ title: "Jornada 1: La Biblia es palabra de Dios y la Trinidad", youtubeId: "RtzqdZMBxVE", startTime: 60}, { title: "Jornada 2: La deidad de Jesús y la misión de Jesús" }, { title: "Jornada 3: Salvación por la gracia mediante la fe, el Cielo y el Infierno" }, { title: "Jornada 4: La persona y obra del Espíritu Santo" }, { title: "Jornada 5: La sanidad divina" }, { title: "Jornada 6: Las ordenanzas de la Iglesia" }];
  const modulo_a2 = [{ title: "Jornada 1: El Espíritu Santo" }, { title: "Jornada 2: Los dones del Espíritu Santo" }, { title: "Jornada 3: Los dones vocales del Espíritu Santo" }, { title: "Jornada 4: Los dones de revelación" }, { title: "Jornada 5: Los dones de poder del Espíritu Santo" }, { title: "Jornada 6: Los dones de sanidad" }, { title: "Jornada 7: La gran comisión y la sanidad" }, { title: "Jornada 8: El poder de Dios para dar sanidad" }, { title: "Jornada 9: Hablar palabras de sanidad" }, { title: "Jornada 10: Impartición por la imposición de manos" }];
  const modulo_a3 = [{ title: "Jornada 1: Introducción al Nuevo Testamento" }, { title: "Jornada 2: Mateo, Marcos, Lucas tres retratos de Jesucristo" }, { title: "Jornada 3: Juan: El cuato retrato de Jesucristo" }, { title: "Jornada 4: Hechos: La expansión del Evangelio" }, { title: "Jornada 5: Romanos: Carta de Pablo acerca del Evangelio de la gracia" }, { title: "Jornada 6: Primera y Segunda de Corintios, Gálatas: Cartas de Pablo de la vida del Evangelio de la gracia" }, { title: "Jornada 7: Ef., Filipenses, Colosenses y Filemón: Cartas de Pablo desde la prisión" }, { title: "Jornada 8: Primera y Segunda de Timoteo y Tito: Las cartas de Pablo a los líderes" }, { title: "Jornada 9: De Hebreos a Judas: Las cartas generales de los creyentes" }, { title: "Jornada 10: El Apocalipsis: La consumación de todas las cosas" }];
  const modulo_a4 = [{ title: "Jornada 1: La prioridad, el propósito, y representación de la adoración" }, { title: "Jornada 2: El papel de la música en el reino de Dios" }, { title: "Jornada 3: La importancia del cántico nuevo" }, { title: "Jornada 4: Nuestra responsabilidad como adoradores" }, { title: "Jornada 5: Cómo hacerse adorador" }];
  const modulo_b1 = [{ title: "Jornada 1: Su triple potencial" }, { title: "Jornada 2: ¿Qué es la oración?" }, { title: "Jornada 3: La práctica de la oración, 1ra parte" }, { title: "Jornada 4: La práctica de la oración, 2da parte" }, { title: "Jornada 5: El propósito de la oración" }];
  const modulo_b2 = [{ title: "Jornada 1: El viaje de un siervo" }, { title: "Jornada 2: Dios usa estrellas y velas" }, { title: "Jornada 3: No temáis al liderazgo, a la organización o la estructura, 1ra parte" }, { title: "Jornada 4: No temáis al liderazgo, a la organización o la estructura, 2da parte" }, { title: "Jornada 5: Llegando a ser un siervo de fuego" }];
  const modulo_b3 = [{ title: "Jornada 1: Abordando el Antiguo Testamento" }, { title: "Jornada 2: El orden de los libros y la creación" }, { title: "Jornada 3: La imagen de Dios y la caída" }, { title: "Jornada 4: Babel y Abraham, conceptos de pacto" }, { title: "Jornada 5: Abraham, Israel, José, Moisés" }, { title: "Jornada 6: La adoración en el Tabernáculo" }, { title: "Jornada 7: Josué y Jueces" }, { title: "Jornada 8: Los Reyes, David, Salmos y la poesía hebrea" }, { title: "Jornada 9: La literatura sapiencial, la división y el exilio" }, { title: "Jornada 10: La cautividad en Babilonia, el regreso del exilio y los profetas" }];
  const modulo_b4 = [{ title: "Jornada 1: El cambio (Intercambio) divino, 1ra parte" }, { title: "Jornada 2: El cambio (Intercambio) divino, 2da parte" }, { title: "Jornada 3: El triunfo de alabanza" }, { title: "Jornada 4: ¿Qué hace obrar a los ángeles?" }, { title: "Jornada 5: Cómo hacer que su fe obre" }];
  const modulo_b5 = [{ title: "Jornada 1: La voluntad de Dios y la sanidad" }, { title: "Jornada 2: Sanidad en la expiación" }, { title: "Jornada 3: Salvación plena" }, { title: "Jornada 4: Moisés, la serpiente y la sanidad" }, { title: "Jornada 5: La misericordia de sanar" }];
  const modulo_c1 = [{ title: "Jornada 1: Introducción al Curso Internacional" }];
  const modulo_c2 = [{ title: "Jornada 1: El modelo para el entrenamiento ministerial" }, { title: "Jornada 2: La meta y el objetivo del ministerio de enseñanza" }, { title: "Jornada 3: Planifique su instituto" }];
  const modulo_c3 = [{ title: "Jornada 1: Propósitos de los grupos celulares" }, { title: "Jornada 2: Evangelizando a los perdidos a través de los grupos celulares" }, { title: "Jornada 3: Desarrollando líderes" }, { title: "Jornada 4: Los principios de la multiplicación" }, { title: "Jornada 5: Líderes grandes en la iglesia" }];
  const modulo_c4 = [{ title: "Jornada 1: La gran comisión" }, { title: "Jornada 2: Cómo puede usted ponerse a disposición del Espíritu Santo" }, { title: "Jornada 3: La integridad necesaria para llevar la unción del Espiritu Santo" }, { title: "Jornada 4: La magnitud de la gran comisión" }, { title: "Jornada 5: El fuego del Espíritu Santo" }];
  const modulo_c5 = [{ title: "Jornada 1: La integridad del corazón" }, { title: "Jornada 2: Un espíritu qué perdona" }];
  const modulo_c6 = [{ title: "Jornada 1: Abracemos la visión" }, { title: "Jornada 2: Las cualidades de la visión" }, { title: "Jornada 3: Enfocando la visión" }, { title: "Jornada 4: La visión de Dios para las naciones" }, { title: "Jornada 5: El financiamiento de la visión" }];
  const modulo_c7 = [{ title: "Jornada 1: Una descripción del planteamiento de Iglesias" }, { title: "Jornada 2: La Iglesia local como centro de entrenamiento de ministerios" }, { title: "Jornada 3: Ministros vocacionales en la Iglesia local" }, { title: "Jornada 4: Identificando equipos para plantar Iglesias" }, { title: "Jornada 5: Preparando y enviando a los equipos que planten Iglesias" }];
  const modulo_c8 = [{ title: "Jornada 1: Las diversas maneras que Dios guía a su pueblo" }, { title: "Jornada 2: Cómo nos guía Dios mediante nuestro espíritu" }, { title: "Jornada 3: Cómo recibir dirección en tiempos difíciles" }, { title: "Jornada 4: Las prioridades de la vida" }, { title: "Jornada 5: Trampas y peligros al buscar la guianza de Dios" }];
  const modulo_d1 = [{ title: "Jornada 1: Mentalidades; visión y responsabilidad" }, { title: "Jornada 2: Responsabilidad y pruebas" }, { title: "Jornada 3: Quejándose e impaciencia" }, { title: "Jornada 4: Impaciencia y la mentalidad de víctima" }, { title: "Jornada 5: La mentalidad de victima y lástima propia" }, { title: "Jornada 6: La autoestima" }, { title: "Jornada 7: Los celos, la testarudez y la rebeldía" }];
  const modulo_d2 = [{ title: "Jornada 1: El corazón de un líder" }, { title: "Jornada 2: Su corazón determina el curso de la vida" }, { title: "Jornada 3: Su corazón determina su éxito en la vida" }, { title: "Jornada 4: ¿Líderes o seguidores?" }, { title: "Jornada 5: Trampas a los visionarios" }];
  const modulo_d3 = [{ title: "Jornada 1: Eficacia" }];
  const modulo_d4 = [{ title: "Jornada 1: Introducción" }, { title: "Jornada 2: Orígenes y destinos" }, { title: "Jornada 3: Las estrategias del enemigo" }, { title: "Jornada 4: Viviendo una vida en reconciliación" }];
  const modulo_d5 = [{ title: "Jornada 1: El secreto mejor guardado del infierno" }, { title: "Jornada 2: El ateísmo" }, { title: "Jornada 3: Evangelismo militante" }, { title: "Jornada 4: La conversión verdadera y falsa" }, { title: "Jornada 5: Cómo conseguir el ardor hacia Dios" }];
  const modulo_d6 = [{ title: "Jornada 1: El fundamento bíblico de la guerra" }, { title: "Jornada 2: La comprensión de la guerra espiritual" }, { title: "Jornada 3: Oración de guerra y las puertas del Infierno" }, { title: "Jornada 4: Derribar las puertas del Infierno" }, { title: "Jornada 5: Usar la autoridad en la sociedad" }];
  const modulo_d7 = [{ title: "Jornada 1: La carnada de Satanás" }, { title: "Jornada 2: Cubierto" }];
  const modulo_d8 = [{ title: "Jornada 1: Memorización bíblica (PARTE 1)" }, { title: "Jornada 2: Memorización bíblica (PARTE 2)" }, { title: "Jornada 3: Quebrantando las maldiciones generacionales" }];
  const modulo_e1 = [{ title: "Jornada 1: Jesús, nuestro modelo" }, { title: "Jornada 2: Jesús, nuestra inspiración" }, { title: "Jornada 3: Nuestra respuesta" }, { title: "Jornada 4: Escogidos para servicio" }, { title: "Jornada 5: Nuestra credibilidad" }, { title: "Jornada 6: Nuestra legalidad" }, { title: "Jornada 7: La experiencia" }];
  const modulo_e2 = [{ title: "Jornada 1: La forma de vida máxima" }, { title: "Jornada 2: Cómo empezar una forma de vida de dar" }, { title: "Jornada 3: Los beneficios de vivir dando a Dios" }, { title: "Jornada 4: Vivir y dar más de lo posible" }, { title: "Jornada 5: ¿Puede Dios? Dios puede" }];
  const modulo_e3 = [{ title: "Jornada 1: ¿Qué es un anciano en el sentido bíblico?" }, { title: "Jornada 2: La función de los Ancianos" }, { title: "Jornada 3: El carácter de los Ancianos" }, { title: "Jornada 4: El ministerio de cinco pasos. PARTE 1" }, { title: "Jornada 5: El ministerio de cinco pasos. PARTE 2" }];
  const modulo_e4 = [{ title: "Jornada 1: Qué dice la Biblia acerca del ministerio de niños" }, { title: "Jornada 2: Las leyes de hospitalidad" }, { title: "Jornada 3: La cosecha de los últimos días" }, { title: "Jornada 4: Predicándoles a los niños" }, { title: "Jornada 5: Ministerio de jóvenes dirigido por un Pastor" }, { title: "Jornada 6: Cómo mantener la atención de un niño" }, { title: "Jornada 7: Cómo ser un excelente narrador" }];
  const modulo_e5 = [{ title: "Jornada 1: Usando títeres en el ministerio de niños" }, { title: "Jornada 2: Cómo ser una persona que resuelve problemas" }, { title: "Jornada 3: Organizando el ministerio de niños para el crecimiento" }, { title: "Jornada 4: Cómo obtener la ayuda de otros" }];
  const modulo_e6 = [{ title: "Jornada 1: Establecer una visión para el ministerio de jóvenes" }, { title: "Jornada 2: Guiando a líderes a ejecución máxima" }, { title: "Jornada 3: Comunicándose efectivamente con la juventud" }, { title: "Jornada 4: Planeando efectivamente un ministerio de jóvenes" }];

  // METEMOS TODOS LOS MÓDULOS EN UNA LISTA MAESTRA
  const allModulesData = [
    { number: "01", title: "LOS FUNDAMENTOS DE LA FE", lessons: modulo_a1 },
    { number: "02", title: "LA VIDA SOBRENATURAL Y LA SANIDAD", lessons: modulo_a2 },
    { number: "03", title: "ESTUDIO PANORÁMICO DEL NUEVO TESTAMENTO", lessons: modulo_a3 },
    { number: "04", title: "ALABANZA Y ADORACIÓN", lessons: modulo_a4 },
    { number: "05", title: "EL PODER DE LA ORACIÓN", lessons: modulo_b1 },
    { number: "06", title: "EL MINISTERIO DE AYUDAS", lessons: modulo_b2 },
    { number: "07", title: "ESTUDIO PANORÁMICO DEL ANTIGUO TESTAMENTO", lessons: modulo_b3 },
    { number: "08", title: "LA ESENCIA DEL EVANGELIO", lessons: modulo_b4 },
    { number: "09", title: "JESÚS SANA HOY", lessons: modulo_b5 },
    { number: "10", title: "MOVILIZAR PARA MULTIPLICAR", lessons: modulo_c1 },
    { number: "11", title: "CÓMO DESARROLLAR UNA ESCUELA BÍBLICA EN SU IGLESIA", lessons: modulo_c2 },
    { number: "12", title: "LOS GRUPOS CELULARES", lessons: modulo_c3 },
    { number: "13", title: "EL EVANGELISMO CON PODER", lessons: modulo_c4 },
    { number: "14", title: "LA INTEGRIDAD Y LIDERAZGO", lessons: modulo_c5 },
    { number: "15", title: "LOS LÍDERES Y SU VISIÓN", lessons: modulo_c6 },
    { number: "16", title: "CÓMO PLANTAR IGLESIAS USANDO EQUIPOS", lessons: modulo_c7 },
    { number: "17", title: "CÓMO SER GUIADOS POR EL ESPÍRITU SANTO", lessons: modulo_c8 },
    { number: "18", title: "MENTALIDAD DE DESIERTO", lessons: modulo_d1 },
    { number: "19", title: "CÓMO DESARROLLAR LÍDERES", lessons: modulo_d2 },
    { number: "20", title: "CÓMO SER LÍDER DE UN GRUPO CELULAR", lessons: modulo_d3 },
    { number: "21", title: "LA RECONCILIACIÓN", lessons: modulo_d4 },
    { number: "22", title: "EL EVANGELISMO PERSONAL", lessons: modulo_d5 },
    { number: "23", title: "LA GUERRA ESPIRITUAL", lessons: modulo_d6 },
    { number: "24", title: "LA AUTORIDAD Y EL PERDÓN", lessons: modulo_d7 },
    { number: "25", title: "VICTORIA ESPIRITUAL", lessons: modulo_d8 },
    { number: "26", title: "LA CONEXIÓN CON CRISTO", lessons: modulo_e1 },
    { number: "27", title: "VIVIENDO PARA DAR", lessons: modulo_e2 },
    { number: "28", title: "LA ANCIANIDAD BÍBLICA", lessons: modulo_e3 },
    { number: "29", title: "ALCANCEMOS UNA NUEVA GENERACIÓN", lessons: modulo_e4 },
    { number: "30", title: "CÓMO ADMINISTRAR LA IGLESIA PARA EL MAÑANA", lessons: modulo_e5 },
    { number: "31", title: "LA MINISTRACIÓN DE JÓVENES", lessons: modulo_e6 }
  ];

  // ==========================================
  // LÓGICA DEL BUSCADOR
  // ==========================================
  const filteredModules = allModulesData.map(mod => {
    if (!searchTerm.trim()) return mod;

    // Quita tildes y convierte a minúsculas
    const normalizeText = (text: string) => {
      return text
        .normalize("NFD") // Separa la letra de la tilde
        .replace(/[\u0300-\u036f]/g, "") // Borra todas las tildes sueltas
        .toLowerCase();
    };

    // Normalizamos la búsqueda del usuario y la separamos en palabras
    const searchWords = normalizeText(searchTerm).split(' ').filter(word => word.trim() !== '');

    // Mini-detector que normaliza el texto antes de comparar
    const matchesAllWords = (text: string) => {
      const normalizedText = normalizeText(text);
      return searchWords.every(word => normalizedText.includes(word));
    };

    // Filtramos MÓDULOS
    if (matchesAllWords(mod.title)) {
      return mod;
    }

    // Filtramos JORNADAS
    const filteredLessons = mod.lessons.filter(lesson => 
      matchesAllWords(lesson.title)
    );

    return { ...mod, lessons: filteredLessons };
    
  }).filter(mod => mod.lessons.length > 0);

  return (
    <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center min-h-[60vh]">
      
      {/* El buscador (le pasamos el estado) */}
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      {/* Mensaje por si no hay resultados */}
      {filteredModules.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-2xl font-bold text-dios-brown mb-2">No se encontraron resultados</p>
          <p className="text-gray-500">Prueba buscando con otras palabras como &quot;Jesús&quot;, &quot;Sanidad&quot; o &quot;Espíritu&quot;.</p>
        </div>
      )}

      {/* Los Módulos Generados Automáticamente */}
      <div className="w-full flex flex-col gap-4">
        {filteredModules.map(mod => (
          <Module 
            key={mod.number}
            number={mod.number} 
            title={mod.title} 
            lessons={mod.lessons} 
            isExpanded={searchTerm.length > 0} // Si hay texto en el buscador, se abre solo
            onSelectLesson={(lesson) => setSelectedLesson(lesson)}
          />
        ))}
      </div>

      <VideoModal 
        isOpen={selectedLesson !== null} 
        onClose={() => setSelectedLesson(null)} 
        title={selectedLesson?.title || ""}
        youtubeId={selectedLesson?.youtubeId}
        startTime={selectedLesson?.startTime} 
      />
    </div>
  );
}