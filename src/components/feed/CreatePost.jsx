import React from 'react';

const CreatePost = () => (
  <div className="bg-surface p-4 rounded-lg">
    <textarea 
      className="w-full bg-card p-2 rounded-md outline-none text-sm" 
      rows="3" 
      placeholder="Что нового?"
    ></textarea>
    <div className="flex justify-between items-center mt-2">
      <div className="flex space-x-2">
        {/* Иконки для добавления контента */}
      </div>
      <button className="bg-primary-cyan/20 text-primary-cyan text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary-cyan/30 transition-colors">Опубликовать</button>
    </div>
  </div>
);

export default CreatePost;
