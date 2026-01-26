import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { StoresService } from './stores.service';

@ApiTags('Stores')
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get()
  @ApiOperation({ summary: 'Get all stores' })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'subcategory', required: false })
  findAll(
    @Query('category') category?: string,
    @Query('subcategory') subcategory?: string,
  ) {
    return this.storesService.findAll(category, subcategory);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get store by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.storesService.findBySlug(slug);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get store by ID' })
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }
}
