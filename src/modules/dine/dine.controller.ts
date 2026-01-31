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
  @ApiQuery({ name: 'isTopPick', required: false, type: Boolean })
  findAll(
    @Query('category') category?: string,
    @Query('isTopPick') isTopPick?: string,
  ) {
    const isTopPickBool =
      isTopPick !== undefined ? isTopPick === 'true' : undefined;
    return this.dineService.findAll(category, isTopPickBool);
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
