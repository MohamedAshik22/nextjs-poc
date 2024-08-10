// src/pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Replace this with actual data fetching logic
    const users = [
      { id: '1', username: 'JohnDoe', email: 'johndoe@example.com' },
      { id: '2', username: 'JaneDoe', email: 'janedoe@example.com' },
    ];

    res.status(200).json(users);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
