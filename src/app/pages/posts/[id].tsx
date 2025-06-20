import { GetServerSideProps } from 'next';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function PostPage({ post }: { post: Post }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm">Published on {new Date(post.createdAt).toDateString()}</p>
      <div className="mt-4">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`);
  const post = await res.json();

  return {
    props: { post },
  };
};
