import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeaturedItem } from '../../entities/featured-item.entity';

@Injectable()
export class FeaturedService {
  constructor(
    @InjectRepository(FeaturedItem)
    private featuredRepository: Repository<FeaturedItem>,
  ) {}

  async findAll() {
    return this.featuredRepository.find({
      order: { createdAt: 'DESC' },
    });
  }
}
