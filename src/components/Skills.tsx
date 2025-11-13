import React from 'react';

const technicalSkills = {
  "Linguagens": "Python, JavaScript",
  "Front-End": "React, Next.js, HTML5, CSS3, Tailwind CSS",
  "Back-End (Básico)": "Node.Js, Flask (Python)",
  "Conceitos": "Lógica de Programação, Estrutura de Dados, Princípios Ágeis (Scrum, OKRs)",
  "Atualmente Explorando": "Fundamentos de Cibersegurança (TryHackMe), Álgebra Linear, Cloud (AWS EC2)"
};

const softSkills = [
  {
    title: "Liderança Servidora",
    description: "Foco em remover impedimentos e servir às necessidades da equipe e dos usuários (aplicado no Bluery)."
  },
  {
    title: "Escuta Ativa e Empatia",
    description: "Habilidade de 'apaixonar-se pelo problema' e construir soluções centradas no usuário, validada por entrevistas e testes de usabilidade."
  },
  {
    title: "Disciplina e Gestão de Foco",
    description: "Aplicação de metodologias como 'Getting Things Done' e blocos de trabalho focado ('Redimindo o Seu Tempo') para garantir entregas consistentes."
  },
  {
    title: "Resiliência e Propósito",
    description: "Capacidade de revisitar projetos (Bluery), aprender com falhas e realinhar o trabalho a um propósito maior de impacto social."
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-12">

          {/* Habilidades Técnicas */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Habilidades Técnicas (Hard Skills)</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                {Object.entries(technicalSkills).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-bold">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Habilidades Interpessoais */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Habilidades Interpessoais (Soft Skills)</h3>
            <div className="space-y-6">
              {softSkills.map(skill => (
                <div key={skill.title} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold">{skill.title}</h4>
                  <p className="text-gray-700">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
