import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // ✅ Dynamically load all entity files from centralized `src/entities`
  entities: [__dirname + '/../entities/*.entity.{ts,js}'],

  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});
