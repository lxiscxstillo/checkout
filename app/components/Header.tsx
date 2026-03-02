'use client';

export default function Header() {
  return (
    <header className="w-full bg-linear-to-br from-blue-950 via-blue-900 to-blue-900">
      <div className="px-4 sm:px-8 pt-6 pb-2">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button className="text-white text-xs sm:text-sm font-medium flex items-center gap-2 hover:opacity-80 transition">
            <span>←</span>
            <span className="hidden sm:inline">Go Back</span>
          </button>

          <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-[0.4em]">
            2019
          </h1>

          <button className="text-white text-xl sm:text-2xl hover:opacity-80 transition">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

