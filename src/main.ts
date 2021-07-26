import { AppModule } from './app/app.module';
import {NestFactory} from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(9000);
}

bootstrap();
