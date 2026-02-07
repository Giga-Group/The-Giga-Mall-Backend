import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ServicesService } from './services.service';
import { ServiceResponseDto } from './dto/service-response.dto';

@ApiTags('Services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @ApiOperation({ summary: 'GetServices - Get all services with pagination' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of services',
    type: [ServiceResponseDto]
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
    return this.servicesService.findAll(category, isTopPickBool, limitNum);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get service by slug' })
  @ApiResponse({ 
    status: 200, 
    description: 'Service details',
    type: ServiceResponseDto
  })
  @ApiResponse({ status: 404, description: 'Service not found' })
  findBySlug(@Param('slug') slug: string) {
    return this.servicesService.findBySlug(slug);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get service by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Service details',
    type: ServiceResponseDto
  })
  @ApiResponse({ status: 404, description: 'Service not found' })
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }
}
