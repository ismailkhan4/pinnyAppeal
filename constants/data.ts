import icons from './icons';
import images from './images';

type CardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}[];

type CalcProps = {
  id: number;
  icon: string;
  title: string;
}[];

type EmergProps = {
  id: number;
  title: string;
  iconSrc: string;
  donors: number;
  imgSrc: string;
}[];

type FeaturedProps = {
  id: number;
  title: string;
  imgSrc: string;
}[];

type EventsProps = {
  id: number;
  title: string;
  imgSrc: string;
}[];

export const cardData: CardProps = [
  {
    id: 1,
    title: 'Round up',
    description: '$25 Round Up Last Month',
    imageUrl: icons.creditcard,
  },
  {
    id: 2,
    title: 'Quick Donate',
    description: '5 days since last donation',
    imageUrl: icons.bolt,
  },
  {
    id: 3,
    title: 'Akhirah Portfolio',
    description: '5 Compaigns Supported',
    imageUrl: icons.chart,
  },
  {
    id: 1,
    title: 'Auto Donate',
    description: 'Next Donation: Palestine Relief',
    imageUrl: icons.repeat,
  },
];

export const calculators: CalcProps = [
  { id: 1, icon: images.donation, title: 'Zakat' },
  { id: 2, icon: images.fidya, title: 'Zakat' },
  { id: 3, icon: images.aqiqah, title: 'Zakat' },
  { id: 4, icon: images.kafarrah, title: 'Kafarrah' },
];

export const emergencyResponse: EmergProps = [
  {
    id: 1,
    title: 'Donate for Pakistan Flood',
    donors: 250,
    iconSrc: icons.vector,
    imgSrc: images.image1,
  },
  {
    id: 2,
    title: 'Donate for Pakistan Flood',
    donors: 250,
    iconSrc: icons.vector,
    imgSrc: images.image2,
  },
];

export const featuredCauses: FeaturedProps = [
  {
    id: 1,
    title: 'Winter Relief For Yemen, Libya, Pales...',
    imgSrc: images.image1,
  },
  {
    id: 2,
    title: 'Winter Relief For Yemen, Libya, Pales...',
    imgSrc: images.image2,
  },
];

export const events: EventsProps = [
  {
    id: 1,
    title: 'Winter Relief For Yemen, Libya, Pales...',
    imgSrc: images.image3,
  },
  {
    id: 2,
    title: 'Winter Relief For Yemen, Libya, Pales...',
    imgSrc: images.image4,
  },
];
