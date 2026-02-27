import { DataSource } from 'typeorm';
import { UploadedSvg } from '../../entities/uploaded-svg.entity';
import { Floor } from '../../entities/floor.entity';

export async function seedUploadedSvgs(
  dataSource: DataSource,
  floorsMap: Record<string, Floor>,
): Promise<void> {
  const uploadedSvgRepository = dataSource.getRepository(UploadedSvg);

  // Mapping environment variable names to floor names and SVG URLs
  const svgData = [
    {
      floorName: 'LG',
      svgUrl:
        'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/svgs/LOWER%20GROUND%20FLOOR%20PLAN.svg',
    },
    {
      floorName: 'Ground',
      svgUrl:
        'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/svgs/UP%20DN%20GROUND%20FLOOR%20PLAN.svg',
    },
    {
      floorName: '1st',
      svgUrl:
        'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/svgs/KIOSK%2019D%20F1%20KIOSK%2019E%20F1%201ST%20FLOOR%20PLAN.svg',
    },
    {
      floorName: 'Mezzanine',
      svgUrl:
        'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/svgs/100%20Sft%20MEZZANINE%20FLOOR%20PLAN%20crop.svg',
    },
    {
      floorName: '2nd',
      svgUrl:
        'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/svgs/6C%20F2%20SHOP%2021F2%202ND%20FLOOR%20PLAN.svg',
    },
    {
      floorName: '2A',
      svgUrl:
        'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/svgs/02%20A%20FLOOR%20PLAN.svg',
    },
  ];

  for (const data of svgData) {
    const floor = floorsMap[data.floorName];
    if (!floor) {
      console.warn(`Floor "${data.floorName}" not found, skipping SVG`);
      continue;
    }

    // Check if SVG already exists for this floor
    const existingSvg = await uploadedSvgRepository.findOne({
      where: { floorId: floor.id },
    });

    if (existingSvg) {
      console.log(`SVG for floor "${data.floorName}" already exists, skipping`);
      continue;
    }

    const uploadedSvg = uploadedSvgRepository.create({
      floorId: floor.id,
      svgUrl: data.svgUrl,
    });

    await uploadedSvgRepository.save(uploadedSvg);
    console.log(`Created SVG for floor: ${data.floorName}`);
  }
}
