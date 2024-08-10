// src/components/CreateUserForm.tsx
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateUserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleBack = () => {
      router.push('/');
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email }),
    });

    if (response.ok) {
      alert('User created successfully');
      router.push('/users');
    } else {
      alert('Failed to create user');
    }
  };

  return (
    <form className='p-4' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label htmlFor="username" className='block text-gray-700 mb-2'>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full  border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor="email" className='block text-gray-700 mb-2'>Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />
      </div>

      <button className='bg-blue-500 text-white border border-blue-500 px-4 py-2 rounded hover:bg-blue-600' type="submit">Create User</button>
      <button className='border rounded bg-red-200 px-4 py-2' onClick={handleBack}>Back</button>
   
    </form>
  );
};

export default CreateUserForm;
