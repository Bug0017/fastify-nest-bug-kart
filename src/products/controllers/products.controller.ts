import { ProductsService } from './../services/products.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  createProduct(@Body() body) {
    return this.productsService.createProduct(body);
  }
}
