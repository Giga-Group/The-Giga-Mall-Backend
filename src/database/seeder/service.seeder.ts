import { DataSource } from 'typeorm';
import { Service } from '../../entities/service.entity';
import { Floor } from '../../entities/floor.entity';

export async function seedServices(
  dataSource: DataSource,
  floorsMap: Record<string, Floor>,
): Promise<void> {
  const serviceRepository = dataSource.getRepository(Service);

  const samples: Partial<Service>[] = [
    {
      slug: 'carrefour',
      name: 'Carrefour',
      description:
        'A leading global retail chain offering groceries, fresh produce, household essentials, electronics, and everyday necessities under one roof.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/carrefour.jpeg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/Carrefour web.JPG',
      mobileViewImage: null,
      category: 'Grocery',
      contact: {
        phone: '+971-50-501-8610',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 30, y: 40 },
      isTopPick: true,
    },
    {
      slug: 'd-watson',
      name: 'D watson',
      description:
        'A trusted health and beauty retailer offering skincare, cosmetics, personal care products, and wellness essentials.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/DwastsonLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/D watson web.JPG',
      mobileViewImage: null,
      category: 'Beauty',
      contact: {
        phone: '+971-50-501-8610',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 35, y: 45 },
    },
    {
      slug: 'dubai-islamic',
      name: 'Dubai Islamic',
      description:
        'Full-service Islamic banking with Sharia-compliant financial solutions. Open your account, apply for loans, and access all banking services.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/dubai islamic bank.jpeg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/Dubai Islamic Bank web.JPG',
      mobileViewImage: null,
      category: 'Bank',
      contact: {
        phone: '+971-50-501-8610',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      isTopPick: true,
      mapPosition: { x: 40, y: 50 },
    },
    {
      slug: 'ubl',
      name: 'UBL',
      description:
        'Universal banking services with ATM access. Personal and business banking solutions available.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/ubl.jpeg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/ubl web.JPG',
      mobileViewImage: null,
      category: 'Bank',
      contact: {
        phone: '+971-50-501-8610',
      },
      floor: floorsMap['1st'],
      floorId: floorsMap['1st']?.id,
      mapPosition: { x: 45, y: 55 },
    },
    {
      slug: 'al-raj',
      name: 'Al Raj',
      description:
        'Premium banking services with comprehensive financial solutions. Personal and business banking with dedicated customer service.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/AlRajLogo.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/Al Raj web.JPG',
      mobileViewImage: null,
      category: 'Bank',
      contact: {
        phone: '+971-50-501-8610',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 50, y: 60 },
    },
    {
      slug: 'derma-orchid',
      name: 'Derma Orchid',
      description:
        'Aesthetic & Skincare Clinic. Highly qualified team of dermatologists, cosmetologists, and certified aestheticians. Offering a wide range of treatments including laser hair removal, whitening, HIFU, BB Glow, PRP, Hydra Facial, hair transplant, chemical peeling, thread lifting, Botox, fillers, Pico Laser, carbon facial, permanent makeup, tattoo removal, and slimming drips. Ladies only.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/derma orchard.jpg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/derma orchid web.JPG',
      mobileViewImage: '/Services/derma orchid mobile.JPG',
      category: 'Clinic',
      contact: {
        phone: '+92-332-9785371',
        email: 'info@dermaorchid.com',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 55, y: 65 },
      isTopPick: true,
    },
    {
      slug: 'aesthetics-and-dental-works',
      name: 'Aesthetics and Dental Works',
      description:
        'Dental Clinic & Cosmetic Centre offering comprehensive dental and aesthetic services. Services include Dental Implants/Bridges, Dentures/Crowns, Dental cleaning & whitening, Fixed Braces, Hydrafacial/Chemical peel, PRP for Hair & face, and Full body whitening. Experience expert care for your dental and cosmetic needs.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/aesthetic and dental works.jpg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/aesthetic n dental work web.JPG',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/aesthetic n dental work mobile.JPG',
      category: 'Clinic',
      contact: {
        phone: '+92-333-5545887',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 60, y: 70 },
    },
    {
      slug: 'imc',
      name: 'IMC Integrative Medical Center',
      description:
        'Integrative Medical Center offering comprehensive dental care, holistic skin care, and advanced IV therapies. Services include Integrative Dental Care, Holistic Skin Care, Whitening Injections, Glutathione Drips, Skin Brightening Shots, Fat Loss Drips, Stamina Boosters, Immunity Support Drips, IV Probiotics & Peptides, Nutritional Intravenous Therapy, NAD+ Glutathione Therapy, IV for Anti Aging, and Male Hormone Enhancers. Your family dental clinic and skin care destination.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/IMC.jpg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/imc web.JPG',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/imc mobile.JPG',
      category: 'Clinic', 
      contact: {
        phone: '+92-51-6107253'
      },
      floor: floorsMap['2nd'],
      floorId: floorsMap['2nd']?.id,
      mapPosition: { x: 65, y: 75 },
    },
    {
      slug: 'pakistan-currency-exchange',
      name: 'Pakistan Currency Exchange',
      description:
        'Professional currency exchange services for all major currencies. We buy and sell currencies at competitive rates. Also offering international money transfer services through Western Union, MoneyGram, and Ria Money Transfer. Convenient and secure currency exchange for all your travel and business needs.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/pakistan currencey exchange.jpg',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/pakistan currency exchange web.JPG',
      mobileViewImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/pakistan currency exchange mobile.JPG',
      category: 'Currency Exchange',
      contact: {
        phone: '+971-50-501-8611',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 70, y: 80 },
    },
    {
      slug: 'mosque',
      name: 'Mosque',
      description:
        'A beautifully designed prayer hall providing a serene and peaceful space for daily prayers and spiritual reflection. Open to all visitors seeking a moment of tranquility and connection.',
      logo: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/logo/Mosque.png',
      backgroundImage: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/Services/mosq web.JPG',
      mobileViewImage: null,
      category: 'Religious',
      contact: {
        phone: '+971-50-501-8612',
      },
      floor: floorsMap['Ground'],
      floorId: floorsMap['Ground']?.id,
      mapPosition: { x: 75, y: 85 },
    },
  ];

  for (const data of samples) {
    const service = serviceRepository.create(data);
    await serviceRepository.save(service);
    console.log(`Created service: ${service.name}`);
  }
}

