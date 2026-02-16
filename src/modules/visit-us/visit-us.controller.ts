import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { VisitUsService } from './visit-us.service';
import { VisitUsResponseDto } from './dto/visit-us-response.dto';

@ApiTags('Visit Us')
@Controller('visit-us')
export class VisitUsController {
  constructor(private readonly visitUsService: VisitUsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all visit-us locations' })
  @ApiResponse({
    status: 200,
    description: 'Returns all visit-us locations',
    type: [VisitUsResponseDto],
  })
  findAll() {
    return this.visitUsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get visit-us location by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the visit-us location',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the visit-us location',
    type: VisitUsResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Visit-us location not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.visitUsService.findOne(id);
  }
}
