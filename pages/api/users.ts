import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getOneUser, getAllUsers } from 'services/users/getUsers';
import { connectToDb } from 'utils/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDb();

  switch (req.method) {
    case 'GET': {
      if (req.query.id) {
        const id = req.query.id.toString();
        const data = await getOneUser(id);
        res.json(data);
        break;
      }
      const data = await getAllUsers();
      res.json(data);

      break;
    }
  }
};
