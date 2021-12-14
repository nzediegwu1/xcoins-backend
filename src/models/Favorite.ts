import mongoose from 'mongoose';
import { stringSchema } from '../utils/constants';

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
      required: true,
    },
    name: stringSchema,
    favorite1: stringSchema,
    favorite2: stringSchema,
    favorite3: stringSchema,
  },
  {
    timestamps: true,
  }
);

schema.index({ profile_id: -1 });
export default mongoose.model('Favorite', schema);
