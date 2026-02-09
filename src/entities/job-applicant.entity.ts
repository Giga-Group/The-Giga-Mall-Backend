import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Job } from './job.entity';

@Entity('job_applicants')
export class JobApplicant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Job, (job) => job.applicants)
  @JoinColumn({ name: 'jobId' })
  job: Job;

  @Column()
  jobId: number;

  @Column('varchar')
  highestQualification: string;

  @Column('varchar')
  candidateName: string;

  @Column('varchar')
  email: string;

  @Column('varchar', { nullable: true })
  phoneNo: string | null;

  @Column('varchar', { nullable: true })
  linkedIn: string | null;

  @Column('varchar', { nullable: true })
  lastCompany: string | null;

  @Column('varchar', { nullable: true })
  lastPosition: string | null;

  @Column('varchar')
  resume: string; // File path

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
