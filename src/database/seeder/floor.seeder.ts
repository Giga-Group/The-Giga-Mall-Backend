import { DataSource } from 'typeorm';
import { Floor } from '../../entities/floor.entity';

export async function seedFloors(
  dataSource: DataSource,
): Promise<Record<string, Floor>> {
  const floorRepository = dataSource.getRepository(Floor);

  const floorNames = [
    'Basement 1',
    'LG',
    'Mezzanine',
    'Ground',
    '1st',
    '2nd',
    '2A',
  ];

  const floorsMap: Record<string, Floor> = {};

  for (const floorName of floorNames) {
    const floor = floorRepository.create({ floorName });
    const savedFloor = await floorRepository.save(floor);
    console.log(`Created floor: ${floorName}`);
    floorsMap[floorName] = savedFloor;
  }

  return floorsMap;
}

