import { connectionSource } from '../../config/typeorm';

async function resetDatabase() {
  try {
    await connectionSource.initialize();
    console.log('Database connection established');

    // Drop all tables by dropping the public schema and recreating it
    console.log('Dropping all tables and schema...');
    await connectionSource.query('DROP SCHEMA IF EXISTS public CASCADE');
    await connectionSource.query('CREATE SCHEMA public');
    await connectionSource.query('GRANT ALL ON SCHEMA public TO postgres');
    await connectionSource.query('GRANT ALL ON SCHEMA public TO public');
    
    // Also drop the migrations table if it exists
    try {
      await connectionSource.query('DROP TABLE IF EXISTS migrations CASCADE');
    } catch (e) {
      // Ignore if migrations table doesn't exist
    }
    
    console.log('✓ Schema dropped successfully. Ready for fresh migrations.');
  } catch (error) {
    console.error('Error resetting database:', error);
    throw error;
  } finally {
    await connectionSource.destroy();
  }
}

resetDatabase().catch((error) => {
  console.error('Failed to reset database:', error);
  process.exit(1);
});
