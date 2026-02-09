import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../../entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async findAll() {
    // Parse the date string and order by the parsed date in descending order (future dates first)
    // Format: "DDth Month YYYY" or "Dth Month YYYY" (e.g., "30th January 2026", "6th September 2025")
    // Remove ordinal suffixes (st, nd, rd, th) and parse as date
    return this.eventRepository
      .createQueryBuilder('event')
      .orderBy(
        `TO_DATE(
          REGEXP_REPLACE(event.startDate, '(\\d+)(st|nd|rd|th)', '\\1', 'gi'),
          'DD Month YYYY'
        )`,
        'DESC',
      )
      .getMany();
  }
}
