"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import IconGitHub from "../../../public/assets/github.png";
import IconLink from "../../../public/assets/link.png";

type CardProjectProps = {
  position: string;
  title: string;
  description: string;
  github: string;
  domain?: string;
  languages: string[];
  images?: StaticImageData[];
};

const CardProject = ({
  position,
  title,
  description,
  github,
  domain,
  languages,
  images,
}: CardProjectProps) => {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const safeImages = images ?? [];
  const hasMultipleImages = safeImages && safeImages.length > 1;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      nextImage();
    }

    if (distance < -minSwipeDistance) {
      prevImage();
    }
  };

  const nextImage = () => {
    if (!safeImages) return;

    setCurrentImage((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!safeImages) return;

    setCurrentImage((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const limit = 145;
  const isLongText = description.length > limit;

  const textToShow = expanded ? description : description.slice(0, limit);

  const MAX_VISIBLE = 5;

  return (
    <>
      {isOpen && safeImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:opacity-80"
            >
              ✕
            </button>

            <Image
              src={safeImages[currentImage]}
              alt={`${title} preview expanded`}
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-grey-400 text-3xl hover:opacity-80"
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-grey-400 text-3xl hover:opacity-80"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="relative rounded-2xl border border-primary/30 bg-grey-400 p-4 shadow-lg hover:border-primary/60 w-auto xl:w-96">
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

        {safeImages.length > 0 && (
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <Image
              src={safeImages[currentImage]}
              alt={`${title} preview`}
              width={400}
              height={220}
              className="h-40 w-full object-cover cursor-pointer"
              onClick={() => setIsOpen(true)}
            />

            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-grey-400/50 p-1 text-foreground hover:bg-grey-400/70"
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-grey-400/50 p-1 text-foreground hover:bg-grey-400/70"
                >
                  ›
                </button>
              </>
            )}

            {hasMultipleImages && (
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                {safeImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === currentImage ? "bg-primary" : "bg-foreground/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mb-4 flex items-center justify-between">
          <h3 className="mb-2 text-base font-bold text-foreground w-3/4">
            {title}
          </h3>

          <div className="flex gap-3">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Image
                src={IconGitHub}
                width={20}
                height={20}
                alt="Icon Github"
                className="transition hover:opacity-70 hover:scale-110"
              />
            </a>

            {domain && (
              <a href={domain} target="_blank" rel="noopener noreferrer">
                <Image
                  src={IconLink}
                  width={20}
                  height={20}
                  alt="Icon link"
                  className="transition hover:opacity-70 hover:scale-110"
                />
              </a>
            )}
          </div>
        </div>

        <p className="mb-5 text-grey-50 text-xs font-medium">
          {textToShow}
          {isLongText && !expanded && "... "}
          {isLongText && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-primary underline hover:opacity-80"
            >
              {expanded ? "ver menos" : "ver mais"}
            </button>
          )}
        </p>

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
    </>
  );
};

export default CardProject;
