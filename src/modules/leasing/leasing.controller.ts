import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LeasingService } from './leasing.service';
import { CreateLeasingInquiryDto } from './dto/create-leasing-inquiry.dto';

@ApiTags('Leasing')
@Controller('leasing')
export class LeasingController {
  constructor(private readonly leasingService: LeasingService) {}

  @Post('inquiry')
  @ApiOperation({ summary: 'Submit leasing inquiry' })
  create(@Body() createLeasingInquiryDto: CreateLeasingInquiryDto) {
    return this.leasingService.create(createLeasingInquiryDto);
  }
}
