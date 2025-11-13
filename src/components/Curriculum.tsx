import React from 'react';

const Curriculum = () => {
  return (
    <section id="curriculo" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Currículo</h2>
        <div className="grid md:grid-cols-2 gap-12">

          {/* Formação Acadêmica */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Formação Acadêmica</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-lg font-bold">Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)</p>
                <p className="text-md text-gray-700">FATEC São José dos Campos (2025 - Presente)</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-lg font-bold">Técnico em Análise e Desenvolvimento de Sistemas</p>
                <p className="text-md text-gray-700">Etec de Taboão da Serra (2022 - 2024)</p>
              </div>
            </div>
          </div>

          {/* Principais Conquistas */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Principais Conquistas</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-lg font-bold">Medalha de Bronze</p>
                <p className="text-md text-gray-700">1ª Olimpíada Nacional de Inteligência Artificial (ONIA) - 2024</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-lg font-bold">Finalista da FETEPS (Feira Tecnológica do Centro Paula Souza)</p>
                <p className="text-md text-gray-700">Apresentação do projeto Bluery - 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;
