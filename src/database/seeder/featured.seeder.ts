import { DataSource } from 'typeorm';
import { FeaturedItem } from '../../entities/featured-item.entity';

export async function seedFeatured(
  dataSource: DataSource,
): Promise<void> {
  const featuredRepository = dataSource.getRepository(FeaturedItem);

  const samples: Partial<FeaturedItem>[] = [
    {
      image: '/Featured/Projects/p5.jpg',
      name: 'GoldCrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
    {
      image: '/Featured/Projects/p3.jpg',
      name: 'Goldcrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
    {
      image: '/Featured/Projects/p6.jpg',
      name: 'GoldCrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
    {
      image: '/Featured/Projects/p11.jpg',
      name: 'GoldCrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
  ];

  for (const data of samples) {
    const existing = await featuredRepository.findOne({
      where: { image: data.image! },
    });
    if (!existing) {
      const featured = featuredRepository.create(data);
      await featuredRepository.save(featured);
      console.log(`Created featured item: ${featured.name}`);
    } else {
      console.log(`Featured item with image ${data.image} already exists`);
    }
  }
}
