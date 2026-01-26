import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dine } from '../../entities/dine.entity';

@Injectable()
export class DineService {
  constructor(
    @InjectRepository(Dine)
    private dineRepository: Repository<Dine>,
  ) {}

  async findAll(category?: string) {
    const where: any = {};
    if (category) {
      where.category = category;
    }
    return this.dineRepository.find({
      where,
      order: { name: 'ASC' },
    });
  }

  async findOne(id: string) {
    const dine = await this.dineRepository.findOne({
      where: { id },
    });
    if (!dine) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
    return dine;
  }

  async findBySlug(slug: string) {
    const dine = await this.dineRepository.findOne({
      where: { slug },
    });
    if (!dine) {
      throw new NotFoundException(`Restaurant with slug ${slug} not found`);
    }
    return dine;
  }
}
