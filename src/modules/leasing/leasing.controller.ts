import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LeasingService } from './leasing.service';
import { CreateLeasingInquiryDto } from './dto/create-leasing-inquiry.dto';

@ApiTags('Leasing')
@Controller('leasing')
export class LeasingController {
  constructor(private readonly leasingService: LeasingService) {}

  @Post('inquiry')
  @ApiOperation({ summary: 'Submit leasing inquiry' })
  @ApiResponse({
    status: 201,
    description: 'Leasing inquiry submitted successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Email already exists or invalid data',
  })
  create(@Body() createLeasingInquiryDto: CreateLeasingInquiryDto) {
    return this.leasingService.create(createLeasingInquiryDto);
  }

  @Get('inquiries')
  @ApiOperation({ summary: 'Get all leasing inquiries' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of all leasing inquiries',
  })
  findAll() {
    return this.leasingService.findAll();
  }
}
