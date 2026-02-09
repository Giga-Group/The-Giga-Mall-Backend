import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entertainment } from '../../entities/entertainment.entity';

@Injectable()
export class EntertainmentService {
  constructor(
    @InjectRepository(Entertainment)
    private entertainmentRepository: Repository<Entertainment>,
  ) {}

  async findAll(category?: string, limit: number = 10) {
    const where: any = {};
    if (category) {
      where.category = category;
    }
    return this.entertainmentRepository.find({
      where,
      relations: ['floor'],
      order: { name: 'ASC' },
      take: limit,
    });
  }

  async findOne(id: string) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid entertainment ID');
    }

    const entertainment = await this.entertainmentRepository.findOne({
      where: { id: numericId },
      relations: ['floor'],
    });
    if (!entertainment) {
      throw new NotFoundException(`Entertainment with ID ${id} not found`);
    }
    return entertainment;
  }

  async findBySlug(slug: string) {
    const entertainment = await this.entertainmentRepository.findOne({
      where: { slug },
      relations: ['floor'],
    });
    if (!entertainment) {
      throw new NotFoundException(
        `Entertainment with slug ${slug} not found`,
      );
    }
    return entertainment;
  }
}
