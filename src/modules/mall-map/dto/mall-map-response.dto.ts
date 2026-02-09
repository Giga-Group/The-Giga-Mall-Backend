import { ApiProperty } from '@nestjs/swagger';

class FloorResponseDto {
  @ApiProperty({ example: 2 })
  id: number;

  @ApiProperty({ example: 'LG' })
  floorName: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  updatedAt: Date;
}

export class MallMapResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 2 })
  floorId: number;

  @ApiProperty({ type: FloorResponseDto })
  floor: FloorResponseDto;

  @ApiProperty({
    example:
      'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/svgs/LOWER%20GROUND%20FLOOR%20PLAN.svg',
  })
  svgUrl: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  updatedAt: Date;
}
