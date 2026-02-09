import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { EntertainmentService } from './entertainment.service';
import { EntertainmentResponseDto } from './dto/entertainment-response.dto';

@ApiTags('Entertainment')
@Controller('entertainment')
export class EntertainmentController {
  constructor(
    private readonly entertainmentService: EntertainmentService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'GetEntertainments - Get all entertainment venues with pagination' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of entertainment venues',
    type: [EntertainmentResponseDto]
  })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of records to return (default: 10)' })
  findAll(
    @Query('category') category?: string,
    @Query('limit') limit?: string,
  ) {
    const limitNum = limit ? parseInt(limit, 10) : 10;
    return this.entertainmentService.findAll(category, limitNum);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get entertainment venue by slug' })
  @ApiResponse({ 
    status: 200, 
    description: 'Entertainment venue details',
    type: EntertainmentResponseDto
  })
  @ApiResponse({ status: 404, description: 'Entertainment venue not found' })
  findBySlug(@Param('slug') slug: string) {
    return this.entertainmentService.findBySlug(slug);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get entertainment venue by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Entertainment venue details',
    type: EntertainmentResponseDto
  })
  @ApiResponse({ status: 404, description: 'Entertainment venue not found' })
  findOne(@Param('id') id: string) {
    return this.entertainmentService.findOne(id);
  }
}
