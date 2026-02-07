import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dine } from '../../entities/dine.entity';

@Injectable()
export class DineService {
  constructor(
    @InjectRepository(Dine)
    private dineRepository: Repository<Dine>,
  ) {}

  async findAll(category?: string, isTopPick?: boolean, limit: number = 10) {
    const where: any = {};
    if (category) {
      where.category = category;
    }
    if (isTopPick !== undefined) {
      where.isTopPick = isTopPick === true;
    }
    return this.dineRepository.find({
      where,
      relations: ['floor'],
      order: { name: 'ASC' },
      take: limit,
    });
  }

  async findOne(id: string) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid dine ID');
    }

    const dine = await this.dineRepository.findOne({
      where: { id: numericId },
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
