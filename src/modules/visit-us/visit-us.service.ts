import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisitUs } from '../../entities/visit-us.entity';

@Injectable()
export class VisitUsService {
  constructor(
    @InjectRepository(VisitUs)
    private readonly visitUsRepository: Repository<VisitUs>,
  ) {}

  async findAll(): Promise<VisitUs[]> {
    return this.visitUsRepository.find({
      relations: ['floor'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<VisitUs> {
    const visitUs = await this.visitUsRepository.findOne({
      where: { id },
      relations: ['floor'],
    });

    if (!visitUs) {
      throw new NotFoundException(`Visit-us with ID ${id} not found`);
    }

    return visitUs;
  }
}
