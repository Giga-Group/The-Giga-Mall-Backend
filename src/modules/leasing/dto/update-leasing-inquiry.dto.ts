import { PartialType } from '@nestjs/swagger';
import { CreateLeasingInquiryDto } from './create-leasing-inquiry.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InquiryStatus } from '../../../entities/leasing-inquiry.entity';

export class UpdateLeasingInquiryDto extends PartialType(
  CreateLeasingInquiryDto,
) {
  @ApiProperty({ enum: InquiryStatus, required: false })
  @IsEnum(InquiryStatus)
  @IsOptional()
  status?: InquiryStatus;
}
