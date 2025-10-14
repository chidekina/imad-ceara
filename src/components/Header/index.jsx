import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu';
import Button from '../Button';

import { navItems } from "../../db/navItems";

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

        <NavMenu
          list={navItems}
          onclick={scrollToSection}
        />
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => { scrollToSection('sobre'); setMenuOpen(false); }} className="text-left text-gray-800 hover:text-institutional transition py-2">Sobre</button>
            <button onClick={() => { scrollToSection('pilares'); setMenuOpen(false); }} className="text-left text-gray-800 hover:text-institutional transition py-2">Pilares</button>
            <Button
              as={Link}
              to="/login" 
              onClick={() => setMenuOpen(false)}
              variant="secondary"
              size="md"
              rounded
              fullWidth
            >
              Login
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;