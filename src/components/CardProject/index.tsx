'use client'
import { useState } from "react";
import Image from "next/image";
import IconGitHub from "../../../public/assets/github.png"
import IconLink from "../../../public/assets/link.png"

type CardProjectProps = {
  position: string;
  title: string;
  description: string;
  github: string;
  domain?: string;
  languages: string[];
};

const CardProject = ({
  position,
  title,
  description,
  github,
  domain,
  languages,
}: CardProjectProps) => {
  const [showAll, setShowAll] = useState(false);

  const MAX_VISIBLE = 6;

  return (
    <div className="relative rounded-2xl border border-primary/30 bg-grey-400 p-6 shadow-lg hover:border-primary/60 w-auto xl:w-96">
      <span
        className={`absolute -top-3 left-6 rounded-full ${
          position === "Backend"
            ? "bg-accent"
            : position === "Frontend"
            ? "bg-primary/85"
            : "bg-gradient-to-r from-primary to-accent"
        } px-3 py-1 text-xs font-semibold`}
      >
        {position}
      </span>

      <div className="mb-4 flex items-center justify-between">
        <h3 className="mb-2 text-xl font-bold text-foreground w-3/4">{title}</h3>

        <div className="flex gap-3">
         

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={IconGitHub} width={20} height={20} alt="Icon Github" className="transition hover:opacity-70 hover:scale-110" />
          </a>

           {domain && (
            <a
              href={domain}
              target="_blank"
              rel="noopener noreferrer"
            >
               <Image src={IconLink} width={20} height={20} alt="Icon link" className="transition hover:opacity-70 hover:scale-110" />
            </a>
          )}
        </div>
      </div>

      <p className="mb-5 text-grey-50 text-sm font-medium">{description}</p>

      <div className="flex flex-wrap gap-2">
        {(showAll || languages.length <= MAX_VISIBLE
          ? languages
          : languages.slice(0, MAX_VISIBLE)
        ).map((language) => (
          <span
            key={language}
            className="px-4 py-2 rounded-full bg-grey-200 text-foreground text-xs font-medium"
          >
            {language}
          </span>
        ))}

        {!showAll && languages.length > MAX_VISIBLE && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="px-4 py-2 rounded-full bg-grey-200 text-foreground text-xs font-medium"
          >
            ...
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProject;
