import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignore et supprime les propriétés qui n'existent pas
      forbidNonWhitelisted: true, //400 si une propriété n'existe pas
    }),
  );
  await app.listen(3000);
}
bootstrap();
