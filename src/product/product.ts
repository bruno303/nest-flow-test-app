import { Uuid } from 'src/model/uuid';
import { uuidV4 } from '../utils/uuid';
import { ProductType } from './product-type';

export class Product {
  constructor(
    private readonly _id: Uuid,
    private readonly _name: string,
    private readonly _type: ProductType,
  ) {
    this._id = this._id ?? uuidV4();
  }

  public get id(): Uuid {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get type(): ProductType {
    return this._type;
  }
}
