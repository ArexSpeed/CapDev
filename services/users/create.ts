import { connectToDb } from 'utils/mongodb';
import Joi from 'joi';
import crypto from 'crypto';

interface Payload {
  email: string;
  name: string;
  password: string;
  position: string;
}

const schema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  position: Joi.string().required()
});

const checkUserExist = async (email: string) => {
  const db = await connectToDb();
  const existingUserEmail = await db.collection('users').findOne({ email: email });
  console.log(existingUserEmail, 'exist email');
  if (existingUserEmail) {
    throw new Error('This user is exists');
  }
};

const create = async (payload: Payload) => {
  const db = await connectToDb();
  // eslint-disable-next-line prettier/prettier
  const { email, name, password, position } = await schema.validateAsync(payload);
  await checkUserExist(email);
  console.log({ payload });
  const passwordSalt = crypto.randomBytes(16).toString('hex');
  const passwordHash = crypto
    .pbkdf2Sync(password, passwordSalt, 1000, 64, `sha512`)
    .toString(`hex`);
  // eslint-disable-next-line prettier/prettier
  console.log('pass', passwordSalt, passwordHash);
  const blankImage =
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1648748926/umcedkder4e0nxragcdg.png';
  const blankSocial = [
    { name: 'website', link: '' },
    { name: 'facebook', link: '' },
    { name: 'linkedin', link: '' },
    { name: 'twitter', link: '' },
    { name: 'github', link: '' },
    { name: 'dribbble', link: '' }
  ];

  const user = await db.collection('users').insertOne({
    email,
    name,
    imageUrl: blankImage,
    passwordSalt,
    passwordHash,
    position,
    location: '',
    languages: [],
    skills: [],
    socials: blankSocial,
    about: '',
    experience: [],
    education: [],
    openToProject: false,
    friends: [],
    followers: [],
    projetcs: []
  });

  return user;
};

export default create;
