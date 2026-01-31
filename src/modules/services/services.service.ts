import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../../entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  async findAll(category?: string, isTopPick?: boolean) {
    const where: any = {};
    if (category) {
      where.category = category;
    }
    if (isTopPick !== undefined) {
      where.isTopPick = isTopPick === true;
    }
    return this.serviceRepository.find({
      where,
      relations: ['floor'],
      order: { name: 'ASC' },
    });
  }

  async findOne(id: string) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid service ID');
    }

    const service = await this.serviceRepository.findOne({
      where: { id: numericId },
      relations: ['floor'],
    });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async findBySlug(slug: string) {
    const service = await this.serviceRepository.findOne({
      where: { slug },
      relations: ['floor'],
    });
    if (!service) {
      throw new NotFoundException(`Service with slug ${slug} not found`);
    }
    return service;
  }
}
