import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  try {
    console.log('Initializing NestJS application...');
    const app = await NestFactory.create(AppModule);

    // Enable CORS - allow all origins for development
    app.enableCors({
      origin: true, // Allow all origins
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Name'],
    });

    // Global prefix
    app.setGlobalPrefix('api');

    // Global validation pipe
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    // Global exception filter
    app.useGlobalFilters(new HttpExceptionFilter());

    // Swagger documentation
    const config = new DocumentBuilder()
      .setTitle('The Giga Mall API')
      .setDescription(
        'Backend API for The Giga Mall - NestJS with TypeORM and PostgreSQL',
      )
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    const port = process.env.PORT || 3001;
    const host = '0.0.0.0'; // Bind to all interfaces (required for Railway/Docker)
    
    await app.listen(port, host);
    console.log('==========================================');
    console.log(`✓ Application is running on: http://${host}:${port}`);
    console.log(`✓ Swagger documentation: http://${host}:${port}/api/docs`);
    console.log(`✓ Health check: http://${host}:${port}/api/health`);
    console.log('==========================================');
  } catch (error) {
    console.error('Failed to start application:', error);
    process.exit(1);
  }
}

bootstrap();
