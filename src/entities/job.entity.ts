import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { JobApplicant } from './job-applicant.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  jobTitle: string;

  @Column('text')
  description: string;

  @Column('text', { array: true, default: [] })
  skills: string[];

  @Column('text', { array: true, default: [] })
  requirements: string[];

  @Column('text', { array: true, nullable: true })
  niceToHave: string[] | null;

  @Column({ default: false })
  isClosed: boolean;

  @OneToMany(() => JobApplicant, (applicant) => applicant.job)
  applicants: JobApplicant[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
