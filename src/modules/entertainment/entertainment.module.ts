import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntertainmentService } from './entertainment.service';
import { EntertainmentController } from './entertainment.controller';
import { Entertainment } from '../../entities/entertainment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entertainment])],
  controllers: [EntertainmentController],
  providers: [EntertainmentService],
  exports: [EntertainmentService],
})
export class EntertainmentModule {}
