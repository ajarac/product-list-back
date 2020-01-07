import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CategoryDocument } from './category-document.model';
import { Category } from '../model/category.model';

@Injectable()
export class CategoryRepository {
  constructor(@InjectModel('categories') private readonly categoryModel: Model<CategoryDocument>) {
  }

  async getAllCategories(): Promise<CategoryDocument[]> {
    return await this.categoryModel.find().exec();
  }

  async createCategory(name: string): Promise<CategoryDocument> {
    const category: Category = { name };
    return await this.categoryModel.create(category);
  }

  async removeCategory(id: string): Promise<CategoryDocument> {
    const category: CategoryDocument = await this.categoryModel.findById(id).exec();
    return await category.remove();
  }

}
