import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
  ];
  private logger: any;
  constructor() {
    this.logger = new Logger('UserService');
  }

  @MessagePattern({ cmd: 'createUser' })
  createUser(userData: any) {
    this.logger.log('createUser has call');
    const newUser = { ...userData, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  @MessagePattern({ cmd: 'findAllUsers' })
  findAllUsers() {
    this.logger.log('findAllUser has call');
    return this.users;
  }

  @MessagePattern({ cmd: 'findOneUser' })
  findOneUser(id: number) {
    this.logger.log('findOneUser has call');
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return this.users[index];
    } else {
      return 'User not found';
    }
  }

  @MessagePattern({ cmd: 'updateUser' })
  updateUser(data: { id: number; userData: any }) {
    const { id, userData } = data;
    const index = this.users.findIndex((user) => user.id === id);

    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...userData };
      return this.users[index];
    } else {
      return 'User not found';
    }
  }

  @MessagePattern({ cmd: 'deleteUser' })
  deleteUser(id: number) {
    this.logger.log('deleteUser has call');
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return 'User deleted successfully';
  }
}
