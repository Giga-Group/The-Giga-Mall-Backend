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
    let floor = await floorRepository.findOne({ where: { floorName } });
    if (!floor) {
      floor = floorRepository.create({ floorName });
      floor = await floorRepository.save(floor);
      console.log(`Created floor: ${floorName}`);
    } else {
      console.log(`Floor ${floorName} already exists`);
    }
    floorsMap[floorName] = floor;
  }

  return floorsMap;
}

