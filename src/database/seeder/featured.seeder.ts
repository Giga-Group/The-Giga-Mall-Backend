import { DataSource } from 'typeorm';
import { FeaturedItem } from '../../entities/featured-item.entity';

export async function seedFeatured(
  dataSource: DataSource,
): Promise<void> {
  const featuredRepository = dataSource.getRepository(FeaturedItem);

  const samples: Partial<FeaturedItem>[] = [
    {
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Featured/Projects/p5.jpg',
      name: 'GoldCrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
    {
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Featured/Projects/p3.jpg',
      name: 'Goldcrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
    {
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Featured/Projects/p6.jpg',
      name: 'GoldCrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
    {
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Featured/Projects/p11.jpg',
      name: 'GoldCrest View',
      description: 'Luxury Lifestyle Premium Location',
      url: 'https://www.gigagroup.com/project-single/1',
    },
  ];

  for (const data of samples) {
    // Check if featured item already exists by name and url combination
    const existing = await featuredRepository.findOne({ 
      where: { name: data.name, url: data.url } 
    });
    if (!existing) {
      const featured = featuredRepository.create(data);
      await featuredRepository.save(featured);
      console.log(`Created featured item: ${featured.name}`);
    } else {
      console.log(`Featured item already exists: ${data.name}`);
    }
  }
}
