import { ProductType } from '../product-type';

export class ProductCreateDto {
  constructor(
    public readonly name: string,
    public readonly type: ProductType,
  ) {}
}
