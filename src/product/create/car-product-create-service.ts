import { Injectable } from '@nestjs/common';
import { Product } from '../product';
import { ProductCreateDto } from './product-create-dto';

@Injectable()
export class CarProductCreateService {
  create(creationDto: ProductCreateDto): Product {
    const product = new Product(null, creationDto.name, creationDto.type);
    console.log('Creating product with CarProductCreateService: ', product);
    return product;
  }
}
