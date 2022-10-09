import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import create from 'services/users/create';
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
    case 'POST': {
      try {
        const payload = req.body;
        const data = await create(payload);
        res.status(200).json({ status: 'created', data });
      } catch (error) {
        res.status(422).json({ status: 'not_created', error });
      }
      break;
    }
    case 'PUT': {
      try {
        const queryId = req.query.id;
        const payload = req.body;
        const id = new ObjectId(queryId?.toString());
        console.log(queryId, 'query user');
        console.log(payload, 'payload put');
        const filter = { _id: id };
        const updateDoc = {
          $set: {
            name: payload.name,
            email: payload.email,
            imageUrl: payload.imageUrl,
            position: payload.position,
            location: payload.location,
            languages: payload.languages,
            skills: payload.skills,
            about: payload.about,
            socials: payload.socials,
            experience: payload.experience,
            education: payload.education,
            openToProject: payload.openToProject
          }
        };

        const options = { upsert: true };
        const data = await db.collection('users').updateOne(filter, updateDoc, options);
        res.status(200).json({ status: 'edit user', data });
      } catch (error) {
        res.status(422).json({ status: 'not_created', error });
      }
      break;
    }

    default:
      res.status(400);
  }
};
