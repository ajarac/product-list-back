import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryRepository, CategorySchema } from './repository';
import { CategoryController } from './controller/category.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'categories', schema: CategorySchema }])],
  controllers: [CategoryController],
  providers: [CategoryRepository],
})
export class CategoryModule {
}
