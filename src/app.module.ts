import { Module } from '@nestjs/common';
import { AppProductsModule } from './products/products.module';

@Module({
  imports: [AppProductsModule],
})
export class AppModule {}
