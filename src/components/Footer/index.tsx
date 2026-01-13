import Image from "next/image";
import IconGithub from "../../../public/assets/github.png";
import IconLinkedin from "../../../public/assets/linkedin.png";
import IconEmail from "../../../public/assets/email.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-background-primary py-12 px-4 items-center justify-start sm:justify-center" id="contact">
        <div className="flex md:justify-between md:flex-row flex-col items-center w-full sm:w-3/5 border-b border-grey-50/15 pb-8">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-start">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-grey-50 text-lg font-semibold text-start">
            Entre em contato para discutirmos seu próximo projeto
          </p>
        </div>
        <div className="flex gap-4 mt-8 sm:mt-0">
          <a href="https://github.com/amandasx0" target="_blank">
            <div className="p-2 rounded-lg bg-grey-50/10">
              <Image
                src={IconGithub}
                alt="Icone github"
                width={24}
                height={24}
              />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/amanda-paulo/" target="_blank">
            <div className="p-2 rounded-lg bg-grey-50/10">
              <Image
                src={IconLinkedin}
                alt="Icone linkedin"
                width={24}
                height={24}
              />
            </div>
          </a>

          <a href="mailto:amandasarahcosta@gmail.com">
            <div className="p-2 rounded-lg bg-grey-50/10">
              <Image src={IconEmail} alt="Icone email" width={24} height={24} />
            </div>
          </a>
        </div>
      </div>
      <p className="mt-8 text-sm text-grey-50/70">Feito com ❤ por Amanda Costa © 2026</p>
    </div>
      

  );
};

export default Footer;
