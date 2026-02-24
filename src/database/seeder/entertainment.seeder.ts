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
      name: 'Cinepax',
      description:
        'Experience the latest blockbusters in luxury at Cinepax Cinema. State-of-the-art screens, premium sound systems, and comfortable seating make every movie experience unforgettable.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/CinepaxLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Cinepax/c1.jpg',
      mobileViewImage: null,
      category: 'Cinema',
      contact: {
        phone: '+971-50-501-8599',
        email: 'info@cinepax.com',
      },
      floor: floorsMap['2nd'],
      floorId: floorsMap['2nd']?.id,
      mapPosition: { x: 25, y: 40 },
      hasOffers: true,
    },
    {
      slug: 'bowling-alley',
      name: 'Round 3 Bowling Alley',
      description:
        'Strike up some fun at our modern bowling alley! Perfect for families, friends, and corporate events. Enjoy state-of-the-art lanes, scoring systems, and a vibrant atmosphere.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/Round3BowlingAlleyLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/bowling%203.jpg',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/bowling%20mobile.jpg',
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
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/Virides.jpg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/VI%20Rides%20Horizontal.jpg',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/VI%20Rides%20mobile.jpg',
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
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/VRKingsLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/VR%20Kings%20Horizontal.jpg',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/VR%20Kings%20mobile.jpg',
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
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/FunCityLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/Funcity%20Horizontal.jpg',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/Funcity%20mobile.jpg',
      category: 'Family Entertainment',
      contact: {
        phone: '+971-50-501-8599',
      },
      floor: floorsMap['2nd'],
      floorId: floorsMap['2nd']?.id,
      mapPosition: { x: 40, y: 50 },
    },
    {
      slug: 'spacecraft',
      name: 'SpaceCraft',
      description:
        'Embark on a cinematic journey at SpaceCraft! Premium movie experience with cutting-edge technology, luxury seating, and an immersive atmosphere.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/SpaceCraftLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/SpaceCraft%20Horizontal.jpg',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/SpaceCraft%20mobile.jpg',
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
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/FunExpressTrainLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/train%20web.jpg',
      mobileViewImage: null,
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
    // Check if entertainment already exists by slug
    const existing = await entertainmentRepository.findOne({ where: { slug: data.slug } });
    if (!existing) {
      const entertainment = entertainmentRepository.create(data);
      await entertainmentRepository.save(entertainment);
      console.log(`Created entertainment: ${entertainment.name}`);
    } else {
      console.log(`Entertainment already exists: ${data.slug}`);
    }
  }
}

