import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignore et supprime les propriétés qui n'existent pas
      forbidNonWhitelisted: true, //400 si une propriété n'existe pas
      transform: true, // object are instance of class type in controller. without, object is just object
    }),
  );
  await app.listen(3000);
}
bootstrap();
