"use client"
import React from 'react';
import BlogEditor from '@/Components/BlogEditor';

const CreatePost: React.FC = () => {
  const handleSave = async (title: string, content: string) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to save post');
      }

      // Handle successful save (e.g., redirect or show a message)
      console.log('Post saved successfully');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 font-mono flex text-center">Create a New Post</h1>
      <BlogEditor onSave={handleSave} />
    </div>
  );
};

export default CreatePost;
