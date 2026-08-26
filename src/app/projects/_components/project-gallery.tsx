"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectGalleryProps = {
  images: readonly string[];
  projectName: string;
};

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="project-gallery" aria-label={`${projectName} secondary images`}>
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelected(index)}
            className="project-gallery-thumb focus-ring"
            aria-label={`View ${projectName} project image ${index + 1} fullscreen`}
          >
            <Image
              src={image}
              width={1200}
              height={760}
              alt=""
              className="h-full w-full object-cover"
            />
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-zinc-950/95 p-4 backdrop-blur-sm sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} image preview`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelected(null);
          }}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="focus-ring absolute top-5 right-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white hover:text-zinc-950"
            aria-label="Close image preview"
            autoFocus
          >
            ×
          </button>
          <div className="w-full max-w-6xl">
            <Image
              src={images[selected]}
              width={1200}
              height={760}
              alt={`${projectName} project image ${selected + 1}`}
              className="max-h-[82vh] w-full rounded-2xl object-contain shadow-2xl"
              preload
            />
            <p className="mt-4 text-center text-xs tracking-[.18em] text-zinc-400 uppercase">
              {projectName} · Image {selected + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
