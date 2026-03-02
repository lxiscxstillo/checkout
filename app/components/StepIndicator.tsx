'use client';

interface StepIndicatorProps {
  currentStep?: number;
}

export default function StepIndicator({ currentStep = 2 }: StepIndicatorProps) {
  const steps = [
    { number: 1, label: 'Personal details' },
    { number: 2, label: 'Order details' },
    { number: 3, label: 'Payment' },
    { number: 4, label: 'Confirmation' },
  ];

  return (
    <div className="w-full bg-linear-to-br from-blue-950 via-blue-900 to-blue-900 px-4 sm:px-8 pb-8 border-b border-blue-800">
      <div className="max-w-4xl mx-auto pt-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0 flex-wrap">
            {steps.map((step, idx) => {
              const isActive = step.number === currentStep;

              return (
                <div
                  key={step.number}
                  className="flex items-center gap-1 sm:gap-3"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition shrink-0 ${
                      isActive
                        ? 'bg-yellow-400 text-blue-950'
                        : 'bg-blue-800 text-white'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`text-xs font-medium hidden md:inline whitespace-nowrap ${
                      isActive ? 'text-white' : 'text-blue-300'
                    }`}
                  >
                    {step.label}
                  </span>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block w-6 h-px bg-blue-700 mx-1" />
                  )}
                </div>
              );
            })}
          </div>

          <button className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition whitespace-nowrap flex items-center gap-1 self-end sm:self-center">
            <span>←</span>
            <span>Previous step</span>
          </button>
        </div>
      </div>
    </div>
  );
}
