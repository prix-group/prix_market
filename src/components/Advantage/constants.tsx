import ewalletPic from '../../../public/images/eWallet.png'
import partnersPic from '../../../public/images/people.png'
import navigationPic from '../../../public/images/navigation.png'

export const advantageContent = [
    {
        type: 'payment',
        title: 'Удобная оплата',
        subtitle: `Команда <span className="prix">Prix.kz </span> безустанно трудится над тем, чтобы процесс оплаты прошел гладко и без проблем`,
        text: '',
        flexReverse: false,
        image: ewalletPic,
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
        subtitle: 'Интуитивно простой интерфейс поможет без труда подобрать автомобиль и продовца',
        text: 'А интегрированные системы гарантируют Вашу осведомленность в процессах выкупа, доставки и оформления авто',
        flexReverse: false,
        image: navigationPic,
    }
]