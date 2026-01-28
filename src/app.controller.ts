import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'API health check' })
  getHello() {
    return this.appService.getHello();
  }

  @Public()
  @Get('test')
  @ApiOperation({ summary: 'Test endpoint' })
  getTest() {
    return { message: 'hello' };
  }
}