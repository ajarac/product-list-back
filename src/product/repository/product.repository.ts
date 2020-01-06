import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { ProductDocument } from './product-document.model';

@Injectable()
export class ProductRepository {
	constructor(@InjectModel('products') private readonly productModel: Model<ProductDocument>) {}

	async getAllProducts(): Promise<ProductDocument[]> {
		return await this.productModel.find().exec();
	}

	async createProduct(product: CreateProductDTO): Promise<ProductDocument> {
		return await this.productModel.create(product);
	}

	async removeProduct(id: string): Promise<ProductDocument> {
		const objectId: Types.ObjectId = Types.ObjectId.createFromHexString(id);
		return await this.productModel.findByIdAndRemove(objectId).exec();
	}
}
