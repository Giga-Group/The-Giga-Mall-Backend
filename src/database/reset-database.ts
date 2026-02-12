import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // Complete connection string: postgresql://username:password@host:port/database
  entities: [__dirname + '/../entities/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});

async function resetDatabase() {
  try {
    console.log('Connecting to database...');
    await dataSource.initialize();
    console.log('Database connection established');

    // Drop all tables by dropping the public schema and recreating it
    console.log('Dropping all tables and schema...');
    await dataSource.query('DROP SCHEMA IF EXISTS public CASCADE');
    await dataSource.query('CREATE SCHEMA public');
    await dataSource.query('GRANT ALL ON SCHEMA public TO postgres');
    await dataSource.query('GRANT ALL ON SCHEMA public TO public');
    
    // Also drop the migrations table if it exists
    try {
      await dataSource.query('DROP TABLE IF EXISTS migrations CASCADE');
    } catch (e) {
      // Ignore if migrations table doesn't exist
    }
    
    console.log('✓ Schema dropped successfully. Ready for fresh migrations.');
  } catch (error) {
    console.error('Error resetting database:', error);
    process.exit(1);
  } finally {
    await dataSource.destroy();
  }
}

resetDatabase();
