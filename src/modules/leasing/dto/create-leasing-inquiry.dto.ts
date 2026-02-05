import { IsString, IsNotEmpty, IsOptional, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateLeasingInquiryDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+1234567890' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'I am interested in leasing...', required: false })
  @IsString()
  @IsOptional()
  additionalMessage?: string;

  @ApiProperty({ example: '1500-2000 sq ft', required: false })
  @IsString()
  @IsOptional()
  requiredSquareFeet?: string;

  // projectId removed – no longer stored on leasing inquiries
}
