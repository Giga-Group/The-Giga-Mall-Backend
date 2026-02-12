import { DataSource } from 'typeorm';
import { Offer } from '../../entities/offer.entity';

export async function seedOffers(dataSource: DataSource): Promise<void> {
  const offerRepository = dataSource.getRepository(Offer);

  const samples: Partial<Offer>[] = [
    {
      title: 'Bonanza Satrangi',
      description:
        'Get up to 50% off on premium fashion and beauty products! Discover exclusive deals on clothing, makeup, and accessories from Bonanza Satrangi. Limited time offer.',
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/bonanza_satrangi_2.png',
      slug: 'bonanza-satrangi',
      type: 'beauty',
      startDate: '01 Jan 2026',
      endDate: '31 Jan 2026',
    },
    {
      title: 'Breakout Sale of Year',
      description:
        'Score amazing deals on fashion and lifestyle products. Up to 40% off on selected items including the latest collections and trendy pieces.',
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/breakout.png',
      slug: 'breakout-sale-of-year',
      type: 'fashion',
      startDate: '15 Dec 2025',
      endDate: '31 Dec 2025',
    },
    {
      title: 'Bloom Holiday Special',
      description:
        'Celebrate the holidays with Bloom! Enjoy special discounts on fashion, accessories, and lifestyle products. Perfect for your holiday shopping.',
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/bloom.png',
      slug: 'bloom-holiday-special',
      type: 'fashion',
      startDate: '10 Dec 2025',
      endDate: '25 Dec 2025',
    },
    {
      title: 'Kayseria Fashion Week Sale',
      description:
        "Refresh your wardrobe with Kayseria's latest collections at unbeatable prices. Discover trendy pieces for every occasion with exclusive discounts.",
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/kayseria.png',
      slug: 'kayseria-fashion-week',
      type: 'fashion',
      startDate: '05 Dec 2025',
      endDate: '20 Dec 2025',
    },
    {
      title: 'Junaid Jamshaid Sales',
      description:
        "Pamper yourself with premium fashion and lifestyle products. Special offers on Junaid Jamshaid's signature collections for elegant and stylish looks.",
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/Junaid.png',
      slug: 'junaid-jamshaid-sales',
      type: 'beauty',
      startDate: '20 Dec 2025',
      endDate: '05 Jan 2026',
    },
    {
      title: 'Hardees Holiday Big Sale',
      description:
        "Satisfy your cravings with Hardees's holiday specials! Enjoy amazing deals on burgers, fries, and meals. Buy one get one free on selected items.",
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/hardees.png',
      slug: 'hardees-holiday-big-sale',
      type: 'dining',
      startDate: '01 Dec 2025',
      endDate: '31 Dec 2025',
    },
    {
      title: 'Cheezious Special Offer',
      description:
        'Indulge in Cheezious special offers! Enjoy delicious cheesy delights with exclusive discounts. Discover mouth-watering pizzas and cheesy treats at special prices.',
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/cheezious.png',
      slug: 'cheezious-special-offer',
      type: 'dining',
      startDate: '12 Dec 2025',
      endDate: '28 Dec 2025',
    },
    {
      title: 'McDonalds Super Savings',
      description:
        "Enjoy super savings at McDonald's! Get amazing deals on your favorite burgers, fries, and meals. Special pricing on combo meals and limited-time offers.",
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/mcdonalds.png',
      slug: 'mcdonalds-super-savings',
      type: 'dining',
      startDate: '08 Dec 2025',
      endDate: '24 Dec 2025',
    },
    {
      title: 'Pizza Hut Buy 1 Get 1',
      description:
        "Enjoy Pizza Hut's amazing buy one get one offer! Get your favorite pizzas, sides, and drinks with exclusive deals. Perfect for sharing with family and friends.",
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/pizzahut.png',
      slug: 'pizzahut-buy-1-get-1',
      type: 'dining',
      startDate: '15 Dec 2025',
      endDate: '30 Dec 2025',
    },
    {
      title: 'Wild Wing Special Offer',
      description:
        'Savor the flavor at Wild Wing! Enjoy amazing deals on wings, burgers, and more. Special offers on combo meals and signature dishes.',
      image: 'https://rawcdn.githack.com/RazaisHere/svgs/refs/heads/main/images/offers/wildwing.png',
      slug: 'wildwing-special-offer',
      type: 'dining',
      startDate: '15 Dec 2025',
      endDate: '30 Dec 2025',
    },
  ];

  for (const data of samples) {
    // Check if offer already exists by slug
    const existing = await offerRepository.findOne({ where: { slug: data.slug } });
    if (!existing) {
      const offer = offerRepository.create(data);
      await offerRepository.save(offer);
      console.log(`Created offer: ${offer.title}`);
    } else {
      console.log(`Offer already exists: ${data.slug}`);
    }
  }
}

