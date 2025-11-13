import React from 'react';

const documents = [
  {
    category: "Trabalho de Conclusão de Curso (Técnico ADS)",
    title: "Bluery: O Diário do Seu Mundo Azul.",
    summary: "O projeto Bluery consiste no desenvolvimento de um aplicativo móvel criado especificamente para auxiliar cuidadores de pessoas com Transtorno do Espectro Autista (TEA)...",
    links: [
      { name: "Documentação Resumida (FETEPS)", url: "https://drive.google.com/file/d/1fPFv7v0jXQKXqBFOmnZJmrR_hg59SqX8/view?usp=sharing" },
      { name: "Pitch Deck", url: "https://www.canva.com/design/DAGzvBhWC9E/SKWO89NOGjsoQfkC4cAiGw/view?utm_content=DAGzvBhWC9E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8dfca7d324" },
      { name: "Materiais Adicionais", url: "https://linktr.ee/bluerydiary" }
    ]
  },
  {
    category: "Projeto Interdisciplinar (Técnico ADS)",
    title: "EcoVaso: mais tempo para você, mais vida para a sua horta.",
    summary: "O projeto trata da criação de um vaso irrigador inteligente usando um microcontrolador Arduino. A ideia principal é tornar o cultivo de plantas em casa mais fácil e sustentável...",
    links: [
      { name: "Artigo Científico", url: "#" }, // Placeholder link
      { name: "Pitch Deck", url: "https://app.presentations.ai/view/EPG5vP" }
    ]
  }
];

const Documents = () => {
  return (
    <section id="documentos" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Documentos e Trabalhos</h2>
        <div className="space-y-12">
          {documents.map(doc => (
            <div key={doc.title} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 mb-2">{doc.category}</p>
              <h3 className="text-2xl font-bold mb-4">{doc.title}</h3>
              <p className="text-gray-700 mb-6">{doc.summary}</p>
              <div className="flex flex-wrap gap-4">
                {doc.links.map(link => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
