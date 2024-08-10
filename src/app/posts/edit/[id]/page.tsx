// src/app/post/edit/[id]/page.tsx
import { useRouter } from 'next/router';

export default function EditPost() {
  const router = useRouter();
  const { id } = router.query;

  // Form to edit an existing post using id
  return <h1>Edit Post {id}</h1>;
}
