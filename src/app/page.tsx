import Link from "next/link";
import { MovieCard } from "@/components/movie/movie-card";

const demoMovies = [
  {
    tmdbId: 157336,
    title: "Interstellar",
    year: "2014",
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    personalRating: 9.4,
    imdbRating: 8.7
  },
  {
    tmdbId: 693134,
    title: "Dune: Part Two",
    year: "2024",
    posterUrl: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    personalRating: 9.2,
    imdbRating: 8.5
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto min-h-dvh max-w-[1500px] px-5 pb-24 pt-6 md:px-10 lg:px-14">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.24em] text-[var(--text-primary)]"
        >
          CINEMA
        </Link>

        <Link
          href="/search"
          className="rounded-full border border-[var(--hairline)] bg-white/[0.035] px-5 py-2.5 text-sm text-[var(--text-secondary)] backdrop-blur-xl transition hover:bg-white/[0.07] hover:text-[var(--text-primary)]"
        >
          Search your cinema <span className="ml-2 opacity-50">⌘K</span>
        </Link>
      </header>

      <section className="pb-16 pt-24 md:pb-24 md:pt-36">
        <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)]">
          Your personal history of cinema
        </p>
        <h1 className="max-w-5xl text-balance text-5xl font-medium leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-8xl">
          Remember every film.
          <br />
          <span className="text-[var(--text-secondary)]">Keep every viewing.</span>
        </h1>
      </section>

      <section>
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.20em] text-[var(--text-secondary)]">
              Recently watched
            </p>
            <h2 className="mt-2 text-2xl tracking-[-0.03em]">Your cinema</h2>
          </div>
          <Link className="text-sm text-[var(--text-secondary)] hover:text-white" href="/library">
            View library
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {demoMovies.map((movie) => (
            <MovieCard key={movie.tmdbId} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
