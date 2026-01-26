import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entertainment } from '../../entities/entertainment.entity';

@Injectable()
export class EntertainmentService {
  constructor(
    @InjectRepository(Entertainment)
    private entertainmentRepository: Repository<Entertainment>,
  ) {}

  async findAll(category?: string) {
    const where: any = {};
    if (category) {
      where.category = category;
    }
    return this.entertainmentRepository.find({
      where,
      order: { name: 'ASC' },
    });
  }

  async findOne(id: string) {
    const entertainment = await this.entertainmentRepository.findOne({
      where: { id },
    });
    if (!entertainment) {
      throw new NotFoundException(`Entertainment with ID ${id} not found`);
    }
    return entertainment;
  }

  async findBySlug(slug: string) {
    const entertainment = await this.entertainmentRepository.findOne({
      where: { slug },
    });
    if (!entertainment) {
      throw new NotFoundException(
        `Entertainment with slug ${slug} not found`,
      );
    }
    return entertainment;
  }
}
