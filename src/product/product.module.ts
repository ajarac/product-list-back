import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductController } from './controller/product.controller';
import { ProductSchema, ProductRepository } from './repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'products', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {
}
