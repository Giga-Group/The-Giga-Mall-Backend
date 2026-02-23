import { DataSource } from 'typeorm';
import { Project } from '../../entities/project.entity';

export async function seedProjects(dataSource: DataSource): Promise<void> {
  const projectRepository = dataSource.getRepository(Project);

  // Base URL for images
  const baseImageUrl = 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main';

  // Ongoing projects (isCompleted = false)
  const ongoingProjects: Partial<Project>[] = [
    {
      slug: 'gold-crest-views',
      title: 'Gold Crest Views',
      description: 'Luxury Residential Complex',
      images: [`${baseImageUrl}/images/projects/gcv.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/1',
    },
    {
      slug: 'gold-crest-commercial',
      title: 'Gold Crest Commercial',
      description: 'Premium Commercial Complex',
      images: [`${baseImageUrl}/images/projects/gcc.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/2',
    },
    {
      slug: 'giga-mall-extension',
      title: 'Giga Mall Extension',
      description: 'Mixed-Use Development',
      images: [`${baseImageUrl}/images/projects/gme.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/3',
    },
    {
      slug: 'giga-business-complex',
      title: 'Giga Business Complex',
      description: 'Corporate Hub',
      images: [`${baseImageUrl}/images/projects/gbc-grid.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/4',
    },
    {
      slug: 'central-palace-residence',
      title: 'Central Palace Residence',
      description: 'Ultra-Luxury Living',
      images: [`${baseImageUrl}/images/projects/cpr-grid.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/5',
    },
    {
      slug: 'giga-mall-wtc',
      title: 'Giga Mall WTC',
      description: 'World Trade Center',
      images: [`${baseImageUrl}/images/projects/wtc-grid.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/6',
    },
    {
      slug: 'gold-crest-high-life-I',
      title: 'Goldcrest Highlife I',
      description: 'Modern Residential Living',
      images: [`${baseImageUrl}/images/projects/gc-highlife-grid-1.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/8',
    },
    {
      slug: 'gold-crest-high-life-II-and-III',
      title: 'Goldcrest Highlife II & III',
      description: 'Modern Residential Living',
      images: [`${baseImageUrl}/images/projects/gc-highlife-grid-2-3.jpg`],
      isCompleted: false,
      linkUrl: 'https://www.gigagroup.com/project-single/9',
    },
  ];

  // Completed projects (isCompleted = true)
  const completedProjects: Partial<Project>[] = [
    {
      slug: 'goldcrest-views-1-dubai',
      title: 'Goldcrest Views 1, Dubai',
      description:
        'Goldcrest Views 1 is a 40-storey residential tower in JLT Cluster V, developed by Giga Group. It offers 376 ready units, from studios to penthouses, with top-tier amenities like a rooftop pool, gym, sauna, and sports bar. Located near metro stations, Dubai Marina, and Palm Jumeirah, it promises a luxurious yet convenient lifestyle.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/gc-views-1-dubai.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/9',
    },
    {
      slug: 'goldcrest-views-2-dubai',
      title: 'Goldcrest Views 2, Dubai',
      description:
        'Goldcrest Views 2 is a thirty-nine-story tower that offers a variety of freehold apartments and offices located in Jumeirah Lakes Towers, Dubai. The Tower, designed around a rectangular plan, offers a spectacular lakeside and island view from the apartments on all levels. The building has a bold, contemporary style with strong visual elements. The project has been completed and delivered.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/gc-views-2-dubai.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/10',
    },
    {
      slug: 'goldcrest-executive-dubai',
      title: 'Goldcrest Executive, Dubai',
      description:
        'Goldcrest Executive is a 40-storey mixed-use tower in JLT, developed by Giga Group. It features offices on the lower 20 floors and residential studios and 1-bed apartments above. With top amenities like a gym, pool, high-speed elevators, and 24/7 security, it offers modern living and working spaces in Dubais vibrant freehold community.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/gcv-exective-dubai.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/11',
    },
    {
      slug: 'canyon-views-dha-islamabad',
      title: 'Canyon Views, DHA Islamabad',
      description:
        'Giga Group, in collaboration with Emaar, started residential projects spread over an area of 386 acres in DHA Islamabad Phase II Extension. The project is named Emaar Canyon Views, Islamabad. It comprises modern luxury villas and townhouses. The first phase of development has been completed, and villas are successfully handed over to the customers.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/canyon-views.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/12',
    },
    {
      slug: 'crescent-bay-dha-karachi',
      title: 'Crescent Bay, DHA Karachi',
      description:
        'The Group partnered with Dubais Emaar Properties to launch CrescentBay, a groundbreaking 108-acre sea-reclaimed project in DHA Phase VIII, Karachi. This modern development includes high- and mid-rise residential and commercial towers, a shopping center, and a five-star beachfront hotel. Located near the DHA golf course, CrescentBay marks a significant milestone in Pakistans real estate landscape.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/cresent-bay.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/13',
    },
    {
      slug: 'defence-residency-dha-islamabad',
      title: 'Defence Residency, DHA Islamabad',
      description:
        'Defense Residency is a low-rise residential project comprising 2, 3, 4, and 5-room executive apartments located in DHA Phase-Il on the Main G.T. Road in Islamabad. The project includes 17 buildings with over 1,400 apartments. It offers modern amenities and caters to various family setups from middle and upper-class strata.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/defence-resedency.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/14',
    },
    {
      slug: 'giga-boutique-mall-islamabad',
      title: 'Giga Boutique Mall, Islamabad',
      description:
        'Giga Boutique Mall, Islamabads newest, hippest mall! Giga West brings you the first water park of its kind in any mall in the Twin Cities. Located right next to Giga Mall in DHA, it features water slides and entertainment for all ages. Combining modern architecture with a variety of shopping and leisure options, its a landmark development.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/giga-boutique-mall.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/15',
    },
    {
      slug: 'el-cielo-i-and-ii-apartments-islamabad',
      title: 'El Ceilo I and II Apartments Islamabad',
      description:
        'El Cielo is a luxury residential development in DHA II, Islamabad, consisting of two 12-floor towers with 320 apartments. The development includes three categories-premium, premium plus, and executive apartments. It is set to be handed over soon, continuing Gigas tradition of luxurious and secure residential projects.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/elcielo-1-and-2.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/16',
    },
    {
      slug: 'lignum-tower-islamabad',
      title: 'Lignum Tower, Islamabad',
      description:
        'Lignum Tower in DHA Phase 2, Giga City, Islamabad, offers stylish high-rise and terrace apartments designed for modern professionals. Featuring spacious dining rooms, ultra-modern kitchens, airy bedrooms, and luxury bathrooms, it blends elegance with comfort. Amenities include dedicated parking, CCTV security, intercom access, swift elevators, and 24/7 power backup, delivering a premium urban living experience.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/lignum-tower.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/17',
    },
    {
      slug: 'giga-mall-islamabad',
      title: 'Giga Mall, Islamabad',
      description:
        'One of the largest malls in Pakistan featuring shopping, dining, and entertainment.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/giga-mall.jpeg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/18',
    },
    {
      slug: 'pearl-residency-karachi',
      title: 'Pearl Residency, Karachi',
      description:
        'Pearl Residency consists of two state-of-the-art high-rise residential towers situated behind Aga Khan Hospital in Block 14 of Gulshan-e-Iqbal, Karachi. It is near the Civic Centre and Expo Centre. The project is fully completed.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/pearl-residency.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/19',
    },
    {
      slug: 'al-najeebi-bazaar-karimabad-karachi',
      title: 'Al Najeebi Bazaar, Karimabad Karachi',
      description:
        'Al Najeebi Bazaar Karimabad is located at Shahra-e-Pakistan, Main Karimabad, Karachi. The 1511 square yards project features 475 shops (100,000 sq ft) and is fully completed and operational.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/al-najeebi-bazaar.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/20',
    },
    {
      slug: 'goldcrest-souq-lahore',
      title: 'Goldcrest Souq, Lahore',
      description:
        'Goldcrest Souq in Sector DD, Phase IV of DHA Lahore is a modern commercial tower featuring shops and offices. Once complete, it will include 4 basements and a ground plus 13-floor structure. The project is currently in its initial development phase and construction has started.',
      images: [`${baseImageUrl}/images/projects/delivered-projects/gc-souq-lahore.jpg`],
      isCompleted: true,
      linkUrl: 'https://www.gigagroup.com/project-single/21',
    },
  ];

  // Seed ongoing projects
  for (const data of ongoingProjects) {
    const existing = await projectRepository.findOne({ where: { slug: data.slug } });
    if (!existing) {
      const project = projectRepository.create(data);
      await projectRepository.save(project);
      console.log(`Created ongoing project: ${project.title}`);
    } else {
      console.log(`Project already exists: ${data.slug}`);
    }
  }

  // Seed completed projects
  for (const data of completedProjects) {
    const existing = await projectRepository.findOne({ where: { slug: data.slug } });
    if (!existing) {
      const project = projectRepository.create(data);
      await projectRepository.save(project);
      console.log(`Created completed project: ${project.title}`);
    } else {
      console.log(`Project already exists: ${data.slug}`);
    }
  }

  console.log(`✓ Seeded ${ongoingProjects.length} ongoing projects and ${completedProjects.length} completed projects`);
}
