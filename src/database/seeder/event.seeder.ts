import { DataSource } from 'typeorm';
import { Event } from '../../entities/event.entity';

export async function seedEvents(dataSource: DataSource): Promise<void> {
  const eventRepository = dataSource.getRepository(Event);

  const samples: Partial<Event>[] = [
    {
      startDate: '30th January 2026',
      endDate: '1st February 2026',
      eventName: 'Culture Day at Giga Mall',
      description:
        'Celebrate Culture Day at Giga Mall from 30th January to 1st February 2026. Enjoy vibrant cultural performances, traditional music, and family-friendly activities.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming11.jpg',
    },
    
    {
      startDate: '1st January 2026',
      endDate: null,
      eventName: 'New Year 2026 Celebration',
      description:
        'Stay tuned for exciting updates and news from Giga Mall.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming8.jpg',
    },
    {
      startDate: '25th December 2025',
      endDate: null,
      eventName: 'Quaid e Azam Day Celebration',
      description:
        'Stay tuned for exciting updates and news from Giga Mall.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming10.jpg',
    },
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'Tribal Beats 2025',
      description:
        'Stay tuned for exciting updates and news from Giga Mall.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming2.jpg',
    },
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'Hub of Shopping',
      description:
        'Stay tuned for exciting updates and news from Giga Mall.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming7.jpg',
    },
    
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'Shop with joy',
      description:
        'Stay tuned for exciting updates and news from Giga Mall.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming5.jpg',
    },
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'Fun And Learning',
      description:
        'Stay tuned for exciting updates and news from Giga Mall.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming6.jpg',
    },
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'Goldcrest Poolside',
      description:
        'Stay tuned for exciting updates and news from Giga Mall.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
      image: '/up coming/upcoming4.jpg',
    },
  ];

  for (const data of samples) {
    const event = eventRepository.create(data);
    await eventRepository.save(event);
    console.log(`Created event: ${event.eventName}`);
  }
}
