import { DataSource } from 'typeorm';
import { Entertainment } from '../../entities/entertainment.entity';
import { Floor } from '../../entities/floor.entity';

export async function seedEntertainment(
  dataSource: DataSource,
  floorsMap: Record<string, Floor>,
): Promise<void> {
  const entertainmentRepository = dataSource.getRepository(Entertainment);

  const samples: Partial<Entertainment>[] = [
    {
      slug: 'cinepax',
      name: 'Cinepax Cinema',
      description:
        'Experience the latest blockbusters in luxury at Cinepax Cinema. State-of-the-art screens, premium sound systems, and comfortable seating make every movie experience unforgettable.',
      logo: '/logo/CinepaxLogo.png',
      backgroundImage: '/Cinepax/c3.jpg',
      category: 'Cinema',
      contact: {
        phone: '+971-50-501-8599',
        email: 'info@cinepax.com',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 25, y: 40 },
      hasOffers: true,
    },
    {
      slug: 'bowling-alley',
      name: 'Bowling Alley',
      description:
        'Strike up some fun at our modern bowling alley! Perfect for families, friends, and corporate events. Enjoy state-of-the-art lanes, scoring systems, and a vibrant atmosphere.',
      logo: '/logo/Round3BowlingAlleyLogo.png',
      backgroundImage: '/Entertain/bowling 3.jpg',
      category: 'Sports & Recreation',
      contact: {
        phone: '+971-50-501-8599',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 30, y: 45 },
    },
    {
      slug: 'vi-rides',
      name: 'VI Rides Arcade',
      description:
        'Get ready for an adrenaline rush at VI Rides Arcade! Featuring the latest arcade games, simulators, and interactive experiences for all ages.',
      logo: '/logo/Virides.jpg',
      backgroundImage: '/Entertain/VI Rides Horizontal.jpg',
      category: 'Arcade & Gaming',
      contact: {
        phone: '+971-50-501-8599',
      },
      floor: floorsMap['1st'],
      floorId: floorsMap['1st']?.id,
      mapPosition: { x: 50, y: 60 },
    },
    {
      slug: 'vr-kings',
      name: 'VR Kings',
      description:
        'Step into the future of entertainment at VR Kings! Immerse yourself in virtual reality experiences, from thrilling adventures to creative simulations.',
      logo: '/logo/VRKingsLogo.png',
      backgroundImage: '/Entertain/VR Kings Horizontal.jpg',
      category: 'Arcade & Gaming',
      contact: {
        phone: '+971-50-501-8599',
      },
      floor: floorsMap['1st'],
      floorId: floorsMap['1st']?.id,
      mapPosition: { x: 55, y: 65 },
    },
    {
      slug: 'funcity',
      name: 'Funcity',
      description:
        'The ultimate family entertainment destination! Funcity offers a wide range of activities including rides, games, and attractions designed for the whole family.',
      logo: '/logo/FunCityLogo.png',
      backgroundImage: '/Entertain/Funcity Horizontal.jpg',
      category: 'Family Entertainment',
      contact: {
        phone: '+971-50-501-8599',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 40, y: 50 },
    },
    {
      slug: 'spacecraft',
      name: 'SpaceCraft',
      description:
        'Embark on a cinematic journey at SpaceCraft! Premium movie experience with cutting-edge technology, luxury seating, and an immersive atmosphere.',
      logo: '/logo/SpaceCraftLogo.png',
      backgroundImage: '/Entertain/SpaceCraft Horizontal.jpg',
      category: 'Cinema',
      contact: {
        phone: '+971-50-501-8599',
      },
      floor: floorsMap['1st'],
      floorId: floorsMap['1st']?.id,
      mapPosition: { x: 60, y: 70 },
    },
    {
      slug: 'fun-express-train',
      name: 'Fun Express Train',
      description:
        'All aboard the Fun Express! Enjoy a delightful train ride through the mall, perfect for families and children. A fun and memorable experience for visitors of all ages.',
      logo: '/logo/FunExpressTrainLogo.png',
      backgroundImage: '/Entertain/train web.jpg',
      category: 'Family Entertainment',
      contact: {
        phone: '+971-50-501-8600',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 65, y: 75 },
    },
  ];

  for (const data of samples) {
    const existing = await entertainmentRepository.findOne({
      where: { slug: data.slug! },
    });
    if (!existing) {
      const entertainment = entertainmentRepository.create(data);
      await entertainmentRepository.save(entertainment);
      console.log(`Created entertainment: ${entertainment.name}`);
    } else {
      console.log(`Entertainment ${data.slug} already exists`);
    }
  }
}

