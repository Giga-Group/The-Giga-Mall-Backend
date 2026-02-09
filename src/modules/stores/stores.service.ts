import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Store } from '../../entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async findAll(
    search?: string,
    category?: string,
    subcategory?: string,
    isTopPick?: boolean,
    limit: number = 10,
  ) {
    const queryBuilder = this.storeRepository
      .createQueryBuilder('store')
      .leftJoinAndSelect('store.floor', 'floor');

    // Search filter (searches in name and description)
    if (search) {
      queryBuilder.andWhere(
        '(store.name ILIKE :search OR store.description ILIKE :search)',
        { search: `%${search}%` },
      );
    }

    // Category filter
    if (category) {
      queryBuilder.andWhere('store.category = :category', { category });
    }

    // Subcategory filter (only works if category is selected)
    if (subcategory) {
      if (!category) {
        throw new BadRequestException(
          'Subcategory filter requires a category to be selected',
        );
      }
      queryBuilder.andWhere('store.subcategory = :subcategory', {
        subcategory,
      });
    }

    // isTopPick filter
    if (isTopPick !== undefined) {
      queryBuilder.andWhere('store.isTopPick = :isTopPick', {
        isTopPick: isTopPick === true,
      });
    }

    // Order and limit
    queryBuilder.orderBy('store.name', 'ASC').limit(limit);

    return queryBuilder.getMany();
  }

  async findOne(id: string) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid store ID');
    }

    const store = await this.storeRepository.findOne({
      where: { id: numericId },
      relations: ['floor'],
    });
    if (!store) {
      throw new NotFoundException(`Store with ID ${id} not found`);
    }
    return store;
  }

  async findBySlug(slug: string) {
    const store = await this.storeRepository.findOne({
      where: { slug },
      relations: ['floor'],
    });
    if (!store) {
      throw new NotFoundException(`Store with slug ${slug} not found`);
    }
    return store;
  }
}
