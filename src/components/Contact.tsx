import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Contato</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através dos links abaixo.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://www.linkedin.com/in/joão-vitor-dias-24b0a324a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xl font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/DiasJoao002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xl font-medium"
          >
            GitHub
          </a>
          <a
            href="mailto:joao.vd.conrado@gmail.com"
            className="text-blue-600 hover:underline text-xl font-medium"
          >
            E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
