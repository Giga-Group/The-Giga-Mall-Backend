import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { EntertainmentService } from './entertainment.service';

@ApiTags('Entertainment')
@Controller('entertainment')
export class EntertainmentController {
  constructor(
    private readonly entertainmentService: EntertainmentService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all entertainment venues' })
  @ApiQuery({ name: 'category', required: false })
  findAll(@Query('category') category?: string) {
    return this.entertainmentService.findAll(category);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get entertainment venue by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.entertainmentService.findBySlug(slug);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get entertainment venue by ID' })
  findOne(@Param('id') id: string) {
    return this.entertainmentService.findOne(id);
  }
}
