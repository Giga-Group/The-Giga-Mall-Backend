import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // Complete connection string: postgresql://username:password@host:port/database

  // ✅ Dynamically load all entity files from centralized `src/entities`
  entities: [__dirname + '/../entities/*.entity.{ts,js}'],

  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});
