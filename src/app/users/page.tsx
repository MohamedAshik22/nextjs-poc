// src/app/user/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  username: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleBack = () => {
    router.push('/');
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (users.length === 0) return <p>No users found</p>;

  return (
    <div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="border border-gray-300 p-4 rounded">
              <p className="font-bold">{user.username}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='justify-center px-24'>
        <button className='border rounded bg-red-200 px-4 py-2' onClick={handleBack}>Back</button>

      </div>
    </div>
  );
}
