import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'categories' },
}, {
  versionKey: false,
});
