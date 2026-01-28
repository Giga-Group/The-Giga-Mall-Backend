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

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  backgroundImage: string;

  @Column('jsonb', { nullable: true })
  contact: {
    phone?: string;
    email?: string;
  };

  // Floor relation instead of nested location object
  @ManyToOne(() => Floor, (floor) => floor.stores, { nullable: true })
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
  hasOffers: boolean;

  @Column({ default: false })
  acceptsGiftCard: boolean;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  subcategory: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
