import { Injectable } from '@nestjs/common';
import { HouseProductCreateService } from '../create/house-product-create-service';
import { ProductCreateDto } from '../create/product-create-dto';
import { Product } from '../product';
import { ProductType } from '../product-type';
import { ProductFlowManager } from './product-flow-manager';

@Injectable()
export class HouseProductFlowManager implements ProductFlowManager {
  constructor(
    private readonly houseProductCreateService: HouseProductCreateService,
  ) {}

  getType(): ProductType {
    return ProductType.HOUSE;
  }

  create(creationDto: ProductCreateDto): Product {
    return this.houseProductCreateService.create(creationDto);
  }

  approve(product: Product): void {
    // TODO: implement
  }
}
