import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { DineService } from './dine.service';
import { DineResponseDto } from './dto/dine-response.dto';

@ApiTags('Dine')
@Controller('dine')
export class DineController {
  constructor(private readonly dineService: DineService) {}

  @Get()
  @ApiOperation({ summary: 'GetDines - Get all restaurants with pagination' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of restaurants',
    type: [DineResponseDto]
  })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'isTopPick', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of records to return (default: 10)' })
  findAll(
    @Query('category') category?: string,
    @Query('isTopPick') isTopPick?: string,
    @Query('limit') limit?: string,
  ) {
    const isTopPickBool =
      isTopPick !== undefined ? isTopPick === 'true' : undefined;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    return this.dineService.findAll(category, isTopPickBool, limitNum);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get restaurant by slug' })
  @ApiResponse({ 
    status: 200, 
    description: 'Restaurant details',
    type: DineResponseDto
  })
  @ApiResponse({ status: 404, description: 'Restaurant not found' })
  findBySlug(@Param('slug') slug: string) {
    return this.dineService.findBySlug(slug);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get restaurant by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Restaurant details',
    type: DineResponseDto
  })
  @ApiResponse({ status: 404, description: 'Restaurant not found' })
  findOne(@Param('id') id: string) {
    return this.dineService.findOne(id);
  }
}
