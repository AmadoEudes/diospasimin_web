import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="relative flex items-center w-full h-14 rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden px-4">
        <Search className="text-dios-orange opacity-70" size={20} />
        <input
          type="text"
          placeholder="Buscar una clase o tema específico..."
          className="w-full h-full bg-transparent outline-none border-none pl-4 text-dios-text placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}