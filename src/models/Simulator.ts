import mongoose from 'mongoose';
import { stringSchema } from '../utils/constants';

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    dateRecorded: Date,
    cryptocurrency: stringSchema,
    euros: Number,
    price: Number,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

schema.index({ profile_id: -1 });
export default mongoose.model('Simulator', schema);
