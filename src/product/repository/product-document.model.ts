import { Product } from '../model/product.model';
import { Document } from 'mongoose';

export interface ProductDocument extends Product, Document {
}
