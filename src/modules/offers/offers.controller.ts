import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { OffersService } from './offers.service';

@ApiTags('Offers')
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all offers' })
  @ApiQuery({
    name: 'type',
    required: false,
    description:
      'Filter by offer type (e.g., fashion, beauty, dining, electronics, jewelry, home)',
  })
  findAll(@Query('type') type?: string) {
    return this.offersService.findAll(type);
  }
}

