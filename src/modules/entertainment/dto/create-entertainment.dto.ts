import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEntertainmentDto {
  @ApiProperty({ example: 'cinepax' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Cinepax Cinema' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Experience the latest blockbusters...' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: '/logo/CinepaxLogo.png', required: false })
  @IsString()
  @IsOptional()
  logo?: string;

  @ApiProperty({ example: '/Cinepax/c3.jpg', required: false })
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

  @ApiProperty({ example: 'Cinema', required: false })
  @IsString()
  @IsOptional()
  category?: string;
}
