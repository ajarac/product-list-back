import { Body, Controller, Delete, Get, Param, Post, UseFilters } from '@nestjs/common';
import { Product } from '../model/product.model';
import { ProductRepository } from '../repository';
import { BadRequestFilter, MongoExceptionFilter } from '../../core/filters';

@Controller('products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productRepository.getAllProducts();
  }

  @Post()
  @UseFilters(BadRequestFilter, MongoExceptionFilter)
  async createProduct(@Body() createProduct: CreateProductDTO): Promise<Product> {
    return this.productRepository.createProduct(createProduct);
  }

  @Delete(':id')
  async removeProduct(@Param() { id }: { id: string }): Promise<Product> {
    return this.productRepository.removeProduct(id);
  }
}
