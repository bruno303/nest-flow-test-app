import { Injectable } from '@nestjs/common';
import { Product } from '../product';

@Injectable()
export class CarProductPayTaxes {
  payTaxes(product: Product): void {
    console.log('Paying taxes with CarProductPayTaxes');
  }
}
