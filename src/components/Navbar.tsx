import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">João Vitor Dias</div>
          <div className="hidden md:flex space-x-4">
            <a href="#curriculo" className="text-gray-600 hover:text-gray-800">Currículo</a>
            <a href="#projetos" className="text-gray-600 hover:text-gray-800">Projetos</a>
            <a href="#habilidades" className="text-gray-600 hover:text-gray-800">Habilidades</a>
            <a href="#contato" className="text-gray-600 hover:text-gray-800">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
