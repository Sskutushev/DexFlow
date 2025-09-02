import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="bg-surface p-4 rounded-lg">
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 rounded-full bg-card mr-3"></div>
      <div>
        <Link to={`/profile/${post.author.address}`} className="font-bold hover:underline">{post.author.name}</Link>
        <p className="text-xs text-muted">{post.timestamp}</p>
      </div>
    </div>
    <p className="text-sm">{post.content}</p>
    <div className="flex items-center text-muted text-xs mt-4 space-x-4">
      <span>👍 {post.likes}</span>
      <span>👁️ {post.views}</span>
    </div>
  </div>
);

export default PostCard;
