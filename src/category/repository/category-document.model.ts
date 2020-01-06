import { Category } from '../model/category.model';
import { Document } from 'mongoose';

export interface CategoryDocument extends Category, Document {
}
