import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'The Giga Mall API is running',
      version: '1.0.0',
      documentation: '/api/docs',
    };
  }
}
