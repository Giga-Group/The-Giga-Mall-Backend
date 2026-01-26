import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDineDto {
  @ApiProperty({ example: 'cheezious' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Cheezious' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Delicious cheesy delights...' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: '/logo/cheezious.jpg', required: false })
  @IsString()
  @IsOptional()
  logo?: string;

  @ApiProperty({ example: '/dine/cheezious.jpeg', required: false })
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

  @ApiProperty({ example: 'Fast Food', required: false })
  @IsString()
  @IsOptional()
  category?: string;
}
