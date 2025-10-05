import mongoose, { Schema } from 'mongoose';
import { IUser } from '../@types/user';

const userSchema = new Schema<IUser>({
  first_name: { type: String },
  last_name: { type: String },
  username: { type: String },
  email: { type: String, unique: true },
  phone: { type: Number, unique: true },
  password: { type: String },
  profession: [{ type: String }],
  profile_image: { type: String },
});

export const User = mongoose.model<IUser>('User', userSchema);
