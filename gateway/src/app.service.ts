import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  createOrder(orderData: any) {
    return this.orderClient.send({ cmd: 'createOrder' }, orderData);
  }

  findAllOrders() {
    return this.orderClient.send({ cmd: 'findAllOrder' }, {});
  }

  findOneOrder(id: number) {
    return this.orderClient.send({ cmd: 'findOneOrder' }, id);
  }

  updateOrder(id: number, orderData: any) {
    return this.orderClient.send({ cmd: 'updateOrder' }, { id, orderData });
  }

  deleteOrder(id: number) {
    return this.orderClient.send({ cmd: 'deleteOrder' }, id);
  }

  createProduct(productData: any) {
    return this.productClient.send({ cmd: 'createProduct' }, productData);
  }

  findAllProducts(): Observable<any> {
    return this.productClient.send({ cmd: 'findAllProducts' }, {});
  }

  findOneProduct(id: number) {
    return this.productClient.send({ cmd: 'findOneProduct' }, id);
  }

  updateProduct(id: number, productData: any) {
    return this.productClient.send(
      { cmd: 'updateProduct' },
      { id, productData },
    );
  }

  deleteProduct(id: number) {
    return this.productClient.send({ cmd: 'deleteProduct' }, id);
  }

  createUser(userData: any) {
    return this.userClient.send({ cmd: 'createUser' }, userData);
  }

  findAllUsers(): Observable<any> {
    return this.userClient.send({ cmd: 'findAllUsers' }, {});
  }

  findOneUser(id: number) {
    return this.userClient.send({ cmd: 'findOneUser' }, id);
  }

  updateUser(id: number, userData: any) {
    return this.userClient.send({ cmd: 'updateUser' }, { id, userData });
  }

  deleteUser(id: number) {
    return this.userClient.send({ cmd: 'deleteUser' }, id);
  }
}
