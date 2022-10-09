import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import createProject from 'services/projects/create';
import { getAllProjects, getOneProject } from 'services/projects/getProjects';
import { connectToDb } from 'utils/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDb();
  switch (req.method) {
    case 'GET': {
      if (req.query.id) {
        const id = req.query.id.toString();
        const data = await getOneProject(id);
        res.json(data);
        break;
      }
      const data = await getAllProjects();
      res.json(data);

      break;
    }
    case 'POST': {
      try {
        const payload = req.body;
        const data = await createProject(payload);
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
            author: payload.author,
            employees: payload.employees,
            title: payload.title,
            category: payload.category,
            logo: payload.logo,
            link: payload.link,
            description: payload.description,
            date: payload.date,
            skills: payload.skills
          }
        };

        const options = { upsert: true };
        const data = await db.collection('projects').updateOne(filter, updateDoc, options);
        res.status(200).json({ status: 'edit project', data });
      } catch (error) {
        res.status(422).json({ status: 'not_created', error });
      }
      break;
    }

    default:
      res.status(400);
  }
};
