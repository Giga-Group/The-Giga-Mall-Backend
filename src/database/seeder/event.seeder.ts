import { DataSource } from 'typeorm';
import { Event } from '../../entities/event.entity';

export async function seedEvents(dataSource: DataSource): Promise<void> {
  const eventRepository = dataSource.getRepository(Event);

  const samples: Partial<Event>[] = [
    {
      startDate: '30th January 2026',
      endDate: '1st February 2026',
      eventName: 'Culture Fest at Giga Mall',
      description:
        'Celebrate Culture Day at Giga Mall from 30th January to 1st February 2026. Enjoy vibrant cultural performances, traditional music, and family-friendly activities that showcase the richness of our heritage.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
    {
      startDate: '6th September 2025',
      endDate: null,
      eventName: 'Defence Day Celebration',
      description:
        "Join us in honoring our nation's heroes with a special Defence Day celebration. Experience patriotic displays, cultural performances, and community activities that pay tribute to the brave defenders of our country.",
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
    {
      startDate: '15th March 2025',
      endDate: null,
      eventName: 'Eid ul Adha Celebration',
      description:
        'Celebrate the spirit of sacrifice and togetherness with our grand Eid ul Adha festivities. Enjoy special performances, traditional activities, and a joyful atmosphere for the entire family',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
    {
      startDate: '14th August 2025',
      endDate: null,
      eventName: 'Independence Day Celebration',
      description:
        "Celebrate Pakistan's Independence Day with pride and joy. Join us for flag hoisting ceremonies, patriotic performances, cultural displays, and special activities that honor our nation's freedom.",
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
    {
      startDate: '18th May 2025',
      endDate: null,
      eventName: 'Mothers Day Celebration',
      description:
        "Honor the most important women in our lives with a special Mother's Day celebration. Enjoy heartwarming activities, special performances, and create beautiful memories with your loved ones.",
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'MOU Signing Ceremony With The Last Tribe',
      description:
        'Witness a significant partnership milestone as Giga Mall signs a Memorandum of Understanding with The Last Tribe. This collaboration brings exciting new experiences and opportunities to our visitors.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'Giga Tribal Beats 2025',
      description:
        'Experience the rhythm and energy of Giga Tribal Beats 2025! Immerse yourself in vibrant cultural performances, traditional music, and dynamic entertainment that celebrates our rich heritage.',
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
    {
      startDate: '1st January 2025',
      endDate: '31st December 2025',
      eventName: 'Giga Mall 5th Anniversary Celebration',
      description:
        "Marking five incredible years of excellence! Join us throughout the year as we celebrate Giga Mall's 5th anniversary with special events, exclusive offers, and memorable experiences for all our valued visitors.",
      navigateLink: 'https://www.facebook.com/GigaMallWTCIsb',
    },
  ];

  for (const data of samples) {
    const existing = await eventRepository.findOne({
      where: { eventName: data.eventName! },
    });
    if (!existing) {
      const event = eventRepository.create(data);
      await eventRepository.save(event);
      console.log(`Created event: ${event.eventName}`);
    } else {
      console.log(`Event ${data.eventName} already exists`);
    }
  }
}
