import { Module } from '@nestjs/common';
import { CarProductApproveService } from './approve/car-product-approve-service';
import { ProductController } from './controller/product-controller';
import { CarProductCreateService } from './create/car-product-create-service';
import { HouseProductCreateService } from './create/house-product-create-service';
import { CarProductFlowManager } from './flow/car-product-flow-manager';
import { HouseProductFlowManager } from './flow/house-product-flow-manager';
import { ProductFlowManagerStrategy } from './flow/product-flow-manager-strategy';
import { CarProductPayTaxes } from './pay-taxes/car-product-pay-taxes';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductFlowManagerStrategy,

    // car
    CarProductFlowManager,
    CarProductApproveService,
    CarProductCreateService,
    CarProductPayTaxes,

    // house
    HouseProductFlowManager,
    HouseProductCreateService,
  ],
})
export class ProductModule {}
