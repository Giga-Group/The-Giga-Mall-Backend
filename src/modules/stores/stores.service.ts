import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from '../../entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async findAll(category?: string, subcategory?: string) {
    const where: any = {};
    if (category) {
      where.category = category;
    }
    if (subcategory) {
      where.subcategory = subcategory;
    }
    return this.storeRepository.find({
      where,
      order: { name: 'ASC' },
    });
  }

  async findOne(id: string) {
    const store = await this.storeRepository.findOne({
      where: { id },
    });
    if (!store) {
      throw new NotFoundException(`Store with ID ${id} not found`);
    }
    return store;
  }

  async findBySlug(slug: string) {
    const store = await this.storeRepository.findOne({
      where: { slug },
    });
    if (!store) {
      throw new NotFoundException(`Store with slug ${slug} not found`);
    }
    return store;
  }
}
