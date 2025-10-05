import { Document } from 'mongoose';

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: number;
  password: string;
  profession: string;
  profile_image?: string;
}
