'use client';

function LockIcon() {
  return (
    <svg
      className="w-8 h-8 sm:w-9 sm:h-9 text-amber-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="10" width="16" height="10" rx="2" ry="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="w-8 h-8 sm:w-9 sm:h-9 text-amber-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 5 6v6c0 4.5 3.5 7.5 7 9 3.5-1.5 7-4.5 7-9V6l-7-3z" />
      <path d="M9.5 12.5 11 14l3.5-3.5" />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg
      className="w-8 h-8 sm:w-9 sm:h-9 text-amber-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="14" width="3" height="6" rx="1.5" />
      <rect x="18" y="14" width="3" height="6" rx="1.5" />
    </svg>
  );
}

export default function Features() {
  const features = [
    {
      icon: <LockIcon />,
      title: 'Your information is Safe',
      description:
        'The total cost consists of the tax, insurance and the delivery charge.',
    },
    {
      icon: <ShieldIcon />,
      title: 'Secure checkout',
      description:
        'The total cost consists of the tax, insurance and the delivery charge.',
    },
    {
      icon: <HeadphonesIcon />,
      title: '24/7 Support',
      description:
        'The total cost consists of the tax, insurance and the delivery charge.',
    },
  ];

  return (
    <div className="w-full bg-[#f5f7ff] py-10 sm:py-14 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="w-full flex justify-center mb-10">
          <div className="features-divider w-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

