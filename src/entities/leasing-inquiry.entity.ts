import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum InquiryStatus {
  PENDING = 'PENDING',
  CONTACTED = 'CONTACTED',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
}

@Entity('leasing_inquiries')
export class LeasingInquiry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  fullName: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  phone: string;

  @Column('text', { nullable: true })
  additionalMessage: string;

  @Column('varchar', { nullable: true })
  requiredSquareFeet: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
