import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './services/products.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductEntity } from './entity/product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [],
})
export class ProductsModule {}
