'use client';

import StepIndicator from './StepIndicator';

export default function Header() {
  return (
    <header className="w-full bg-linear-to-br from-blue-950 via-blue-900 to-blue-900 pb-8 border-b border-blue-800">
      <div className="px-4 sm:px-8 pt-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-6">
          <button className="text-white text-xs sm:text-sm font-medium flex items-center gap-2 hover:opacity-80 transition">
            <span>←</span>
            <span className="hidden sm:inline">Go Back</span>
          </button>

          <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-[0.4em]">
            2019
          </h1>

          <button
            className="text-white hover:opacity-80 transition"
            aria-label="Menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <StepIndicator currentStep={2} />
        </div>
      </div>
    </header>
  );
}

