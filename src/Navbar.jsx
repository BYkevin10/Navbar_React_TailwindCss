import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Título */}
          <div className="text-2xl font-bold">Mi App</div>

          {/* Menú en escritorio */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Inicio</a>
            <a href="#" className="hover:text-gray-200">Sesión</a>
            <a href="#" className="hover:text-gray-200">Contacto</a>
          </div>

          {/* Botón hamburguesa en móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl focus:outline-none"
            >
              {open ? "❌" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Menú en móvil */}
      {open && (
        <div className="md:hidden bg-green-700 px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-gray-200">Inicio</a>
          <a href="#" className="block hover:text-gray-200">Sesión</a>
          <a href="#" className="block hover:text-gray-200">Contacto</a>
        </div>
      )}
    </nav>
  );
}
