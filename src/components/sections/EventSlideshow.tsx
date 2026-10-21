"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function EventSlideshow({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  const [index, setIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  const go = (delta: number) => {
    setIndex((current) => {
      if (current === null) return current;
      return (current + delta + photos.length) % photos.length;
    });
  };

  return (
    <>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className="relative h-28 w-40 shrink-0 overflow-hidden rounded-xl bg-ink-800"
          >
            <Image
              src={src}
              alt={`${alt} photo ${i + 1}`}
              fill
              sizes="160px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIndex(null)}
          >
            <button
              onClick={() => setIndex(null)}
              className="absolute right-5 top-5 text-white/70 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X className="size-7" />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute left-4 text-white/70 transition-colors hover:text-white sm:left-8"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="size-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute right-4 text-white/70 transition-colors hover:text-white sm:right-8"
                  aria-label="Next photo"
                >
                  <ChevronRight className="size-8" />
                </button>
              </>
            )}

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[80vh] w-[90vw] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[index]}
                alt={`${alt} photo ${index + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
