import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();
const PORT = 3002;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: { port: PORT },
  });
  await app.listen();
  logger.log('Microservice run on port ' + PORT);
}
bootstrap();
