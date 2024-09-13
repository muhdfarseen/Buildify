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
            images: [a, b, c],
            description: (
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste sapiente quia id placeat veritatis quos eaque
                    magni architecto provident consequuntur quibusdam, in velit iure nam laborum facere accusamus. Tempora. Amet reiciendis
                    impedit natus id molestiae sint aperiam in recusandae ad eaque veritatis tenetur totam, aliquid magni assumenda
                    consequuntur dicta provident quaerat corrupti numquam maxime doloribus soluta asperiores. Molestias, dolorum.
                </div>
            )
        }
    },
    {
        img: b,
        title: 'Office Project',
        subheading: 'Bangalore, Karnataka',
        desc: '5000 Sq. ft. (10 Cents)',
        modalContent: {
            images: [b, c, a, b, c],
            description: (
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste sapiente quia id placeat veritatis quos eaque
                    magni architecto provident consequuntur quibusdam, in velit iure nam laborum facere accusamus. Tempora. Amet reiciendis
                    impedit natus id molestiae sint aperiam in recusandae ad eaque veritatis tenetur totam, aliquid magni assumenda
                    consequuntur dicta provident quaerat corrupti numquam maxime doloribus soluta asperiores. Molestias, dolorum.
                </div>
            )
        }
    },
    {
        img: c,
        title: 'Office Renovation',
        subheading: 'Mumbai, Maharashtra',
        desc: '2000 Sq. ft. (5 Cents)',
        modalContent: {
            images: [c, d, a, b, c],
            description: (
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste sapiente quia id placeat veritatis quos eaque
                    magni architecto provident consequuntur quibusdam, in velit iure nam laborum facere accusamus. Tempora. Amet reiciendis
                    impedit natus id molestiae sint aperiam in recusandae ad eaque veritatis tenetur totam, aliquid magni assumenda
                    consequuntur dicta provident quaerat corrupti numquam maxime doloribus soluta asperiores. Molestias, dolorum.
                </div>
            )
        }
    },
    {
        img: d,
        title: 'Shopping Mall',
        subheading: 'Chennai, Tamil Nadu',
        desc: '10000 Sq. ft. (20 Cents)',
        modalContent: {
            images: [d, a, a, b, c],
            description: (
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste sapiente quia id placeat veritatis quos eaque
                    magni architecto provident consequuntur quibusdam, in velit iure nam laborum facere accusamus. Tempora. Amet reiciendis
                    impedit natus id molestiae sint aperiam in recusandae ad eaque veritatis tenetur totam, aliquid magni assumenda
                    consequuntur dicta provident quaerat corrupti numquam maxime doloribus soluta asperiores. Molestias, dolorum.
                </div>
            )
        }
    }
];
