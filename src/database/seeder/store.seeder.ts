import { DataSource } from 'typeorm';
import { Store } from '../../entities/store.entity';
import { Floor } from '../../entities/floor.entity';

export async function seedStores(
  dataSource: DataSource,
  floorsMap: Record<string, Floor>,
): Promise<void> {
  const storeRepository = dataSource.getRepository(Store);

  const sampleStores: Partial<Store>[] = [
    {
      slug: 'alkaram',
      name: 'Alkaram',
      description:
        'A major Pakistani fashion and textile brand known for its wide range of clothing and fabric products for men, women, and children. It blends contemporary designs with traditional elements in ready-to-wear, unstitched collections, and seasonal fabrics, appealing to diverse style needs with vibrant prints and quality materials.',
      logo: '/logo/alkaram logo.jpg',
      backgroundImage: '/shops/alkaram.jpg',
      category: 'Fashion',
      subcategory: 'Multi-Brand Fashion',
      contact: { phone: '+971-50-501-8600' },
      floor: floorsMap['1st'],
      floorId: floorsMap['1st']?.id,
      mapPosition: { x: 30, y: 40 },
    },
    {
      slug: 'almas',
      name: 'Almas',
      description:
        "A fashion brand in Pakistan offering stylish clothing for everyday and casual wear. It's generally considered a trendy, accessible retail label with a range of apparel options for the modern shopper.",
      logo: '/logo/almas logo.png',
      backgroundImage: '/shops/almas.jpeg',
      category: 'Fashion',
      subcategory: "Women's Fashion",
      contact: { phone: '+971-50-501-8601' },
      floor: floorsMap['1st'],
      floorId: floorsMap['1st']?.id,
      mapPosition: { x: 35, y: 45 },
    },
    {
      slug: 'batik-studio',
      name: 'Batik Studio',
      description:
        'A fashion brand inspired by traditional batik artistry, combining cultural textile techniques with modern clothing designs to produce unique prints and patterns for contemporary wardrobes.',
      logo: '/logo/batik studio.jpg',
      backgroundImage: '/shops/batik-studio.jpg',
      category: 'Fashion',
      subcategory: 'Traditional & Ethnic Wear',
      contact: { phone: '+971-50-501-8603' },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 25, y: 35 },
    },
    {
      slug: 'miniso',
      name: 'Miniso',
      description:
        'A global lifestyle retailer known for affordable, creatively designed everyday products including home goods, cosmetics, stationery, toys, and accessories with a fun, minimalist style.',
      logo: '/logo/miniso logo.jpg',
      backgroundImage: '/shops/miniso.jpeg',
      category: 'Home & Lifestyle',
      subcategory: '',
      contact: { phone: '+971-50-501-8610' },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 75, y: 45 },
    },
    {
      slug: 'babys-day-out',
      name: 'Babys Day Out',
      description:
        "A kids' store offering toys, games, and engaging activities designed to entertain and delight children of all ages.",
      logo: '/logo/BabysDayOutLogo.png',
      backgroundImage: '/shops/Babysdayoutweb.JPG',
      category: 'Toys',
      subcategory: '',
      contact: { phone: '+971-50-501-8610' },
      floor: floorsMap['LG'],
      floorId: floorsMap['LG']?.id,
      mapPosition: { x: 40, y: 50 },
    },
  ];

  for (const storeData of sampleStores) {
    const existing = await storeRepository.findOne({
      where: { slug: storeData.slug! },
    });
    if (!existing) {
      const store = storeRepository.create(storeData);
      await storeRepository.save(store);
      console.log(`Created store: ${store.name}`);
    } else {
      console.log(`Store ${storeData.slug} already exists`);
    }
  }
}

