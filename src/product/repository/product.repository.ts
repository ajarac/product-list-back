import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ProductDocument } from './product-document.model';

@Injectable()
export class ProductRepository {

  constructor(@InjectModel('products') private readonly productModel: Model<ProductDocument>) {
  }

  async getAllProducts(): Promise<ProductDocument[]> {
    return await this.productModel.find().exec();
  }

}
