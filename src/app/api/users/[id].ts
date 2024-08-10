// src/pages/api/user/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Fetch user details by ID
    res.status(200).json({ message: `Fetch user ${id}` });
  } else if (req.method === 'PUT') {
    // Update user by ID
    res.status(200).json({ message: `Update user ${id}` });
  } else if (req.method === 'DELETE') {
    // Delete user by ID
    res.status(200).json({ message: `Delete user ${id}` });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
