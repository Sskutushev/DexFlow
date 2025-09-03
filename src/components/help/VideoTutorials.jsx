import React from 'react';

const VideoTutorials = () => {
  const videos = [
    { id: 1, title: 'Как подключить кошелёк?', url: '#' },
    { id: 2, title: 'Основы торговли на DexFlow', url: '#' },
    { id: 3, title: 'Как работает стейкинг?', url: '#' },
  ];

  return (
    <div className="bg-surface p-4 sm:p-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-text">Видеоуроки</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map(video => (
          <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="block bg-glass rounded-lg p-4 hover:bg-glass-strong transition-colors">
            <div className="aspect-video bg-card mb-3 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-muted" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-text">{video.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoTutorials;
