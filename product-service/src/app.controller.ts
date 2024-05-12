import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private products = [
    { id: 1, name: 'Product 1', price: 10, stock: 100 },
    { id: 2, name: 'Product 2', price: 20, stock: 200 },
  ];
  private logger: any;
  constructor() {
    this.logger = new Logger('ProductService');
  }

  @MessagePattern({ cmd: 'createProduct' })
  createProduct(productData: any) {
    this.logger.log('createProduct has call');
    const newProduct = { ...productData, id: this.products.length + 1 };
    this.products.push(newProduct);
    return newProduct;
  }

  @MessagePattern({ cmd: 'findAllProducts' })
  findAllProducts() {
    this.logger.log('findAllProduct has call');
    return this.products;
  }

  @MessagePattern({ cmd: 'findOneProduct' })
  findOneProduct(id: number) {
    this.logger.log('findOneProduct has call');
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      return this.products[index];
    } else {
      return 'Product not found';
    }
  }

  @MessagePattern({ cmd: 'updateProduct' })
  updateProduct(data: { id: number; productData: any }) {
    const { id, productData } = data;
    const index = this.products.findIndex((product) => product.id === id);

    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...productData };
      return this.products[index];
    } else {
      return 'Product not found';
    }
  }

  @MessagePattern({ cmd: 'deleteProduct' })
  deleteProduct(id: number) {
    this.logger.log('deleteProduct has call');
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return 'Product deleted successfully';
  }
}
