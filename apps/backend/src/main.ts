import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ProjectValidationPipe } from '~/pipes/pipes.validation';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const env = new ConfigService();

  const config = new DocumentBuilder()
    .setTitle('Testing API')
    .setDescription('API description')
    .setVersion(env.get('APP_VERSION')!)
    .build();

  app.useGlobalPipes(new ProjectValidationPipe());

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*',
    exposedHeaders: ['x-total', 'x-count'],
  });

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3002);
}
bootstrap();
