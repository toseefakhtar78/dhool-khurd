'use client';

import React, { useState } from 'react';

interface BlogEditorProps {
  onSave: (title: string, content: string) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="p-4 text-zinc-950">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 mb-2 w-full h-40"
      />
      <button onClick={handleSave} className="bg-blue-500 text-white p-2">
        Post
      </button>
    </div>
  );
};

export default BlogEditor;
