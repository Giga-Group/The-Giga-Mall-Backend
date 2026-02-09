import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { Job } from '../../entities/job.entity';
import { JobApplicant } from '../../entities/job-applicant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job, JobApplicant])],
  controllers: [CareerController],
  providers: [CareerService],
})
export class CareersModule {}
