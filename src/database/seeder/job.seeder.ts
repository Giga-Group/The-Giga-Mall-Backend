import { DataSource } from 'typeorm';
import { Job } from '../../entities/job.entity';

export async function seedJobs(dataSource: DataSource): Promise<void> {
  const jobRepository = dataSource.getRepository(Job);

  const sampleJobs: Partial<Job>[] = [
    {
      jobTitle: 'Event Planner',
      description:
        'We are seeking a creative and detail-oriented Event Planner to organize and execute memorable events at Giga Mall. The ideal candidate will be responsible for planning, coordinating, and managing various events including cultural celebrations, promotional activities, and community gatherings. You will work closely with vendors, coordinate logistics, and ensure all events run smoothly from conception to completion.',
      skills: [
        'Event Planning',
        'Project Management',
        'Vendor Coordination',
        'Budget Management',
        'Communication',
        'Time Management',
        'Creative Thinking',
        'Problem Solving',
      ],
      requirements: [
        "Bachelor's degree in Event Management, Hospitality, or related field",
        'Minimum 2-3 years of experience in event planning',
        'Strong organizational and multitasking abilities',
        'Excellent communication and interpersonal skills',
        'Proficiency in event management software',
        'Ability to work under pressure and meet deadlines',
        'Flexible schedule including weekends and evenings',
      ],
      niceToHave: [
        'Experience in retail or mall event planning',
        'Knowledge of local vendors and suppliers',
        'Certification in event planning (CMP, CSEP)',
        'Multilingual abilities',
        'Social media marketing experience',
      ],
      isClosed: false,
    },
    {
      jobTitle: 'Event Organizer',
      description:
        'Join our dynamic team as an Event Organizer and help create exceptional experiences for Giga Mall visitors. You will be responsible for organizing a wide range of events including festivals, exhibitions, workshops, and promotional campaigns. This role requires excellent coordination skills, creativity, and the ability to manage multiple events simultaneously while ensuring high standards of execution.',
      skills: [
        'Event Coordination',
        'Logistics Management',
        'Team Leadership',
        'Vendor Relations',
        'Marketing',
        'Public Relations',
        'Attention to Detail',
        'Customer Service',
      ],
      requirements: [
        'High school diploma or equivalent (Bachelor\'s degree preferred)',
        '1-2 years of experience in event organization or coordination',
        'Strong leadership and team management skills',
        'Excellent verbal and written communication',
        'Ability to coordinate multiple events simultaneously',
        'Proficiency in Microsoft Office and event management tools',
        'Willingness to work flexible hours including weekends',
      ],
      niceToHave: [
        'Previous experience in retail or entertainment industry',
        'Knowledge of local event regulations and permits',
        'Graphic design skills',
        'Experience with event marketing and promotion',
        'Bilingual or multilingual',
      ],
      isClosed: false,
    },
  ];

  for (const data of sampleJobs) {
    const job = jobRepository.create(data);
    await jobRepository.save(job);
    console.log(`Created job: ${job.jobTitle}`);
  }
}
