import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DineService } from './dine.service';
import { DineController } from './dine.controller';
import { Dine } from '../../entities/dine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dine])],
  controllers: [DineController],
  providers: [DineService],
  exports: [DineService],
})
export class DineModule {}
