import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  const options = new DocumentBuilder().setTitle("Registro de Incidentes")
  .setVersion('1.0')
  .build();

  const doc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, doc);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
