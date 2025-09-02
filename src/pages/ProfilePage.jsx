import React from 'react';
import { useParams } from 'react-router-dom';

// Страница профиля пользователя
const ProfilePage = () => {
  const { address } = useParams();

  return (
    <div className="text-center pt-10">
      <div className="w-24 h-24 rounded-full bg-surface mx-auto mb-4 flex items-center justify-center">
        {/* Placeholder for avatar */}
        <span className="text-4xl">🦊</span>
      </div>
      <h1 className="text-2xl font-bold">Профиль</h1>
      <p className="text-muted font-mono break-all">{address}</p>
      <p className="mt-8">Лента постов этого пользователя будет здесь.</p>
    </div>
  );
};

export default ProfilePage;
