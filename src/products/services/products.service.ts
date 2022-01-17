import { ProductEntity } from './../entity/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  getAllProducts() {
    return this.productRepo.find();
  }

  createProduct(product) {
    return this.productRepo.save(product);
  }
}
