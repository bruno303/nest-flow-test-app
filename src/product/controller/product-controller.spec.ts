import { Test, TestingModule } from '@nestjs/testing';
import { ProductModule } from '../product-module';
import {
  CreateProductRequest,
  CreateProductResponse,
  ProductController,
} from './product-controller';

describe('ProductController', () => {
  let productController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ProductModule],
    }).compile();

    productController = app.get<ProductController>(ProductController);
  });

  describe('create car', () => {
    it('should return a new car product', () => {
      const request = new CreateProductRequest('car', 'CAR');
      const response: CreateProductResponse = productController.create(request);
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('name', 'car');
      expect(response).toHaveProperty('type', 'CAR');
    });
  });

  describe('create house', () => {
    it('should return a new house product', () => {
      const request = new CreateProductRequest('house', 'HOUSE');
      const response: CreateProductResponse = productController.create(request);
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('name', 'house');
      expect(response).toHaveProperty('type', 'HOUSE');
    });
  });

  describe('create supplies', () => {
    it('should throw when supplies is not implemented', () => {
      const request = new CreateProductRequest('food', 'SUPPLIES');
      expect(() => productController.create(request)).toThrowError(
        "Product flow manager for type 'SUPPLIES' not implemented",
      );
    });
  });

  describe('create unknown type', () => {
    it('should throw', () => {
      const request = new CreateProductRequest('xpto', 'XPTO');
      expect(() => productController.create(request)).toThrowError(
        "Product type 'XPTO' not found",
      );
    });
  });
});
