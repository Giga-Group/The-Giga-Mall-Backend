import { Injectable, NotFoundException } from '@nestjs/common';
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
    const inquiry = await this.leasingInquiryRepository.findOne({
      where: { id },
    });
    if (!inquiry) {
      throw new NotFoundException(`Leasing inquiry with ID ${id} not found`);
    }
    return inquiry;
  }

  async update(id: string, updateLeasingInquiryDto: UpdateLeasingInquiryDto) {
    await this.findOne(id);
    await this.leasingInquiryRepository.update(id, updateLeasingInquiryDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.leasingInquiryRepository.delete(id);
    return { message: 'Leasing inquiry deleted successfully' };
  }
}
