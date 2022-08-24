import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from '../create/product-create-dto';
import { Product } from '../product';
import { ProductType } from '../product-type';
import { CarProductFlowManager } from './car-product-flow-manager';
import { HouseProductFlowManager } from './house-product-flow-manager';
import { ProductFlowManager } from './product-flow-manager';

@Injectable()
export class ProductFlowManagerStrategy {
  private readonly flowManagers: Map<ProductType, ProductFlowManager> =
    new Map();

  constructor(
    carFlowManager: CarProductFlowManager,
    houseFlowManager: HouseProductFlowManager,
  ) {
    this.flowManagers.set(carFlowManager.getType(), carFlowManager);
    this.flowManagers.set(houseFlowManager.getType(), houseFlowManager);
  }

  create(creationDto: ProductCreateDto): Product {
    return this.getFlowManagerForType(creationDto.type).create(creationDto);
  }

  private getFlowManagerForType(type: ProductType): ProductFlowManager {
    const flow = this.flowManagers.get(type);
    if (flow == null)
      throw new Error(
        `Product flow manager for type '${type}' not implemented`,
      );
    return flow;
  }
}
