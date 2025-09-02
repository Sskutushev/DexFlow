import React from 'react';
import CreatePost from '../components/feed/CreatePost';
import PostCard from '../components/feed/PostCard';
import { getPosts } from '../services/mock-api';

// Страница ленты постов
const FeedPage = () => {
  const posts = getPosts();

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost />
      <div className="mt-8 space-y-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
