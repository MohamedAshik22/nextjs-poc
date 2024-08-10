'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Fetch user data based on ID
async function fetchUser(id: string) {
  const res = await fetch(`https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/users/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  return res.json();
}

// Update user data based on ID
async function updateUser(id: string, userData: any) {
  const res = await fetch(`https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    throw new Error('Failed to update user data');
  }
  return res.json();
}

// Delete user based on ID
async function deleteUser(id: string) {
  const res = await fetch(`https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/users/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error('Failed to delete user');
  }
  return res.json();
}

// EditUser component to handle user edit, update, and delete operations
export default function EditUser() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id') as string;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchUser(id)
        .then(setUser)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const updatedUser = Object.fromEntries(formData.entries());
    try {
      await updateUser(id, updatedUser);
      alert('User updated successfully!');
      router.push(`/users/${id}`);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      alert('User deleted successfully!');
      router.push('/users'); // Assuming you have a user list page
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Edit User {id}</h1>
      {user && (
        <form onSubmit={handleUpdate}>
          <div>
            <label>
              Name:
              <input name="name" defaultValue={user.name} required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input name="email" type="email" defaultValue={user.email} required />
            </label>
          </div>
          {/* Add more fields as needed */}
          <button type="submit">Update User</button>
          <button type="button" onClick={handleDelete}>
            Delete User
          </button>
        </form>
      )}
    </div>
  );
}
