import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FeaturedService } from './featured.service';

@ApiTags('Featured')
@Controller('featured')
export class FeaturedController {
  constructor(private readonly featuredService: FeaturedService) {}

  @Get()
  @ApiOperation({ summary: 'Get all featured items' })
  findAll() {
    return this.featuredService.findAll();
  }
}
