'use client';

export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Your information is Safe',
      description: 'The total cost consists of the tax, insurance and the delivery charge.',
    },
    {
      icon: '🛡️',
      title: 'Secure checkout',
      description: 'The total cost consists of the tax, insurance and the delivery charge.',
    },
    {
      icon: '🎧',
      title: '24/7 Support',
      description: 'The total cost consists of the tax, insurance and the delivery charge.',
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
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
