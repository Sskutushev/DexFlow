import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockProfile } from '../mock/profileData';
import PostCard from '../components/feed/PostCard';

const TABS = { POSTS: 'POSTS', PORTFOLIO: 'PORTFOLIO', ACTIVITY: 'ACTIVITY' };

const ProfilePage = () => {
  const { address } = useParams(); // In a real app, you'd fetch user data based on this address
  const user = mockProfile; // Using mock data for now

  const [activeTab, setActiveTab] = useState(TABS.POSTS);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(user.address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const StatItem = ({ label, value }) => (
    <div className="text-center">
      <p className="font-bold text-lg text-text">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );

  const TabButton = ({ tabId, title }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-4 py-2 font-semibold transition-colors border-b-2 ${
        activeTab === tabId
          ? 'text-text border-accent'
          : 'text-muted border-transparent hover:text-text'
      }`}>
      {title}
    </button>
  );

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-surface rounded-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 md:mb-0 md:mr-8" />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-text">{user.name}</h1>
              <div className="flex items-center justify-center md:justify-start text-muted font-mono text-sm my-2">
                <span className="truncate">{user.address}</span>
                <button onClick={handleCopy} className="ml-2 p-1 rounded-md hover:bg-glass-strong transition-colors">
                  {isCopied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  )}
                </button>
              </div>
              <p className="text-muted mb-4 max-w-md">{user.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="bg-accent-gradient text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">Подписаться</button>
                <button className="bg-glass-strong text-text font-semibold py-2 px-6 rounded-lg hover:bg-glass transition-colors">Сообщение</button>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-8 pt-6 border-t border-glass-strong">
            <StatItem label="Посты" value={user.stats.posts} />
            <StatItem label="Подписчики" value={user.stats.followers} />
            <StatItem label="Подписки" value={user.stats.following} />
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-surface rounded-lg">
          <div className="border-b border-glass-strong">
            <nav className="flex space-x-2 px-4">
              <TabButton tabId={TABS.POSTS} title="Посты" />
              <TabButton tabId={TABS.PORTFOLIO} title="Портфель" />
              <TabButton tabId={TABS.ACTIVITY} title="Активность" />
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-6">
            {activeTab === TABS.POSTS && (
              <div className="space-y-4">
                {user.posts.map(post => <PostCard key={post.id} post={post} />)}
              </div>
            )}

            {activeTab === TABS.PORTFOLIO && (
              <div className="space-y-3">
                {user.portfolio.map(token => (
                  <div key={token.id} className="flex items-center justify-between bg-glass p-3 rounded-lg">
                    <div className="flex items-center">
                      <img src={token.icon} alt={token.name} className="w-8 h-8 rounded-full mr-4" />
                      <div>
                        <p className="font-bold text-text">{token.name}</p>
                        <p className="text-sm text-muted">{token.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-text">{token.amount.toLocaleString()}</p>
                      <p className="text-sm text-muted">${token.valueUSD.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === TABS.ACTIVITY && (
              <ul className="space-y-4">
                {user.activity.map(act => (
                  <li key={act.id} className="flex items-center text-sm">
                    <div className="bg-glass p-2 rounded-full mr-4">{act.type === 'SWAP' ? '🔄' : act.type === 'LIKE' ? '❤️' : act.type === 'FOLLOW' ? '👋' : '📄'}</div>
                    <div>
                      <p className="text-text">{act.details}</p>
                      <p className="text-xs text-muted">{act.timestamp}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
