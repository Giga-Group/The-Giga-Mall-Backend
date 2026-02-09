import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Floor } from './floor.entity';

@Entity('uploaded_svgs')
export class UploadedSvg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  floorId: number;

  @ManyToOne(() => Floor)
  @JoinColumn({ name: 'floorId' })
  floor: Floor;

  @Column('varchar')
  svgUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
