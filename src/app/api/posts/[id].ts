// src/pages/api/post/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Fetch post details by ID
    res.status(200).json({ message: `Fetch post ${id}` });
  } else if (req.method === 'PUT') {
    // Update post by ID
    res.status(200).json({ message: `Update post ${id}` });
  } else if (req.method === 'DELETE') {
    // Delete post by ID
    res.status(200).json({ message: `Delete post ${id}` });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
