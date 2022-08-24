import { ProductCreateDto } from '../create/product-create-dto';
import { Product } from '../product';
import { ProductType } from '../product-type';

export interface ProductFlowManager {
  create(creationDto: ProductCreateDto): Product;
  approve(product: Product): void;
  getType(): ProductType;
}
