import Layout from "../Layout";
import StatisticsTech from "../StatisticsTech";

const TechStack = () => {
  const TechFront = [
    {
      stack: "React",
      percentage: 95,
    },
    {
      stack: "Next.js",
      percentage: 95,
    },
    {
      stack: "JavaScript",
      percentage: 95,
    },
    {
      stack: "TypeScript",
      percentage: 90,
    },
    {
      stack: "Tailwind CSS",
      percentage: 85,
    },
    {
      stack: "Bootstrap",
      percentage: 95,
    },
    {
      stack: "SASS / SCSS",
      percentage: 95,
    },
  ];

  const TechBack = [
    {
      stack: "Python",
      percentage: 80,
    },
    {
      stack: "Node.js",
      percentage: 85,
    },
    {
      stack: "API REST",
      percentage: 85,
    },
    {
      stack: "Express",
      percentage: 85,
    },
    {
      stack: "Flask",
      percentage: 85,
    },
      {
      stack: "PostgreSQL",
      percentage: 80,
    },
      {
      stack: "MySQL",
      percentage: 85,
    },
    {
      stack: "Sequelize",
      percentage: 90,
    }
  ];

  return (
    <Layout backgroundColor="bg-background-primary/95">
      <h2 className="font-heading text-4xl xl:text-5xl  font-bold text-foreground mb-4 text-center md:text-start">
        Tech{" "}
        <span className="bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
          Stack
        </span>
      </h2>

      <p className="text-foreground text-lg font-semibold text-center xl:text-start">
        As tecnologias que utilizo no dia a dia para criar soluções incríveis.
      </p>

      <div className="grid gap-8 py-12 w-full md:w-auto xl:grid-cols-2">
        <div className="bg-grey-400 p-6 rounded-xl border border-zinc-800 w-full md:w-[580px]">
          <h3 className="text-primary text-2xl font-bold mb-6">Frontend</h3>

          {TechFront.map((tech) => (
            <StatisticsTech
              key={tech.stack}
              stack={tech.stack}
              percentage={tech.percentage}
              position="front"
            />
          ))}
        </div>


        <div className="bg-grey-400 p-6 rounded-xl border border-zinc-800 w-full md:w-[580px]">
          <h3 className="text-accent text-2xl font-bold mb-6">Backend</h3>

          {TechBack.map((tech) => (
            <StatisticsTech
              key={tech.stack}
              stack={tech.stack}
              percentage={tech.percentage}
              position="back"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
