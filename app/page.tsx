import SearchBar from "../components/SearchBar";
import Module from "../components/Module";

export default function Home() {
  // Aquí definimos los datos falsos temporales para ver cómo se ve
  const modulo1 = [
    { title: "Jornada 1: La Biblia es palabra de Dios y la Trinidad" },
    { title: "Jornada 2: La deidad de Jesús y la misión de Jesús" },
    { title: "Jornada 3: Salvación por la gracia mediante la fe, el Cielo y el Infierno" },
    { title: "Jornada 4: La persona y obra del Espíritu Santo" },
    { title: "Jornada 5: La sanidad divina" },
  ];

  const modulo2 = [
    { title: "Jornada 1: Introducción a la vida sobrenatural" },
    { title: "Jornada 2: Principios de fe" },
  ];

  return (
    <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center">
      
      {/* El buscador */}
      <SearchBar />

      {/* Los Módulos */}
      <div className="w-full flex flex-col gap-4">
        <Module 
          number="01" 
          title="LOS FUNDAMENTOS DE LA FE" 
          lessons={modulo1} 
        />
        <Module 
          number="02" 
          title="LA VIDA SOBRENATURAL Y LA SANIDAD" 
          lessons={modulo2} 
        />
        <Module 
          number="03" 
          title="ESTUDIO PANORÁMICO DEL NUEVO TESTAMENTO" 
          lessons={[]} // Vacío por ahora
        />
      </div>

    </div>
  );
}