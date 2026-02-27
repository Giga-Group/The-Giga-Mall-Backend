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
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/avatar.webp',
    },
    {
      title: 'Anaconda',
      details: 'Action • Comedy • Horror • 1h 39m',
      status: 'Now Showing',
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/anacona_1.webp',
    },
    {
      title: 'Marty Supreme',
      details: 'Drama • Sport • 2h 30m',
      status: 'Now Showing',
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/marty supreme_1.webp',
    },
    {
      title: 'Gladiator II',
      details: 'Action • Drama • Epic • 2h 45m',
      status: 'Now Showing',
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/gladiator II.webp',
    },
    // Coming Soon
    {
      title: 'Greenland 2: Migration',
      details: 'Action • Thriller • January 9, 2026',
      status: 'Coming Soon',
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/greenland2_1.webp',
    },
    {
      title: '28 Years Later: The Bone Temple',
      details: 'Horror • January 16, 2026',
      status: 'Coming Soon',
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/the bone temple_1.webp',
    },
    {
      title: 'Primate',
      details: 'Horror • Sci-Fi • January 2026',
      status: 'Coming Soon',
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/primate_1.webp',
    },
    {
      title: 'Avatar 3',
      details: 'Action • Adventure • Sci-Fi • December 2026',
      status: 'Coming Soon',
      image: 'https://rawcdn.githack.com/Giga-Group/The-Giga-Mall-Media/refs/heads/main/Movies/avatar 3.webp',
    },
  ];

  for (const data of samples) {
    // Check if movie already exists by title and status combination
    const existing = await movieRepository.findOne({ 
      where: { title: data.title, status: data.status } 
    });
    if (!existing) {
      const movie = movieRepository.create(data);
      await movieRepository.save(movie);
      console.log(`Created movie: ${movie.title}`);
    } else {
      console.log(`Movie already exists: ${data.title} (${data.status})`);
    }
  }
}

