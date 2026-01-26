import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus } from '../../../entities/project.entity';

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

  @ApiProperty({ enum: ProjectStatus, required: false })
  @IsEnum(ProjectStatus)
  @IsOptional()
  status?: ProjectStatus;

  @ApiProperty({ example: 'Giga City, Islamabad', required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ example: ['/images/project1.jpg'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  details?: any;
}
