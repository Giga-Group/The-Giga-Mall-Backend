import { PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InquiryStatus } from '../../../entities/leasing-inquiry.entity';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty({ enum: InquiryStatus, required: false })
  @IsEnum(InquiryStatus)
  @IsOptional()
  status?: InquiryStatus;
}
