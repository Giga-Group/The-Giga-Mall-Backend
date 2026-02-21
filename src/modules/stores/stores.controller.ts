import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { StoresService } from './stores.service';
import { StoreResponseDto } from './dto/store-response.dto';

@ApiTags('Stores')
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get()
  @ApiOperation({ summary: 'GetStores - Get all stores with pagination' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of stores',
    type: [StoreResponseDto]
  })
  @ApiQuery({ name: 'search', required: false, description: 'Search in name and description' })
  @ApiQuery({ name: 'category', required: false, description: 'Filter by category (Men, Women, Kids, Electronics, Beauty, Jewellery & Watches, Home)' })
  @ApiQuery({ name: 'isTopPick', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of records to return (default: 10)' })
  findAll(
    @Query('search') search?: string,
    @Query('category') category?: string,
    @Query('isTopPick') isTopPick?: string,
    @Query('limit') limit?: string,
  ) {
    const isTopPickBool =
      isTopPick !== undefined ? isTopPick === 'true' : undefined;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    return this.storesService.findAll(
      search,
      category,
      isTopPickBool,
      limitNum,
    );
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get store by slug' })
  @ApiResponse({ 
    status: 200, 
    description: 'Store details',
    type: StoreResponseDto
  })
  @ApiResponse({ status: 404, description: 'Store not found' })
  findBySlug(@Param('slug') slug: string) {
    return this.storesService.findBySlug(slug);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get store by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Store details',
    type: StoreResponseDto
  })
  @ApiResponse({ status: 404, description: 'Store not found' })
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }
}
