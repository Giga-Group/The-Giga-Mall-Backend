import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../../entities/job.entity';
import { JobApplicant } from '../../entities/job-applicant.entity';
import { ApplyJobDto } from './dto/apply-job.dto';

@Injectable()
export class CareerService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
    @InjectRepository(JobApplicant)
    private jobApplicantRepository: Repository<JobApplicant>,
  ) {}

  async findAll() {
    // Return only id, jobTitle, description for all jobs
    return this.jobRepository.find({
      where: { isClosed: false },
      select: ['id', 'jobTitle', 'description'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid job ID');
    }

    const job = await this.jobRepository.findOne({
      where: { id: numericId },
    });

    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }

    return job;
  }

  async apply(jobId: string, applyJobDto: ApplyJobDto) {
    const numericJobId = Number(jobId);
    if (Number.isNaN(numericJobId)) {
      throw new BadRequestException('Invalid job ID');
    }

    // Check if job exists
    const job = await this.jobRepository.findOne({
      where: { id: numericJobId },
    });

    if (!job) {
      throw new NotFoundException(`Job with ID ${jobId} not found`);
    }

    if (job.isClosed) {
      throw new BadRequestException('This job posting is closed');
    }

    // Check if email already applied for this job
    const existingApplication = await this.jobApplicantRepository.findOne({
      where: {
        jobId: numericJobId,
        email: applyJobDto.email,
      },
    });

    if (existingApplication) {
      throw new BadRequestException(
        'You have already applied for this job with this email address.',
      );
    }

    // Create job application
    const application = this.jobApplicantRepository.create({
      jobId: numericJobId,
      ...applyJobDto,
    });

    const savedApplication =
      await this.jobApplicantRepository.save(application);

    return {
      message: 'Application submitted successfully',
      applicationId: savedApplication.id,
    };
  }
}
