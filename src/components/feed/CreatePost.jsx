import React, { useState, useRef, useEffect } from 'react';

const emojis = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
  '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
  '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤫', '🤔', '🤐',
  '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌',
  '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧',
  '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐',
];

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const emojiPickerRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setIsEmojiPickerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePost = () => {
    console.log('Posting:', postContent);
    setPostContent('');
    // In a real app, you'd send this to a backend
  };

  const handleEmojiSelect = (emoji) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      setPostContent(postContent.substring(0, start) + emoji + postContent.substring(end));
      // Optionally, refocus and set cursor after emoji
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
    }
    setIsEmojiPickerOpen(false);
  };

  return (
    <div className="bg-surface p-4 rounded-lg">
      <div className="relative mb-2">
        <textarea 
          ref={textareaRef}
          className="w-full bg-card p-2 rounded-md outline-none text-sm pr-10 resize-y border border-glass-strong" 
          rows="3" 
          placeholder="Что нового?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <button 
          onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-glass-strong"
        >
          {/* Simple Smiley Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </button>
        {isEmojiPickerOpen && (
          <div ref={emojiPickerRef} className="absolute top-full right-0 mt-2 bg-surface rounded-lg shadow-lg z-10 p-2 grid grid-cols-6 sm:grid-cols-8 gap-1 max-h-64 overflow-y-auto custom-scrollbar">
            {emojis.map((emoji, index) => (
              <span 
                key={index} 
                onClick={() => handleEmojiSelect(emoji)}
                className="cursor-pointer text-xl hover:bg-glass-strong p-1 rounded-md flex items-center justify-center"
              >
                {emoji}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
        <div className="flex space-x-2 mb-2 sm:mb-0">
          {/* Attach file icon */}
          <button className="p-2 rounded-full hover:bg-glass-strong">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
            </svg>
          </button>
          {/* Attach image icon */}
          <button className="p-2 rounded-full hover:bg-glass-strong">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 4 4 4-4zM9 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
          {/* Attach video icon */}
          <button className="p-2 rounded-full hover:bg-glass-strong">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              <path d="M10 2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 2zM4.5 6.5a.75.75 0 000 1.5h11a.75.75 0 000-1.5h-11z" />
            </svg>
          </button>
        </div>
        <button 
          onClick={handlePost}
          className="bg-primary-cyan/20 text-primary-cyan text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary-cyan/30 transition-colors w-full sm:w-auto"
        >Опубликовать</button>
      </div>
    </div>
  );
};

export default CreatePost;
