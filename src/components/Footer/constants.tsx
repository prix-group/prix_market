import linkedinIcon from '../../../public/images/linkedin-svgrepo-com.svg';
import githubIcon from '../../../public/images/github-svgrepo-com.svg';
import instagramIcon from '../../../public/images/instagram-svgrepo-com.svg';
import facebookIcon from '../../../public/images/facebook-svgrepo-com.svg';

export const snListContent = [
    {
        name: 'linkedIn',
        url: 'https://www.linkedin.com/company/prixkz',
        image: linkedinIcon,
        alt: 'linkedIn icon',
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com',
        image: instagramIcon,
        alt: 'instagram icon',
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com',
        image: facebookIcon,
        alt: 'facebook icon',
    },
    {
        name: 'github',
        url: 'https://www.github.io',
        image: githubIcon,
        alt: 'github icon',
    }
]

export const footerListContent = [
    {
        title: 'Компания',
        list: [
            {
                title: 'О Нас',
                url: '#',
                id: 'about-us'
            },
            {
                title: 'Преимущества',
                url: '#',
                id: 'advantages'
            },
            {
                title: 'Миссия',
                url: '#',
                id: 'mission'
            }
        ],
        id: 'company'
    },
    {
        title: 'Справка',
        list: [
            {
                title: 'Служба Поддержки',
                url: '#',
                id: 'support'
            },
            {
                title: 'Конфиденциальность',
                url: '#',
                id: 'privacy'
            }
        ],
        id: 'help'
    },
    {
        title: 'Ресурсы',
        list: [
            {
                title: 'FAQ',
                url: '#',
                id: 'faq'
            },
            {
                title: 'YouTube',
                url: '#',
                id: 'youtube'
            },
            {
                title: 'How-to Blog',
                url: '#',
                id: 'blogging'
            },
            {
                title: 'Развитие',
                url: '#',
                id: 'development'
            }
        ],
        id: 'recourses'
    },

]
