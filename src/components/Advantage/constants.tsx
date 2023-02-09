import ewalletPic from '@public/images/eWallet.png';
import partnersPic from '@public/images/people.png';
import navigationPic from '@public/images/navigation.png';
import carPic from '@public/images/car-white-svgrepo-com.svg'

export const advantageContent = [
  {
    type: 'payment',
    title: 'Удобная оплата',
    subtitle: `Команда Prix.kz безустанно трудится над тем, чтобы процесс оплаты прошел гладко и без проблем`,
    text: '',
    flexReverse: false,
    image: carPic,
  },
  {
    type: 'partners',
    title: 'Большой выбор партнеров',
    subtitle: 'Мы отбираем исключительно проверенных и надежных партнеров',
    text: 'Удобную платформа для подбора и покупки авто из зарубежа и актуальная база поможет выбрать автомобиль мечты, а наши проверенные партнеры',
    flexReverse: true,
    image: partnersPic,
  },
  {
    type: 'gps',
    title: 'GPS трекинг',
    subtitle:
      'Интуитивно простой интерфейс поможет без труда подобрать автомобиль и продовца',
    text: 'А интегрированные системы гарантируют Вашу осведомленность в процессах выкупа, доставки и оформления авто',
    flexReverse: false,
    image: navigationPic,
  },
];
