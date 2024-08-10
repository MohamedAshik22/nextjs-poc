// src/app/post/create/page.tsx
"use client"; // Ensure this component is client-side

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleBack = () => {
        router.push('/');
    }
  

    // src/app/post/create/page.tsx
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            alert('Post created successfully');
            router.push('/'); // Redirect after successful creation
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Create New Post</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded w-full"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-gray-700">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded w-full"
                        rows={4}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Post'}
                </button>
                <button className='border rounded bg-red-200 px-4 py-2' onClick={handleBack}>Back</button>
            </form>
        </div>
    );
}
