import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @ApiProperty({ example: 'alkaram' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Alkaram' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'A major Pakistani fashion brand...' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: '/logo/alkaram.jpg', required: false })
  @IsString()
  @IsOptional()
  logo?: string;

  @ApiProperty({ example: '/shops/alkaram.jpg', required: false })
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

  @ApiProperty({ example: 'Fashion', required: false })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ example: 'Multi-Brand Fashion', required: false })
  @IsString()
  @IsOptional()
  subcategory?: string;
}
