import { Body, Controller, Post } from '@nestjs/common';
import { ProductCreateDto } from '../create/product-create-dto';
import { ProductFlowManagerStrategy } from '../flow/product-flow-manager-strategy';
import { valueOf } from '../product-type';

export class CreateProductRequest {
  constructor(public readonly name: string, public readonly type: string) {}
}

export class CreateProductResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: string,
  ) {}
}

@Controller('product')
export class ProductController {
  constructor(
    private readonly productFlowManagerStrategy: ProductFlowManagerStrategy,
  ) {}

  @Post()
  create(
    @Body() createProductRequest: CreateProductRequest,
  ): CreateProductResponse {
    const dto = new ProductCreateDto(
      createProductRequest.name,
      valueOf(createProductRequest.type),
    );
    const product = this.productFlowManagerStrategy.create(dto);
    return new CreateProductResponse(
      product.id.value,
      product.name,
      product.type.toString(),
    );
  }
}
