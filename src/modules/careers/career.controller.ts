import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CareerService } from './career.service';
import { ApplyJobDto } from './dto/apply-job.dto';

@ApiTags('Careers')
@Controller('careers')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Get()
  @ApiOperation({ summary: 'Get all available jobs' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of jobs with id, jobTitle, and description',
  })
  findAll() {
    return this.careerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get job by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns complete job data',
  })
  @ApiResponse({ status: 404, description: 'Job not found' })
  findOne(@Param('id') id: string) {
    return this.careerService.findOne(id);
  }

  @Post(':id/apply')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Apply for a job' })
  @ApiResponse({
    status: 201,
    description: 'Application submitted successfully',
  })
  @ApiResponse({ status: 404, description: 'Job not found' })
  @ApiResponse({ status: 400, description: 'Job is closed or invalid data' })
  apply(@Param('id') id: string, @Body() applyJobDto: ApplyJobDto) {
    return this.careerService.apply(id, applyJobDto);
  }
}
