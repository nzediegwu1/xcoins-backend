import mongoose from 'mongoose';
import { stringSchema } from '../utils/constants';

const { Schema } = mongoose;

const schema = new Schema({
  name: stringSchema,
  nickname: stringSchema,
  email: stringSchema,
  capital: Number,
  divisa: stringSchema,
  prefered_cryptocurrency: stringSchema,
});

schema.index({ nickname: 1 });
schema.index({ email: 1 });

export default mongoose.model('Profile', schema);
