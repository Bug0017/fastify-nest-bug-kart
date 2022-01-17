import { AppTypeORMModule } from './typeorm.module';
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AppTypeORMModule, ProductsModule],
})
export class AppModule {}
