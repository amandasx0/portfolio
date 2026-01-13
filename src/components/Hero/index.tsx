"use client";
import Layout from "../Layout";
import Image from "next/image";

import Person from "../../../public/assets/person.jpeg";
import ArrowDown from "../../../public/assets/arrow-down.png";
import IconGithub from "../../../public/assets/github.png";
import IconLinkedin from "../../../public/assets/linkedin.png";
import IconEmail from "../../../public/assets/email.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const isMobile = window.innerWidth < 1024;
      section.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "start" : "center",
      });
    }
  };

  return (
    <>
      <Layout header>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-[80px] animate-pulse -z-8 pointer-events-none" />

        <div className="absolute top-2/4 bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-[80px] animate-pulse -z-8 md:top-1/3 pointer-events-none" />

        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-[60px] animate-pulse hidden md:block z-0 pointer-events-none" />
        <div className="flex flex-col items-center">
          <div className="flex flex-col xl:flex-row items-center justify-center">
            <div className="w-48 h-48 relative md:w-64 md:h-64">
              <Image
                src={Person}
                alt="Imagem da Amanda"
                fill
                className="rounded-full object-cover border-4 border-accent"
                priority
              />
            </div>

            <div className="xl:w-2/5 md:ml-8 ">
              <p className="text-primary text-lg text-center mt-4 ml-2 md:text-start md:mt-0">
                Olá, eu sou
              </p>

              <h1 className="text-4xl text-center mt-4 lg:text-7xl font-bold text-foreground md:text-start md:text-6xl">
                Amanda Costa
              </h1>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center md:text-start md:text-7xl">
                Desenvolvedora <br />
                Full Stack
              </h2>

              <p className="text-grey-50 text-base md:text-xl text-center md:text-start">
                Transformo ideias em código criando experiências web modernas,
                performáticas e bem estruturadas. Atuo principalmente com
                desenvolvimento front-end, construindo interfaces elegantes,
                responsivas e focadas em usabilidade, sempre com atenção à
                performance e integração com APIs. Apaixonada por tecnologia e
                em constante evolução.
              </p>

              <div className="mt-8 flex gap-4 flex-col md:flex-row">
                <button
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-grey-600 font-medium rounded-lg hover:opacity-90 text-center"
                  onClick={() => scrollToSection("project")}
                >
                  Ver projetos
                  <Image
                    src={ArrowDown}
                    alt="Seta pra baixo"
                    width={14}
                    height={14}
                  />
                </button>
                <button
                  className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary"
                  onClick={() => scrollToSection("contact")}
                >
                  Entrar em contato
                </button>
              </div>

              <div className="flex gap-4 mt-8 items-center justify-center md:justify-start">
                <a href="https://github.com/amandasx0" target="_blank">
                  <Image
                    src={IconGithub}
                    alt="Icon Github"
                    width={22}
                    height={22}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/amanda-paulo/"
                  target="_blank"
                >
                  <Image
                    src={IconLinkedin}
                    alt="Icon Linkedin"
                    width={22}
                    height={22}
                  />
                </a>
                <a href="mailto:amandasarahcosta@gmail.com">
                  <Image
                    src={IconEmail}
                    alt="Icon Email"
                    width={22}
                    height={22}
                    className="mt-1"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden animate-bounce absolute sm:bottom-10 md:block">
            <div className="w-6 h-10 border-2 border-foreground rounded-full p-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse ml-[1px]" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Hero;
