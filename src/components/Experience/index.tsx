import Layout from "../Layout";
import CardExperience from "../CardExperience";
import SectionHeader from "../SectionHeader";

import IconHat from "../../../public/assets/hat.png";
import IconPortfolio from "../../../public/assets/portfolio.png";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedora Front End Pleno",
      description:
        "Atuo como desenvolvedora front-end em projetos voltados à assistência médica, oferecendo suporte ao site de agendamento digital. Minhas principais responsabilidades incluem a resolução de incidentes, o desenvolvimento de novas funcionalidades e melhorias contínuas na aplicação. Utilizo tecnologias como Next.js, TypeScript, JavaScript e AWS, contribuindo para a estabilidade, performance e evolução do produto.",
      period: "Jul 2022 - Presente",
      linkProject: "https://agendamento.amaissaude.com.br",
      company: "Fleury",
    },
    {
      title: "Desenvolvedora Front End Júnior",
      description:
        "Alocada pelo estúdio Vai na Web em um squad dedicado ao Fleury Fertilidade, atuando no desenvolvimento do novo layout do produto e na manutenção de páginas existentes, garantindo responsividade, performance e qualidade da interface.",
      period: "Maio 2021 - Dez 2021",
      linkProject: "https://fertilidade.fleury.com.br",
      company: "Fleury Fertilidade",
    },
    {
      title: "Desenvolvedora Front End Júnior",
      description:
        "Criação de páginas web responsivas, utilizando ReactJS tendo em foco uma performace de qualidade para a aplicação.",
      period: "Jan 2021 - Jun 2022",
      linkProject: "https://vainaweb.com.br",
      company: "Vai na Web",
    },
    
  ];

  const qualifications = [
    {
      title: "Desenvolvimento Front End",
      description:
        "Vai na Web - Criação de páginas web responsivas, interatividade de páginas, lógica de programação.",
      period: "Fev 2020 - Dez 2020",
    },
     {
      title: "Formação de Desenvolvedor FullStack",
      description:
        "MOD1 - Criação e Interatividade de páginas web / MOD2 - Desenvolvimento Back-end Python / MOD3 - Introdução à Inteligência Artificial",
      period: "Jan 2025 - Jun 2025",
    },
  ];

  const certificates = ["Formação de Desenvolvedor FullStack", "Masterclass de Cibersegurança Estratégica", "Formação de Desenvolvedor FrontEnd", "Certificado interatividade de páginas (Javascript e React)"];
  return (
    <Layout>
      <h2 className="font-heading text-4xl xl:text-5xl font-bold text-foreground mb-4 text-center md:text-start">
        Experiencias &{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Qualificações
        </span>
      </h2>

      <p className="text-foreground text-lg font-semibold text-center xl:text-start">
        Minha trajetória e formação profissonal
      </p>

      <div className="grid gap-8 py-12 xl:grid-cols-2">
        <div className="w-full md:w-[580px]">
          <SectionHeader
            icon={IconPortfolio}
            iconBg="bg-primary/10"
            title="Experiência Profissional"
          />

          {experiences.map((item) => (
            <CardExperience
              key={`${item.title}-${item.period}`}
              title={item.title}
              description={item.description}
              period={item.period}
              company={item.company}
              linkProject={item.linkProject}
            />
          ))}
        </div>

        {qualifications.length > 0 && (
          <div className="w-full md:w-[580px] xl:ml-4">
            <SectionHeader
              icon={IconHat}
              iconBg="bg-accent/10"
              title="Formação Profissional"
            />

            {qualifications.map((item) => (
              <CardExperience
                key={`${item.title}-${item.period}`}
                title={item.title}
                description={item.description}
                period={item.period}
              />
            ))}

            {certificates.length > 0 && (
              <div className="mt-8">
                <SectionHeader
                  icon={IconPortfolio}
                  iconBg="bg-primary/10"
                  title="Centificações"
                />

                <div className="flex flex-wrap gap-3 mt-4">
                  {certificates.map((item) => (
                    <span
                      key={item}
                      className="px-4 pt-3 pb-2 rounded-full bg-grey-200 text-foreground text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Experience;
