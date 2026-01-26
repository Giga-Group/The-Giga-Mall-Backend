import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Project } from '../entities/project.entity';
import { Event } from '../entities/event.entity';
import { LeasingInquiry } from '../entities/leasing-inquiry.entity';
import { ContactSubmission } from '../entities/contact-submission.entity';
import { Store } from '../entities/store.entity';
import { Dine } from '../entities/dine.entity';
import { Service } from '../entities/service.entity';
import { Entertainment } from '../entities/entertainment.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: configService.get<number>('DB_PORT') || 5432,
        username: configService.get<string>('DB_USERNAME') || 'postgres',
        password: configService.get<string>('DB_PASSWORD') || 'postgres',
        database: configService.get<string>('DB_NAME') || 'giga_mall_db',
        entities: [
          Project,
          Event,
          LeasingInquiry,
          ContactSubmission,
          Store,
          Dine,
          Service,
          Entertainment,
        ],
        synchronize: configService.get<string>('NODE_ENV') === 'development',
        logging: configService.get<string>('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
