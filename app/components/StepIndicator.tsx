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
    <div className="w-full bg-blue-900/80 border border-blue-800 px-4 sm:px-8 py-3 sm:py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 flex-1 min-w-0">
          {steps.map((step) => {
            const isCompleted = step.number < currentStep;
            const isCurrent = step.number === currentStep;

            return (
              <div key={step.number} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition shrink-0 ${
                    isCompleted
                      ? 'bg-orange-400 text-white'
                      : isCurrent
                      ? 'bg-white text-blue-900'
                      : 'bg-blue-800 text-white'
                  }`}
                >
                  {isCompleted ? '✓' : step.number}
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium whitespace-nowrap ${
                    isCurrent || isCompleted ? 'text-white' : 'text-blue-300'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <button className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition whitespace-nowrap flex items-center gap-1 sm:self-auto self-start">
          <span>←</span>
          <span>Previous step</span>
        </button>
      </div>
    </div>
  );
}
