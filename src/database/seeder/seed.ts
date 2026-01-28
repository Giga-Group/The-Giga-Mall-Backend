import { connectionSource } from '../../config/typeorm';
import { seedFloors } from './floor.seeder';
import { seedStores } from './store.seeder';

async function seed() {
  try {
    await connectionSource.initialize();
    console.log('Database connection established');

    // Seed base lookup tables first
    const floorsMap = await seedFloors(connectionSource);

    // Seed stores using the created floors
    await seedStores(connectionSource, floorsMap);

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
