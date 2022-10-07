import { connectToDb } from 'utils/mongodb';

type User = {
  id: string;
  name: string;
  imageUrl: string;
};

interface Payload {
  author: User;
  employees: User[];
  title: string;
  category: string;
  logo: string;
  link: string;
  description: string;
  data: string;
  skills: string[];
  likes: User[];
}

const createProject = async (payload: Payload) => {
  const db = await connectToDb();
  // eslint-disable-next-line prettier/prettier
  const { author, employees, title, category, logo, link, description, data, skills, likes } =
    payload;
  const project = await db.collection('projects').insertOne({
    author,
    employees,
    title,
    category,
    logo,
    link,
    description,
    data,
    skills,
    likes: []
  });

  return project;
};

export default createProject;
