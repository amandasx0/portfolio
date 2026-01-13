import Layout from "../Layout";
import CardProject from "../CardProject";
import ImageAmandie1 from "../../../public/assets/amandie1.jpg"
import ImageAmandie2 from "../../../public/assets/amandie2.jpg"
import ImageAmandie3 from "../../../public/assets/amandie3.jpg"
import ImageMedico1 from "../../../public/assets/medico1.jpg"
import ImageMedico2 from "../../../public/assets/medico2.jpg"
import ImageSispar1 from "../../../public/assets/sispar1.jpg"
import ImageSispar2 from "../../../public/assets/sispar2.jpg"


const Project = () => {
  const projects = [
    {
      position: "Frontend",
      title: "Amandie Joias – E-commerce de Joias",
      description:
        "Projeto de e-commerce desenvolvido com Next.js e Tailwind CSS, focado em performance, responsividade e experiência do usuário. A aplicação apresenta uma vitrine de produtos, navegação intuitiva, layout moderno e adaptação completa para dispositivos móveis. O projeto foi pensado para simular uma loja real de joias, com identidade visual própria e estrutura escalável para futuras funcionalidades como carrinho, checkout e integração com pagamentos.",
      github: "https://github.com/amandasx0/amandie-joias",
      domain: "https://amandie-joias.vercel.app",
      languages: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel", "Git Hub"],
      images: [ImageAmandie1, ImageAmandie2, ImageAmandie3]
    },
    {
      position: "Frontend",
      title: "Médicos Voluntários",
      description:
        "Aplicação desenvolvida com React e Vite, utilizando React Router para navegação entre páginas. O projeto conta com uma tela de cadastro de usuário com validação de formulário, impedindo o envio de dados vazios. O foco foi praticar rotas, organização de páginas e regras de validação, garantindo uma melhor experiência para o usuário.",
      github: "https://github.com/amandasx0/desafio-rotas",
      domain: "https://desafio-rotas-tan.vercel.app",
      languages: [
        "React",
        "Vite",
        "React Router DOM",
        "JavaScript",
        "SCSS (Sass)",
      ],
      images: [ImageMedico1, ImageMedico2]
    },
     {
      position: "Fullstack",
      title: "Projeto Sispar Front",
      description:
        "Aplicação desenvolvida em React com Vite, focada no gerenciamento de despesas pessoais. Possui sistema de autenticação, cadastro de usuários e controle completo de despesas, incluindo criação, listagem, busca por ID e exclusão de registros. O projeto utiliza React Hook Form para validações e Axios para comunicação com a API.",
      github: "https://github.com/amandasx0/projeto-sispar",
      domain: "https://projeto-sispar-mu.vercel.app",
      languages: ["React", "Vite", "React Router DOM", "React Hook Form", "Axios", "JavaScript", "Sass (SCSS)", "ESLint"],
      images: [ImageSispar1, ImageSispar2]
    },
    {
      position: "Backend",
      title: "Guia de Perguntas",
      description:
        "Plataforma de perguntas e respostas desenvolvida em Node.js com Express e Sequelize, permitindo o cadastro de perguntas, envio de respostas e listagem ordenada por data de criação. A aplicação utiliza banco de dados relacional e segue o padrão de API REST, com rotas para busca por ID e recuperação de todas as perguntas.",
      github: "https://github.com/amandasx0/perguntas/tree/main",
      languages: [
        "Node,js",
        "JavaScript",
        "Express",
        "Sequelize",
        "MySQL",
        "EJS",
        "Nodemon",
        "Dotenv",
        "Git Hub",
      ],
    },
    {
      position: "Backend",
      title: "Boot Discord",
      description:
        "Bot para Discord desenvolvido em Node.js utilizando a biblioteca discord.js, responsável por automatizar a alteração de nomes de usuários e o gerenciamento de cargos (adicionar e remover roles). O projeto foi criado para praticar integração com a API do Discord, manipulação de eventos e controle de permissões em servidores.",
      github: "https://github.com/amandasx0/bot-stark/tree/main",
      languages: ["Node.js", "JavaScript", "Discord.js", "Dontenv", "Git Hub"],
    },
    
     {
      position: "Fullstack",
      title: "Projeto Sispar Back",
      description:
        "API desenvolvida em Python com Flask, responsável por gerenciar autenticação de usuários e controle de despesas. Conta com rotas para cadastro, login, criação de despesas, busca por ID e listagem geral. Utiliza banco de dados relacional, criptografia de senhas com Bcrypt e documentação com Swagger.",
      github: "https://github.com/amandasx0/projeto-sispar-back",
      languages: ["Python", "Flask", "Flask-SQLAlchemy", "Flask-Bcrypt", "Flask-CORS", "MySQL", "SQLAlchemy", "Dotenv", "Flasgger (Swagger)"],
    },
  ];

  return (
    <Layout>
      <h2
        className="font-heading text-4xl xl:text-5xl font-bold text-foreground mb-4 text-center md:text-start"
        id="project"
      >
        Meus{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projetos
        </span>
      </h2>

      <p className="text-foreground text-lg font-semibold text-center xl:text-start">
        Uma seleção dos projetos que desenvolvi, mostrando minhas habilidades em
        desenvolvimento frontend, backend e full stack.
      </p>

      <div className="py-12 grid grid-cols-1 sm:px-4 xl:px-0 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        {projects.map((project) => (
          <CardProject key={project.title} {...project} />
        ))}
      </div>
    </Layout>
  );
};

export default Project;
