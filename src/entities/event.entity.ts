import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventName: string;

  @Column('text')
  description: string;

  @Column()
  navigateLink: string;

  @Column('varchar')
  startDate: string;

  @Column('varchar', { nullable: true })
  endDate: string | null;

  @Column('varchar', { nullable: true })
  image: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
