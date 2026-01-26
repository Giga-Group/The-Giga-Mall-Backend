import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { DineService } from './dine.service';

@ApiTags('Dine')
@Controller('dine')
export class DineController {
  constructor(private readonly dineService: DineService) {}

  @Get()
  @ApiOperation({ summary: 'Get all restaurants' })
  @ApiQuery({ name: 'category', required: false })
  findAll(@Query('category') category?: string) {
    return this.dineService.findAll(category);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get restaurant by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.dineService.findBySlug(slug);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get restaurant by ID' })
  findOne(@Param('id') id: string) {
    return this.dineService.findOne(id);
  }
}
