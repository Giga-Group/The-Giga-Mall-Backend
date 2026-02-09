import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { MallMapService } from './mall-map.service';
import { MallMapResponseDto } from './dto/mall-map-response.dto';

@ApiTags('Mall Map')
@Controller('mall-map')
export class MallMapController {
  constructor(private readonly mallMapService: MallMapService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get mall map SVG by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the uploaded SVG map',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the SVG map data with floor information',
    type: MallMapResponseDto,
  })
  @ApiResponse({ status: 404, description: 'SVG map not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mallMapService.findOne(id);
  }
}
