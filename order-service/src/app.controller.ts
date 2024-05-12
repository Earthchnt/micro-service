import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private orders = [
    { id: 1, productId: 1, quantity: 1 },
    { id: 2, productId: 2, quantity: 1 },
  ];
  private logger: any;
  constructor() {
    this.logger = new Logger('OrderService');
  }

  @MessagePattern({ cmd: 'createOrder' })
  createOrder(orderData: any) {
    this.logger.log('createOrder has call');
    const newOrder = { ...orderData, id: this.orders.length + 1 };
    this.orders.push(newOrder);
    return newOrder;
  }

  @MessagePattern({ cmd: 'findAllOrder' })
  findAllOrders() {
    this.logger.log('findAllOrders has call result : ' + this.orders);
    return this.orders;
  }

  @MessagePattern({ cmd: 'findOneOrder' })
  findOneOrder(id: number) {
    this.logger.log('findOneOrder has call');
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      return this.orders[index];
    } else {
      return 'Order not found';
    }
  }

  @MessagePattern({ cmd: 'updateOrder' })
  updateOrder(data: { id: number; orderData: any }) {
    const { id, orderData } = data;
    const index = this.orders.findIndex((order) => order.id === id);

    if (index !== -1) {
      this.orders[index] = { ...this.orders[index], ...orderData };
      return this.orders[index];
    } else {
      return 'Order not found';
    }
  }

  @MessagePattern({ cmd: 'deleteOrder' })
  deleteOrder(id: number) {
    this.logger.log('deleteOrder has call');
    const index = this.orders.findIndex((order) => order.id === id);
    this.orders.splice(index, 1);
    return 'Order deleted successfully';
  }
}
