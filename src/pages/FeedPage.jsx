import React, { useState, useEffect } from 'react';
import CreatePost from '../components/feed/CreatePost';
import PostCard from '../components/feed/PostCard';
import AdBanners from '../components/feed/AdBanners'; // New import
import TopCryptos from '../components/feed/TopCryptos'; // New import
import { getPosts } from '../services/mock-api';

// Страница ленты постов
const FeedPage = () => {
  const [activeTab, setActiveTab] = useState('popular');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts(activeTab));
  }, [activeTab]);

  const TabButton = ({ tabId, title }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-4 py-2 font-semibold rounded-md transition-colors ${
        activeTab === tabId
          ? 'bg-accent-gradient text-white'
          : 'text-muted hover:bg-glass-strong'
      }`}>
      {title}
    </button>
  );

  return (
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Ad Banners */}
        <div className="lg:col-span-2 order-last lg:order-first">
          <AdBanners />
        </div>

        {/* Center Column: Feed Content */}
        <div className="lg:col-span-7">
          <CreatePost />
          <div className="mt-8 mb-4 flex justify-center space-x-2">
            <TabButton tabId="popular" title="Популярное" />
            <TabButton tabId="hot" title="Горячее" />
            <TabButton tabId="trending" title="В тренде" />
          </div>
          <div className="space-y-6">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Column: Top Cryptos */}
        <div className="lg:col-span-3">
          <TopCryptos />
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
