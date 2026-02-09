import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadedSvg } from '../../entities/uploaded-svg.entity';

@Injectable()
export class MallMapService {
  constructor(
    @InjectRepository(UploadedSvg)
    private readonly uploadedSvgRepository: Repository<UploadedSvg>,
  ) {}

  async findOne(id: number) {
    const uploadedSvg = await this.uploadedSvgRepository.findOne({
      where: { id },
      relations: ['floor'],
    });

    if (!uploadedSvg) {
      throw new NotFoundException(`SVG map with ID ${id} not found`);
    }

    return uploadedSvg;
  }
}
