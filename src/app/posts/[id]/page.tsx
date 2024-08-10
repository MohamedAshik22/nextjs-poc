// 'use client'
// import { Post } from '../../posts/page';

// interface PostDetailsProps {
//   post: Post | null;
// }

// const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {

//   if (!post) {
//     return <p>Post not found</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
//       <p className="mb-4">{post.content}</p>
     
//     </div>
//   );
// };

// export default PostDetails;
// src/app/posts/[id]/page.tsx
import { Post } from '../../posts/page'; // Adjust import as needed

interface PostDetailsProps {
  params: { id: string };
}

const fetchPost = async (id: string): Promise<Post | null> => {
  try {
    const res = await fetch(`https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/posts/${id}`, {
      method: 'GET',
      next: { revalidate: 60 }, // Optionally, set revalidation time
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const PostDetails = async ({ params }: PostDetailsProps) => {
  const post = await fetchPost(params.id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
    </div>
  );
};

export default PostDetails;
