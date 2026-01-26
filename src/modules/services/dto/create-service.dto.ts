import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ example: 'carrefour' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Carrefour' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'A leading global retail chain...' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: '/logo/carrefour.jpeg', required: false })
  @IsString()
  @IsOptional()
  logo?: string;

  @ApiProperty({ example: '/Services/Carrefour.jpg', required: false })
  @IsString()
  @IsOptional()
  backgroundImage?: string;

  @ApiProperty({ required: false })
  @IsObject()
  @IsOptional()
  contact?: {
    phone?: string;
    email?: string;
    location?: string;
  };

  @ApiProperty({ required: false })
  @IsObject()
  @IsOptional()
  location?: {
    level?: string;
    parking?: string;
    mapPosition?: {
      x: number;
      y: number;
    };
  };

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  hasOffers?: boolean;

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  acceptsGiftCard?: boolean;

  @ApiProperty({ example: 'Grocery', required: false })
  @IsString()
  @IsOptional()
  category?: string;
}
