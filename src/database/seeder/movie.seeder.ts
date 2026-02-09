import { DataSource } from 'typeorm';
import { Movie } from '../../entities/movie.entity';

export async function seedMovies(dataSource: DataSource): Promise<void> {
  const movieRepository = dataSource.getRepository(Movie);

  const samples: Partial<Movie>[] = [
    // Now Showing
    {
      title: 'Avatar',
      details: 'Action • Adventure • Sci-Fi • 3h 17m',
      status: 'Now Showing',
      image: '/Movies/avatar.jpeg',
    },
    {
      title: 'Anaconda',
      details: 'Action • Comedy • Horror • 1h 39m',
      status: 'Now Showing',
      image: '/Movies/anacona_1.jpg',
    },
    {
      title: 'Marty Supreme',
      details: 'Drama • Sport • 2h 30m',
      status: 'Now Showing',
      image: '/Movies/marty supreme_1.jpg',
    },
    {
      title: 'Gladiator II',
      details: 'Action • Drama • Epic • 2h 45m',
      status: 'Now Showing',
      image: '/Movies/gladiator II.jpg',
    },
    // Coming Soon
    {
      title: 'Greenland 2: Migration',
      details: 'Action • Thriller • January 9, 2026',
      status: 'Coming Soon',
      image: '/Movies/greenland2_1.jpg',
    },
    {
      title: '28 Years Later: The Bone Temple',
      details: 'Horror • January 16, 2026',
      status: 'Coming Soon',
      image: '/Movies/the bone temple_1.jpg',
    },
    {
      title: 'Primate',
      details: 'Horror • Sci-Fi • January 2026',
      status: 'Coming Soon',
      image: '/Movies/primate_1.jpg',
    },
    {
      title: 'Avatar 3',
      details: 'Action • Adventure • Sci-Fi • December 2026',
      status: 'Coming Soon',
      image: '/Movies/avatar 3.jpg',
    },
  ];

  for (const data of samples) {
    const movie = movieRepository.create(data);
    await movieRepository.save(movie);
    console.log(`Created movie: ${movie.title}`);
  }
}

