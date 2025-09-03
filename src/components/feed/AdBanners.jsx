import React from 'react';

const AdBanner = ({ index }) => {
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-400 to-blue-500',
    'from-yellow-400 to-orange-500',
    'from-pink-500 to-red-500',
    'from-indigo-500 to-purple-500',
  ];

  const currentGradient = gradients[index % gradients.length];

  return (
    <div className={`w-full h-24 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${currentGradient}`}>
      Реклама {index + 1}
    </div>
  );
};

const AdBanners = () => {
  return (
    <div className="flex flex-col space-y-4">
      {[...Array(5)].map((_, i) => (
        <AdBanner key={i} index={i} />
      ))}
    </div>
  );
};

export default AdBanners;
