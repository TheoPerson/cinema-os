export default function StatsPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-[1400px] px-5 py-12 md:px-10 lg:px-14">
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Your cinema, quantified</p>
      <h1 className="mt-3 text-5xl font-medium tracking-[-0.05em] md:text-7xl">Stats</h1>

      <section className="mt-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-6xl font-medium tracking-[-0.06em]">—</p>
          <p className="mt-2 text-sm text-white/45">Movies watched</p>
        </div>
        <div>
          <p className="text-6xl font-medium tracking-[-0.06em]">—</p>
          <p className="mt-2 text-sm text-white/45">Cinema viewings</p>
        </div>
        <div>
          <p className="text-6xl font-medium tracking-[-0.06em]">—</p>
          <p className="mt-2 text-sm text-white/45">Average rating</p>
        </div>
      </section>
    </main>
  );
}
