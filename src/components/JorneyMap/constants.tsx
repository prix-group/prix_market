import partnersPic from '@public/images/people.png';
import navigationPic from '@public/images/navigation.png';
import carPic from '@public/images/car-white-svgrepo-com.svg';

export const advantageContent = [
  {
    order: 1,
    type: 'payment',
    text: 'Скопируй и вставь ссылку на авто на иностранном рынке',
    flexReverse: false,
    image: carPic,
  },
  {
    order: 2,
    type: 'partners',
    text: 'Удобную платформа для подбора и покупки авто из зарубежа',
    flexReverse: true,
    image: partnersPic,
  },
  {
    order: 3,
    type: 'gps',
    text: 'А интегрированные системы гарантируют Вашу',
    flexReverse: false,
    image: navigationPic,
  },
];
