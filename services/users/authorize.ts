import { connectToDb } from 'utils/mongodb';
import Joi from 'joi';
import crypto from 'crypto';

interface Payload {
  email: string;
  password: string;
}
const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const authorizeUser = async (payload: Payload) => {
  const db = await connectToDb();
  const { email, password } = await schema.validateAsync(payload);

  const user = await db.collection('users').findOne({ email: email });

  if (!user) {
    return null;
  }

  const passwordHash = crypto
    .pbkdf2Sync(password, user.passwordSalt, 1000, 64, `sha512`)
    .toString(`hex`);
  if (passwordHash !== user.passwordHash) {
    return null;
  }

  return {
    id: user._id,
    email: user.email,
    name: user.name,
    image: user.imageUrl
  };
};

export default authorizeUser;
