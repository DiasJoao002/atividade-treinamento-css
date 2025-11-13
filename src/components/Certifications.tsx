import React from 'react';

const certifications = [
  { name: "Certificado ONIA - 1ª Olimpíada Nacional de Inteligência Artificial (2024)", url: "#" },
  { name: "Certificado de Finalista - FETEPS 2025 (Projeto Bluery)", url: "#" },
  { name: "Curso de Álgebra Linear (KhanAcademy - em andamento)", url: "#" },
  { name: "Certificado TOEIC Bridge", url: "#" },
  { name: "Desafio de MicroSaaS (Rocketseat)", url: "#" }
];

const Certifications = () => {
  return (
    <section id="certificacoes" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certificações e Reconhecimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {certifications.map(cert => (
            <a key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-lg">{cert.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
