import { ApiProperty } from '@nestjs/swagger';

class FloorResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ground Floor' })
  floorName: string;
}

class ContactResponseDto {
  @ApiProperty({ example: '+92-300-1234567', required: false })
  phone?: string;

  @ApiProperty({ example: 'store@example.com', required: false })
  email?: string;
}

class MapPositionResponseDto {
  @ApiProperty({ example: 100 })
  x: number;

  @ApiProperty({ example: 200 })
  y: number;
}

export class StoreResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'alkaram' })
  slug: string;

  @ApiProperty({ example: 'Alkaram' })
  name: string;

  @ApiProperty({ example: 'Premium clothing store offering latest fashion trends' })
  description: string;

  @ApiProperty({ example: '/logo/alkaram.jpg', required: false, nullable: true })
  logo: string | null;

  @ApiProperty({ example: '/shops/alkaram-bg.jpg', required: false, nullable: true })
  backgroundImage: string | null;

  @ApiProperty({ example: '/shops/alkaram-mobile.jpg', required: false, nullable: true })
  mobileViewImage: string | null;

  @ApiProperty({ type: ContactResponseDto, required: false, nullable: true })
  contact: ContactResponseDto | null;

  @ApiProperty({ type: FloorResponseDto, required: false, nullable: true })
  floor: FloorResponseDto | null;

  @ApiProperty({ example: 1, required: false, nullable: true })
  floorId: number | null;

  @ApiProperty({ type: MapPositionResponseDto, required: false, nullable: true })
  mapPosition: MapPositionResponseDto | null;

  @ApiProperty({ example: true })
  hasOffers: boolean;

  @ApiProperty({ example: false })
  acceptsGiftCard: boolean;

  @ApiProperty({ example: ['Men', 'Women'], required: false, nullable: true, type: [String] })
  categories: string[] | null;

  @ApiProperty({ example: true })
  isTopPick: boolean;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  updatedAt: Date;
}
