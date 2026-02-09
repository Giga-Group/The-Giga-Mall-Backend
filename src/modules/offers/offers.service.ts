import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from '../../entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  async findAll(type?: string) {
    const where: any = {};
    if (type && type !== 'all') {
      where.type = type;
    }

    return this.offerRepository.find({
      where,
      order: { startDate: 'ASC' },
    });
  }
}

