import { AppProductsService } from './services/products.service';
import { Module } from '@nestjs/common';
import { AppProductsController } from './controllers/products.controller';
@Module({
  imports: [],
  controllers: [AppProductsController],
  providers: [AppProductsService],
  exports: [],
})
export class AppProductsModule {}
