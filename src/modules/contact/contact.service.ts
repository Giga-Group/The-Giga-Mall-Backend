import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactSubmission } from '../../entities/contact-submission.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactSubmission)
    private contactSubmissionRepository: Repository<ContactSubmission>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const submission =
      this.contactSubmissionRepository.create(createContactDto);
    return this.contactSubmissionRepository.save(submission);
  }

  async findAll() {
    return this.contactSubmissionRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string) {
    const submission = await this.contactSubmissionRepository.findOne({
      where: { id },
    });
    if (!submission) {
      throw new NotFoundException(`Contact submission with ID ${id} not found`);
    }
    return submission;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    await this.findOne(id);
    await this.contactSubmissionRepository.update(id, updateContactDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.contactSubmissionRepository.delete(id);
    return { message: 'Contact submission deleted successfully' };
  }
}
