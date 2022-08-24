import { Injectable } from '@nestjs/common';
import { Product } from '../product';

@Injectable()
export class CarProductApproveService {
  approve(product: Product) {
    console.log('Approving product with CarProductApproveService: ', product);
  }
}
