import React, { useState, useEffect } from 'react';
import CreatePost from '../components/feed/CreatePost';
import PostCard from '../components/feed/PostCard';
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
    <div className="max-w-2xl mx-auto">
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
  );
};

export default FeedPage;
