import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitUs } from '../../entities/visit-us.entity';
import { VisitUsService } from './visit-us.service';
import { VisitUsController } from './visit-us.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VisitUs])],
  controllers: [VisitUsController],
  providers: [VisitUsService],
  exports: [VisitUsService],
})
export class VisitUsModule {}
