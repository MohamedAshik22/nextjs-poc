// src/app/user/[id]/page.tsx
import { Suspense } from 'react';

// Fetch user data based on ID
async function fetchUser(id: string) {
  const res = await fetch(`https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/users/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  return res.json();
}

// UserDetails component to display user details
interface UserDetailsProps {
  params: {
    id: string;
  };
}

// Next.js Page Component
export default async function UserDetails({ params }: UserDetailsProps) {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div>
      <h1>User Details for {id}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render user details here */}
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Suspense>
    </div>
  );
}
