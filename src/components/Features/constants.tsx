import ecommercePic from '../../../public/images/ecommerce.png';
import policyPic from '../../../public/images/policy.png';
import fixPic from '../../../public/images/fix.png';

export const cardsContent = [
  {
    id: 'marketplace',
    imageUrl: ecommercePic.src,
    imageAlt: 'feature',
    en: {
      title: 'USER-FRIENDLY MARKETPLACE',
      description:
        'Finding and choosing a car in any country has become much easier. Onward to the search!',
    },
    ru: {
      title: 'УДОБНЫЙ МАРКЕТПЛЕЙС',
      description:
        'Найти и выбрать авто в любой стране стало гораздо легче. Вперед к поиску',
    },
  },
  {
    id: 'pricing',
    imageUrl: policyPic.src,
    imageAlt: 'feature',
    en: {
      title: 'DIGITAL DOCS',
      description: 'Some description in english',
    },
    ru: {
      title: 'ЭЛЕКТРОННЫЕ ДОКУМЕНТЫ',
      description:
        'Партнеры предложат цены \n' +
        'на интересующие модели,\n' +
        ' где ты сможешь подобрать\n' +
        ' авто под свой бюджет.\n' +
        'Цены ниже рыночных!',
    },
  },
  {
    id: 'gps',
    imageUrl: fixPic.src,
    imageAlt: 'GPS ТРЕКИНГ',
    en: {
      title: 'CAR CHECKUP',
      description: 'Track the delivery of your car anywhere in the world',
    },
    ru: {
      title: 'ПРОВЕРКА АВТОМОБИЛЯ',
      description: 'Отслеживай доставку своего авто в любой точке мира',
    },
  },
];
