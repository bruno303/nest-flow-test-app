import { Injectable } from '@nestjs/common';
import { CarProductApproveService } from '../approve/car-product-approve-service';
import { CarProductCreateService } from '../create/car-product-create-service';
import { ProductCreateDto } from '../create/product-create-dto';
import { Product } from '../product';
import { ProductType } from '../product-type';
import { ProductFlowManager } from './product-flow-manager';

@Injectable()
export class CarProductFlowManager implements ProductFlowManager {
  constructor(
    private readonly carProductCreateService: CarProductCreateService,
    private readonly carProductApproveService: CarProductApproveService,
  ) {}

  getType(): ProductType {
    return ProductType.CAR;
  }

  create(creationDto: ProductCreateDto): Product {
    return this.carProductCreateService.create(creationDto);
  }

  approve(product: Product): void {
    this.carProductApproveService.approve(product);
  }
}
