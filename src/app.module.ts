import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './config/typeorm';
import { ProjectsModule } from './modules/projects/projects.module';
import { EventsModule } from './modules/events/events.module';
import { LeasingModule } from './modules/leasing/leasing.module';
import { ContactModule } from './modules/contact/contact.module';
import { StoresModule } from './modules/stores/stores.module';
import { DineModule } from './modules/dine/dine.module';
import { ServicesModule } from './modules/services/services.module';
import { EntertainmentModule } from './modules/entertainment/entertainment.module';
import { FeaturedModule } from './modules/featured/featured.module';
import { CareersModule } from './modules/careers/careers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('typeorm'),
      }),
    }),
    ProjectsModule,
    EventsModule,
    LeasingModule,
    ContactModule,
    StoresModule,
    DineModule,
    ServicesModule,
    EntertainmentModule,
    FeaturedModule,
    CareersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}