import { DataSource } from 'typeorm';
import { VisitUs } from '../../entities/visit-us.entity';
import { Floor } from '../../entities/floor.entity';

export async function seedVisitUs(
  dataSource: DataSource,
  floorsMap: Record<string, Floor>,
): Promise<void> {
  const visitUsRepository = dataSource.getRepository(VisitUs);

  const samples: Partial<VisitUs>[] = [
    {
      slug: 'carrefour',
      name: 'Carrefour',
      description:
        'A leading global retail chain offering groceries, fresh produce, household essentials, electronics, and everyday necessities under one roof.',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/Carrefour web.JPG',
      mobileViewImage: null,
      category: 'Grocery',
      contact: {
        phone: '+971-50-501-8610',
      },
      floor: floorsMap['LG'],
      floorId: floorsMap['LG']?.id,
      mapPosition: { x: 30, y: 40 },
      isTopPick: true,
    },
    {
      slug: 'cinepax',
      name: 'Cinepax',
      description:
        'Experience the latest blockbusters in luxury at Cinepax Cinema. State-of-the-art screens, premium sound systems, and comfortable seating make every movie experience unforgettable.',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Cinepax/c1.jpg',
      mobileViewImage: null,
      category: 'Cinema',
      contact: {
        phone: '+971-50-501-8599',
        email: 'info@cinepax.com',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 25, y: 40 },
    },
    {
      slug: 'funcity',
      name: 'Funcity',
      description:
        'The ultimate family entertainment destination! Funcity offers a wide range of activities including rides, games, and attractions designed for the whole family.',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/Funcity%20Horizontal.jpg',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Entertain/Funcity%20mobile.jpg',
      category: 'Family Entertainment',
      contact: {
        phone: '+971-50-501-8599',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 40, y: 50 },
    },
    {
      slug: 'modal-appartment',
      name: 'Modal Appartments',
      description:
        'Explore our model apartments showcasing the finest in residential design and lifestyle. Experience premium living spaces with modern amenities and elegant interiors.',
      backgroundImage: null,
      mobileViewImage: null,
      category: 'Real Estate',
      contact: {
        phone: '+971-50-501-8610',
      },
      floor: floorsMap['2nd'],
      floorId: floorsMap['2nd']?.id,
      mapPosition: { x: 50, y: 60 },
    },
  ];

  for (const data of samples) {
    // Check if visit-us already exists by slug
    const existing = await visitUsRepository.findOne({ where: { slug: data.slug } });
    if (!existing) {
      const visitUs = visitUsRepository.create(data);
      await visitUsRepository.save(visitUs);
      console.log(`Created visit-us: ${visitUs.name}`);
    } else {
      console.log(`Visit-us already exists: ${data.slug}`);
    }
  }
}
