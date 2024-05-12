import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('orders')
  createOrder(@Body() orderData: any) {
    return this.appService.createOrder(orderData);
  }

  @Get('orders')
  findAllOrders() {
    return this.appService.findAllOrders();
  }

  @Get('orders/:id')
  findOneOrder(@Param('id') id: string) {
    return this.appService.findOneOrder(+id);
  }

  @Put('orders/:id')
  updateOrder(@Param('id') id: string, @Body() orderData: any) {
    return this.appService.updateOrder(+id, orderData);
  }

  @Delete('orders/:id')
  deleteOrder(@Param('id') id: string) {
    return this.appService.deleteOrder(+id);
  }

  @Post('products')
  createProduct(@Body() productData: any) {
    return this.appService.createProduct(productData);
  }

  @Get('products')
  findAllProducts(): Observable<any> {
    return this.appService.findAllProducts();
  }

  @Get('products/:id')
  findOneProduct(@Param('id') id: string) {
    return this.appService.findOneProduct(+id);
  }

  @Put('products/:id')
  updateProduct(@Param('id') id: string, @Body() productData: any) {
    return this.appService.updateProduct(+id, productData);
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string) {
    return this.appService.deleteProduct(+id);
  }

  @Post('users')
  createUser(@Body() userData: any) {
    return this.appService.createUser(userData);
  }

  @Get('users')
  findAllUsers(): Observable<any> {
    return this.appService.findAllUsers();
  }

  @Get('users/:id')
  findOneUser(@Param('id') id: string) {
    return this.appService.findOneUser(+id);
  }

  @Put('users/:id')
  updateUser(@Param('id') id: string, @Body() userData: any) {
    return this.appService.updateUser(+id, userData);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(+id);
  }
}
