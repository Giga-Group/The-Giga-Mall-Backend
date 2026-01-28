import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Store } from './store.entity';

@Entity('floors')
export class Floor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  floorName: string;

  @OneToMany(() => Store, (store) => store.floor)
  stores: Store[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

