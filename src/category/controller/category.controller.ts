import { Body, Controller, Delete, Get, Param, Post, UseFilters } from '@nestjs/common';

import { CategoryRepository } from '../repository';
import { Category } from '../model/category.model';
import { BadRequestFilter, MongoExceptionFilter } from '../../core/filters';

@Controller('categories')
export class CategoryController {
	constructor(private categoryRepository: CategoryRepository) {}

	@Get()
	async getAllCategories(): Promise<Category[]> {
		return await this.categoryRepository.getAllCategories();
	}

	@Post()
	@UseFilters(BadRequestFilter, MongoExceptionFilter)
	async createCategory(@Body() body: { name: string }): Promise<Category> {
		return await this.categoryRepository.createCategory(body.name);
	}

	@Delete(':id')
	async removeCategory(@Param() id: string): Promise<Category> {
		return await this.categoryRepository.removeCategory(id);
	}
}
