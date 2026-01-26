import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './config/database.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { EventsModule } from './modules/events/events.module';
import { LeasingModule } from './modules/leasing/leasing.module';
import { ContactModule } from './modules/contact/contact.module';
import { StoresModule } from './modules/stores/stores.module';
import { DineModule } from './modules/dine/dine.module';
import { ServicesModule } from './modules/services/services.module';
import { EntertainmentModule } from './modules/entertainment/entertainment.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ProjectsModule,
    EventsModule,
    LeasingModule,
    ContactModule,
    StoresModule,
    DineModule,
    ServicesModule,
    EntertainmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
