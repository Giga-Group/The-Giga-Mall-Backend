import { DataSource } from 'typeorm';
import { Project, ProjectStatus } from '../entities/project.entity';
import { Event } from '../entities/event.entity';
import { dataSourceOptions } from '../config/database.config';

const AppDataSource = new DataSource(dataSourceOptions);

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established');

    const projectRepository = AppDataSource.getRepository(Project);
    const eventRepository = AppDataSource.getRepository(Event);

    // Create sample projects
    const projects = [
      {
        slug: 'giga-mall-wtc',
        title: 'Giga Mall WTC',
        description: 'World Trade Center',
        category: 'Commercial',
        status: ProjectStatus.IN_PROGRESS,
        location: 'Giga City, Islamabad',
        images: ['/projects/gmwtc_1.jpg'],
        details: {
          paymentPlan: 'Customized',
          downPayment: '40%',
          roiExpected: 'Premium Returns',
        },
      },
      {
        slug: 'giga-mall-extension',
        title: 'Giga Mall Extension',
        description: 'Mixed-Use Development',
        category: 'Commercial',
        status: ProjectStatus.IN_PROGRESS,
        location: 'Giga City, Islamabad',
        images: ['/projects/gme.jpg'],
      },
    ];

    for (const projectData of projects) {
      const existingProject = await projectRepository.findOne({
        where: { slug: projectData.slug },
      });

      if (!existingProject) {
        const project = projectRepository.create(projectData);
        await projectRepository.save(project);
        console.log(`Created project: ${project.title}`);
      } else {
        console.log(`Project ${projectData.slug} already exists`);
      }
    }

    // Create sample events
    const events = [
      {
        title: 'Grand Opening Event',
        description: 'Join us for the grand opening of Giga Mall',
        image: '/events/grand-opening.jpg',
        eventDate: new Date('2024-12-31'),
        isActive: true,
      },
    ];

    for (const eventData of events) {
      const event = eventRepository.create(eventData);
      await eventRepository.save(event);
      console.log(`Created event: ${event.title}`);
    }

    console.log('Seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await AppDataSource.destroy();
  }
}

seed().catch((error) => {
  console.error('Failed to seed database:', error);
  process.exit(1);
});
