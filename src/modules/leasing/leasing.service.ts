import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeasingInquiry } from '../../entities/leasing-inquiry.entity';
import { CreateLeasingInquiryDto } from './dto/create-leasing-inquiry.dto';
import { UpdateLeasingInquiryDto } from './dto/update-leasing-inquiry.dto';

@Injectable()
export class LeasingService {
  constructor(
    @InjectRepository(LeasingInquiry)
    private leasingInquiryRepository: Repository<LeasingInquiry>,
  ) {}

  async create(createLeasingInquiryDto: CreateLeasingInquiryDto) {
    // Check if email already exists
    const existingInquiry = await this.leasingInquiryRepository.findOne({
      where: { email: createLeasingInquiryDto.email },
    });

    if (existingInquiry) {
      throw new BadRequestException(
        'An inquiry with this email already exists. Please use a different email address.',
      );
    }

    const inquiry = this.leasingInquiryRepository.create(
      createLeasingInquiryDto,
    );
    return this.leasingInquiryRepository.save(inquiry);
  }

  async findAll() {
    return this.leasingInquiryRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid leasing inquiry ID');
    }

    const inquiry = await this.leasingInquiryRepository.findOne({
      where: { id: numericId },
    });
    if (!inquiry) {
      throw new NotFoundException(`Leasing inquiry with ID ${id} not found`);
    }
    return inquiry;
  }

  async update(id: string, updateLeasingInquiryDto: UpdateLeasingInquiryDto) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid leasing inquiry ID');
    }

    await this.findOne(id);
    await this.leasingInquiryRepository.update(numericId, updateLeasingInquiryDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Invalid leasing inquiry ID');
    }

    await this.findOne(id);
    await this.leasingInquiryRepository.delete(numericId);
    return { message: 'Leasing inquiry deleted successfully' };
  }
}
