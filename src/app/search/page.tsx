export default function SearchPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-5xl px-5 py-20 md:px-10">
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Search + AI</p>
      <h1 className="mt-4 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
        What do you want to watch?
      </h1>

      <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <input
          autoFocus
          placeholder="Search your cinema or ask anything"
          className="h-16 w-full bg-transparent px-5 text-lg outline-none placeholder:text-white/30"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-sm text-white/40">
        <span className="rounded-full border border-white/10 px-3 py-1.5">Fincher I haven't seen</span>
        <span className="rounded-full border border-white/10 px-3 py-1.5">Dark thriller under 2h</span>
        <span className="rounded-full border border-white/10 px-3 py-1.5">My cinema visits this year</span>
      </div>
    </main>
  );
}
