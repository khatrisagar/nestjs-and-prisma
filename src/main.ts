import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // it is used to make a strict validation based fields in dto
      whitelist: true,
    }),
  );
  await app.listen(9999);
}
bootstrap();
