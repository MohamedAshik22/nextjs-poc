
// import { useEffect, useState } from 'react';

// interface Post {
//   id: string;
//   title: string;
//   content: string;
// }

// export default function PostList() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/posts');
//         if (!response.ok) {
//           throw new Error('Failed to fetch posts');
//         }
//         const data: Post[] = await response.json();
//         setPosts(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (posts.length === 0) return <p>No posts found</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Post List</h1>
//       <ul className="space-y-4">
//         {posts.map((post) => (
//           <li key={post.id} className="border border-gray-300 p-4 rounded">
//             <h2 className="text-lg font-semibold">{post.title}</h2>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// src/app/posts/page.tsx
// src/components/PostList.tsx
// "use client";


// import React from 'react';

// export interface Post {
//   id: string;
//   title: string;
//   content: string;
// }

// interface PostListProps {
//   posts: Post[];
// }

// const PostList: React.FC<PostListProps> = ({ posts =[]  }) => {
//   if (posts.length === 0) return <p>No posts found</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Post List</h1>
//       <ul className="space-y-4">
//         {posts.map((post) => (
//           <li key={post.id} className="border border-gray-300 p-4 rounded">
//             <h2 className="text-lg font-semibold">{post.title}</h2>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// app/posts/page.tsx

import Link from 'next/link';

export interface Post {
  id: string;
  title: string;
  content: string;
  // Add other post fields as needed
}

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-4 justify-center">
      {posts.map(post => (
        <div key={post.id} className="p-4 border border-gray-400 bg-gray-300 rounded text-center">
          <Link href={`/posts/${post.id}`} className="text-lg font-semibold">
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
