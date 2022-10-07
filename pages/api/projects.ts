import { NextApiRequest, NextApiResponse } from 'next';
import createProject from 'services/projects/create';
import { getAllProjects, getOneProject } from 'services/projects/getProjects';

export default async (req: NextApiRequest, res: NextApiResponse) => {
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

    default:
      res.status(400);
  }
};
