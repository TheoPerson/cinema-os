export default function LibraryPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-[1500px] px-5 py-8 md:px-10 lg:px-14">
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Library</p>
      <h1 className="mt-3 text-5xl font-medium tracking-[-0.05em] md:text-7xl">Your films</h1>

      <div className="mt-8 flex flex-wrap gap-2">
        {["All", "Cinema", "Home", "Favorites", "Watchlist", "9+"].map((filter) => (
          <button
            key={filter}
            className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/65 transition hover:bg-white/[0.06] hover:text-white"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-16 rounded-[22px] border border-dashed border-white/10 px-6 py-20 text-center text-white/35">
        Connect PostgreSQL + TMDB in Roadmap Phase 1–2 to populate the real library.
      </div>
    </main>
  );
}
