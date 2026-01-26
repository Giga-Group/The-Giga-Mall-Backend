import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('dines')
export class Dine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
    location?: string;
  };

  @Column('jsonb', { nullable: true })
  location: {
    level?: string;
    parking?: string;
    mapPosition?: {
      x: number;
      y: number;
    };
  };

  @Column({ default: false })
  hasOffers: boolean;

  @Column({ default: false })
  acceptsGiftCard: boolean;

  @Column({ nullable: true })
  category: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
