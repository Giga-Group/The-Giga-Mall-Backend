import { connectionSource } from '../../config/typeorm';
import { seedFloors } from './floor.seeder';
import { seedStores } from './store.seeder';
import { seedDine } from './dine.seeder';
import { seedEntertainment } from './entertainment.seeder';
import { seedServices } from './service.seeder';
import { seedFeatured } from './featured.seeder';
import { seedEvents } from './event.seeder';
import { seedJobs } from './job.seeder';
import { seedMovies } from './movie.seeder';
import { seedOffers } from './offer.seeder';
import { seedUploadedSvgs } from './uploaded-svg.seeder';
import { seedProjects } from './project.seeder';

async function seed() {
  try {
    await connectionSource.initialize();
    console.log('Database connection established');
    console.log('Starting fresh seed...\n');

    // Seed base lookup tables first
    const floorsMap = await seedFloors(connectionSource);
    console.log('');

    // Seed stores using the created floors
    await seedStores(connectionSource, floorsMap);
    console.log('');

    // Seed a sample dine record
    await seedDine(connectionSource, floorsMap);
    console.log('');

    // Seed entertainment venues
    await seedEntertainment(connectionSource, floorsMap);
    console.log('');

    // Seed services
    await seedServices(connectionSource, floorsMap);
    console.log('');

    // Seed featured items
    await seedFeatured(connectionSource);
    console.log('');

    // Seed events
    await seedEvents(connectionSource);
    console.log('');

    // Seed movies
    await seedMovies(connectionSource);
    console.log('');

    // Seed offers
    await seedOffers(connectionSource);
    console.log('');

    // Seed jobs
    await seedJobs(connectionSource);
    console.log('');

    // Seed uploaded SVGs
    await seedUploadedSvgs(connectionSource, floorsMap);
    console.log('');

    // Seed projects
    await seedProjects(connectionSource);
    console.log('');

    console.log('✓ Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await connectionSource.destroy();
  }
}

seed().catch((error) => {
  console.error('Failed to seed database:', error);
  process.exit(1);
});
