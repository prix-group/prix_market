import ecommercePic from '../../../public/images/ecommerce.png';
import policyPic from '../../../public/images/policy.png';
import fixPic from '../../../public/images/fix.png';

export const cardsContent = [
  {
    id: 'marketplace',
    imageUrl: ecommercePic.src,
    imageAlt: 'feature',
    title: 'УДОБНЫЙ МАРКЕТПЛЕЙС',
    description:
      'Найти и выбрать авто в любой стране стало гораздо легче. Вперед к поиску',
  },
  {
    id: 'pricing',
    imageUrl: policyPic.src,
    imageAlt: 'feature',
    title: 'ЭЛЕКТРОННЫЕ ДОКУМЕНТЫ',
    description:
      'Партнеры предложат цены \n' +
      'на интересующие модели,\n' +
      ' где ты сможешь подобрать\n' +
      ' авто под свой бюджет.\n' +
      'Цены ниже рыночных!',
  },
  {
    id: 'gps',
    imageUrl: fixPic.src,
    imageAlt: 'GPS ТРЕКИНГ',
    title: 'ПРОВЕРКА АВТОМОБИЛЯ',
    description: 'Отслеживай доставку своего авто в любой точке мира',
  },
];
