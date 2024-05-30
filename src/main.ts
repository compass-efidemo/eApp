import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port =
    process.env.PORT !== undefined ? parseInt(process.env.PORT, 10) : 3000;

  const config = new DocumentBuilder()
    .setTitle('eApp')
    .setDescription('API for eApp')
    .setVersion('1.0')
    .addTag('eapp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
