import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Floor } from './floor.entity';

@Entity('visit_us')
export class VisitUs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('varchar', { nullable: true })
  backgroundImage: string | null;

  @Column('varchar', { nullable: true })
  mobileViewImage: string | null;

  @Column('jsonb', { nullable: true })
  contact: {
    phone?: string;
    email?: string;
  };

  // Floor relation instead of nested location object
  @ManyToOne(() => Floor, { nullable: true })
  @JoinColumn({ name: 'floorId' })
  floor?: Floor | null;

  @Column({ nullable: true })
  floorId?: number | null;

  // Raw coordinates for map position (jsonb)
  @Column('jsonb', { nullable: true })
  mapPosition?: {
    x: number;
    y: number;
  };

  @Column({ default: false })
  acceptsGiftCard: boolean;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  subcategory: string;

  @Column({ default: false })
  isTopPick: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
