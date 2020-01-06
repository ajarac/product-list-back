import { Controller, Get, Post } from '@nestjs/common';
import { Product } from '../model/product.model';
import { ProductRepository } from '../repository';

@Controller('products')
export class ProductController {

  constructor(private readonly productRepository: ProductRepository) {
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productRepository.getAllProducts();
  }

}
