import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Filter by status (Now Showing / Coming Soon)',
  })
  findAll(@Query('status') status?: string) {
    return this.moviesService.findAll(status);
  }
}

