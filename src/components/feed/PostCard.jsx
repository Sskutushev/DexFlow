import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="bg-surface p-4 rounded-lg">
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 rounded-full bg-primary-cyan/20 text-primary-cyan flex items-center justify-center font-bold text-sm mr-3">
        {post.author.name.substring(0, 2).toUpperCase()}
      </div>
      <div>
        <Link to={`/profile/${post.author.address}`} className="font-bold hover:underline text-text">{post.author.name}</Link>
        <p className="text-xs text-muted">{post.timestamp}</p>
      </div>
    </div>
    {post.image && (
      <img src={post.image} alt="Post image" className="w-full rounded-lg mb-3" />
    )}
    {post.video && (
      <div className="relative w-full mb-3" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={post.video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Post video"
        ></iframe>
      </div>
    )}
    <p className="text-sm text-text">{post.content}</p>
    <div className="flex items-center justify-between text-muted text-xs mt-4">
      <span>👍 {post.likes}</span>
      <span>👁️ {post.views}</span>
    </div>
  </div>
);

export default PostCard;
