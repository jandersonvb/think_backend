import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe is a built-in pipe provided by Nest.js. 
  //It is used to transform the payload and validate it against the DTO class.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  await app.listen(3000);
}
bootstrap();
