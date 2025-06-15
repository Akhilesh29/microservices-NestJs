import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto, UpdateProductDto, Product } from '@app/interfaces';

@Controller('products')
export class ProductController {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productService: ClientProxy,
  ) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.send({ cmd: 'create_product' }, createProductDto).toPromise();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.send({ cmd: 'get_product' }, id).toPromise();
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService
      .send({ cmd: 'update_product' }, { id, ...updateProductDto })
      .toPromise();
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this.productService.send({ cmd: 'delete_product' }, id).toPromise();
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.send({ cmd: 'get_all_products' }, {}).toPromise();
  }
} 