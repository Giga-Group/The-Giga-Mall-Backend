import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    url: process.env.DATABASE_URL, // Complete connection string: postgresql://username:password@host:port/database
    entities: [__dirname + "/../entities/*.entity.{ts,js}"],
    migrations: ["dist/database/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: false,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);