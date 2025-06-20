import React, { useEffect, useState } from 'react';
import BlogEditor from '@/Components/BlogEditor';

interface Post {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
        const error = await response.json();
        throw new Error(`Failed to save post: ${error.error}`);
      }

      const newPost = await response.json();
      console.log('Post saved:', newPost);
      setTitle('');
      setContent('');
      // Optionally, fetch posts again to include the newly created post
      fetchPosts();
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <BlogEditor onSave={handleSave} />
      <div className="mt-8">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 mb-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
