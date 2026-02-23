import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'giga-mall-wtc' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Giga Mall WTC' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'World Trade Center', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'Commercial', required: false })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ example: 'Giga City, Islamabad', required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ example: ['/images/project1.jpg'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @ApiProperty({ example: 'https://example.com/project', required: false })
  @IsString()
  @IsOptional()
  linkUrl?: string;
}
