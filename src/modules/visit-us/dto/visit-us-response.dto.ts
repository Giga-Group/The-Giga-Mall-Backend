import { ApiProperty } from '@nestjs/swagger';

class FloorResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  floorName: string;
}

export class VisitUsResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ nullable: true })
  backgroundImage: string | null;

  @ApiProperty({ nullable: true })
  mobileViewImage: string | null;

  @ApiProperty({ nullable: true })
  contact: {
    phone?: string;
    email?: string;
  } | null;

  @ApiProperty({ type: FloorResponseDto, nullable: true })
  floor: FloorResponseDto | null;

  @ApiProperty({ nullable: true })
  floorId: number | null;

  @ApiProperty({ nullable: true })
  mapPosition: {
    x: number;
    y: number;
  } | null;

  @ApiProperty()
  acceptsGiftCard: boolean;

  @ApiProperty({ nullable: true })
  category: string | null;

  @ApiProperty({ nullable: true })
  subcategory: string | null;

  @ApiProperty()
  isTopPick: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
