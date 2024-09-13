import a from '../../../assets/HomeProject.jpg';
import b from '../../../assets/OfficeProject.jpg';
import c from '../../../assets/OfficeRenovation.jpg';
import d from '../../../assets/ShoppingMall.jpg';

export const CardData = [
    {
        img: a,
        title: 'Home Project',
        subheading: 'Kannur, Kerala',
        desc: '3000 Sq. ft. (7 Cents)',
        modalContent: {
            images: [a, b],
            description: 'A beautiful home project located in Kannur, Kerala, spread over 7 cents with a total area of 3000 Sq. ft.'
        }
    },
    {
        img: b,
        title: 'Office Project',
        subheading: 'Bangalore, Karnataka',
        desc: '5000 Sq. ft. (10 Cents)',
        modalContent: {
            images: [b, c],
            description: 'An office project in Bangalore, offering modern workspaces spread over 5000 Sq. ft. on a 10 cent land.'
        }
    },
    {
        img: c,
        title: 'Office Renovation',
        subheading: 'Mumbai, Maharashtra',
        desc: '2000 Sq. ft. (5 Cents)',
        modalContent: {
            images: [c, d],
            description: 'A contemporary office renovation project in Mumbai, Maharashtra, covering an area of 2000 Sq. ft.'
        }
    },
    {
        img: d,
        title: 'Shopping Mall',
        subheading: 'Chennai, Tamil Nadu',
        desc: '10000 Sq. ft. (20 Cents)',
        modalContent: {
            images: [d, a],
            description: 'A large shopping mall in Chennai, Tamil Nadu, spanning 10000 Sq. ft. on a 20 cent property.'
        }
    }
];
