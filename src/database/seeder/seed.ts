import { connectionSource } from '../../config/typeorm';
import { seedFloors } from './floor.seeder';
import { seedStores } from './store.seeder';
import { seedDine } from './dine.seeder';
import { seedEntertainment } from './entertainment.seeder';
import { seedServices } from './service.seeder';

async function seed() {
  try {
    await connectionSource.initialize();
    console.log('Database connection established');

    // Seed base lookup tables first
    const floorsMap = await seedFloors(connectionSource);

    // Seed stores using the created floors
    await seedStores(connectionSource, floorsMap);

    // Seed a sample dine record
    await seedDine(connectionSource, floorsMap);

    // Seed entertainment venues
    await seedEntertainment(connectionSource, floorsMap);

    // Seed services
    await seedServices(connectionSource, floorsMap);

    console.log('Seeding completed!');
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
