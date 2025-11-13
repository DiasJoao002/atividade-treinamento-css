import React from 'react';

const projects = [
  {
    title: "Bluery: O Diário do Seu Mundo Azul.",
    problem: "Cuidadores e famílias de pessoas com Transtorno do Espectro Autista (TEA) enfrentam uma imensa sobrecarga na gestão de rotinas, terapias e informações de saúde...",
    approach: "O Bluery nasceu como um TCC técnico... Adotei uma postura de Liderança Servidora e Escuta Ativa, e fui a campo ouvir mais cuidadores reais para refinar a solução...",
    technologies: "React Native (JS), Google Firebase, Node.Js, Expo, Figma",
    challenge: "O maior desafio não foi o código, mas sim transformar um 'projeto de nota' em um 'produto de impacto'...",
    results: "Versão 'Bluery 2.0' funcional, apresentada e validada como finalista na FETEPS 2025. Versão Beta atualmente em fase de testes de usabilidade...",
    links: [
      { name: "Imagens Bluery", url: "#" }
    ]
  },
  {
    title: "Missão Astro Júnior - Classificação de Planetas com Machine Learning",
    problem: "O desafio, elaborado para a 1ª ONIA, era desenvolver um modelo de machine learning capaz de classificar planetas em cinco categorias distintas...",
    approach: "Este projeto foi um mergulho prático em fundamentos de IA... Análise Exploratória de Dados (EDA), Modelagem Baseline e Otimização.",
    technologies: "Python, Pandas, NumPy, Matplotlib/Seaborn, Scikit-learn, XGBoost, Optuna",
    challenge: "O principal desafio foi lidar com o desequilíbrio de classes nos dados de treino, que tornava a previsão de classes minoritárias mais difícil.",
    results: "O modelo XGBoost final alcançou uma acurácia de 78% e um F1-score ponderado de 0.77 no conjunto de teste.",
    links: [
      { name: "GitHub", url: "https://github.com/DiasJoao002/missao-astro-junior" }
    ]
  },
  {
    title: "EcoVaso: mais tempo para você, mais vida para a sua horta",
    problem: "O cultivo de plantas em casa... sofre com desafios de manutenção. O principal é a irrigação inadequada...",
    approach: "Alinhado à filosofia de 'tecnologia com propósito', o objetivo foi aplicar tecnologia para tornar práticas sustentáveis mais fáceis e eficientes...",
    technologies: "Hardware: Arduino Uno R3, Sensores. Software: C/C++ (Arduino IDE), Tinkercad. Web: HTML, CSS, JavaScript, Bootstrap",
    challenge: "O maior desafio técnico foi a calibração do sensor de umidade... Foi preciso realizar um experimento de 'Capacidade de Retenção do Solo'...",
    results: "O projeto resultou em um protótipo funcional, tanto virtual quanto físico, de um vaso autoirrigável.",
    links: [
      { name: "Materiais", url: "https://drive.google.com/drive/folders/10DMF3h5IOPtCrvcZI5XtmVWP_zjd_0Mq?usp=sharing" }
    ]
  },
  {
    title: "Portfólio Pessoal com Next.js",
    problem: "Consolidar minha jornada acadêmica, projetos e filosofia em uma plataforma web profissional, moderna e de alta performance.",
    approach: "Utilização de um stack JAMstack moderno para garantir performance, SEO e uma excelente experiência de desenvolvimento (DX)...",
    technologies: "Next.js, React, TypeScript, Tailwind CSS, Vercel",
    challenge: "Estruturar a informação de forma lógica e contar minha história (storytelling) de maneira coesa...",
    results: "O site que você está navegando agora.",
    links: [
      { name: "GitHub", url: "https://github.com/DiasJoao002/portfolio-academico" }
    ]
  }
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <div className="text-gray-700 space-y-3 flex-grow">
      <p><strong>O Problema:</strong> {project.problem}</p>
      <p><strong>Minha Abordagem:</strong> {project.approach}</p>
      <p><strong>Tecnologias:</strong> <span className="font-mono text-sm bg-gray-100 p-1 rounded">{project.technologies}</span></p>
      <p><strong>Desafio:</strong> {project.challenge}</p>
      <p><strong>Resultados:</strong> {project.results}</p>
    </div>
    <div className="mt-4 pt-4 border-t">
      {project.links.map(link => (
        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projetos" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Principais Projetos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
