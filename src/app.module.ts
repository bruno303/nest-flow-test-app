import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarProductApproveService } from './product/approve/car-product-approve-service';
import { ProductController } from './product/controller/product-controller';
import { CarProductCreateService } from './product/create/car-product-create-service';
import { HouseProductCreateService } from './product/create/house-product-create-service';
import { CarProductFlowManager } from './product/flow/car-product-flow-manager';
import { HouseProductFlowManager } from './product/flow/house-product-flow-manager';
import { ProductFlowManagerStrategy } from './product/flow/product-flow-manager-strategy';
import { CarProductPayTaxes } from './product/pay-taxes/car-product-pay-taxes';
import { ProductModule } from './product/product-module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
