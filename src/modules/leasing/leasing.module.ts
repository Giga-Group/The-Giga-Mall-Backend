import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeasingService } from './leasing.service';
import { LeasingController } from './leasing.controller';
import { LeasingInquiry } from '../../entities/leasing-inquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeasingInquiry])],
  controllers: [LeasingController],
  providers: [LeasingService],
  exports: [LeasingService],
})
export class LeasingModule {}
