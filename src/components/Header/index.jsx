import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo/logo-full.svg" alt="IMAD" className="h-12 w-auto" />
        </div>
        
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('sobre')} className="text-gray-800 hover:text-institutional transition font-medium">Sobre</button>
          <button onClick={() => scrollToSection('pilares')} className="text-gray-800 hover:text-institutional transition font-medium">Pilares</button>
          <button onClick={() => scrollToSection('diferenciais')} className="text-gray-800 hover:text-institutional transition font-medium">Diferenciais</button>
          <button onClick={() => scrollToSection('cadastro')} className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition font-medium rounded-lg">
            Registrar
          </button>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => { scrollToSection('sobre'); setMenuOpen(false); }} className="text-left text-gray-800 hover:text-institutional transition py-2">Sobre</button>
            <button onClick={() => { scrollToSection('pilares'); setMenuOpen(false); }} className="text-left text-gray-800 hover:text-institutional transition py-2">Pilares</button>
            <button onClick={() => { scrollToSection('diferenciais'); setMenuOpen(false); }} className="text-left text-gray-800 hover:text-institutional transition py-2">Diferenciais</button>
            <button onClick={() => { scrollToSection('cadastro'); setMenuOpen(false); }} className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition rounded-lg">
              Registrar
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;