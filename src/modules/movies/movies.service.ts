import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../../entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(status?: string) {
    const where: any = {};
    if (status) {
      where.status = status;
    }

    return this.movieRepository.find({
      where,
      order: { id: 'ASC' },
    });
  }
}

