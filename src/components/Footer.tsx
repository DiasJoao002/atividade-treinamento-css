import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-6 py-4 text-center text-gray-600">
        <p>Desenvolvido com ❤️ por João Vitor Dias</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/joão-vitor-dias-24b0a324a" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">LinkedIn</a>
          <a href="https://github.com/DiasJoao002" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">GitHub</a>
          <a href="mailto:joao.vd.conrado@gmail.com" className="hover:text-gray-800">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
