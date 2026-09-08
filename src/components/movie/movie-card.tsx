"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

type MovieCardProps = {
  movie: {
    tmdbId: number;
    title: string;
    year: string;
    posterUrl: string;
    personalRating?: number;
    imdbRating?: number;
  };
};

export function MovieCard({ movie }: MovieCardProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 180, damping: 24, mass: 0.45 });
  const springY = useSpring(my, { stiffness: 180, damping: 24, mass: 0.45 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-2.4, 2.4]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [2.2, -2.2]);

  return (
    <motion.article
      className="group"
      style={{ perspective: 900 }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width - 0.5);
        my.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <Link href={`/movie/${movie.tmdbId}`} aria-label={`Open ${movie.title}`}>
        <motion.div
          className="relative aspect-[2/3] overflow-hidden rounded-[16px] bg-[var(--surface-2)] shadow-2xl shadow-black/20"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          whileHover={{ scale: 1.022 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
        >
          <Image
            src={movie.posterUrl}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/[0.03] opacity-40 transition-opacity duration-300 group-hover:opacity-70" />

          <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center gap-2 text-xs font-medium">
              {movie.personalRating != null && (
                <span className="rounded-full bg-black/55 px-2.5 py-1 backdrop-blur-md">
                  YOU {movie.personalRating.toFixed(1)}
                </span>
              )}
              {movie.imdbRating != null && (
                <span className="rounded-full bg-black/55 px-2.5 py-1 text-white/75 backdrop-blur-md">
                  IMDb {movie.imdbRating.toFixed(1)}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        <div className="pt-3">
          <h3 className="truncate text-sm font-medium">{movie.title}</h3>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{movie.year}</p>
        </div>
      </Link>
    </motion.article>
  );
}
