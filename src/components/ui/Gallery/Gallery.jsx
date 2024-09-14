import { Center, Image, SimpleGrid } from '@mantine/core';
import a from '../../../assets/HomePage/HomePage1.jpeg';
import a1 from '../../../assets/Proj2/image 372.jpg';
import a2 from '../../../assets/Proj2/image 373.jpg';
import a3 from '../../../assets/Proj2/image 374.jpg';
import a4 from '../../../assets/Proj2/image 375.jpg';
import a5 from '../../../assets/Proj2/image 376.jpg';
import a6 from '../../../assets/Proj2/image 377.jpg';
import a7 from '../../../assets/Proj2/image 378.jpg';
import b from '../../../assets/HomePage/HomePage2.jpeg';
import b1 from '../../../assets/Proj1/project1.jpg';
import b2 from '../../../assets/Proj1/project2.jpg';
import c from '../../../assets/HomePage/HomePage3.jpeg';
import d from '../../../assets/HomePage/HomePage4.jpeg';
import e from '../../../assets/Proj3/ADMIN OFFICE 1 1.jpg';
import f from '../../../assets/Proj3/GAMING ROOM b 1.jpg';
import f1 from '../../../assets/Proj3/GAMING ROOM d 1.jpg';
import g from '../../../assets/Proj4/image 379.jpg';
import g1 from '../../../assets/Proj4/image 380.jpg';
import h from '../../../assets/Proj5/image 381.jpg';
import i from '../../../assets/Proj5/image 382.jpg';
import j from '../../../assets/Proj5/image 383.jpg';
import k from '../../../assets/Proj5/image 384.jpg';
import l from '../../../assets/Proj5/image 385.jpg';
import m from '../../../assets/Proj5/image 386.jpg';
import n from '../../../assets/Proj5/image 387.jpg';

export const GalleryImages = () => {
    return (
        <div id='gallery'>
            <Center mb={40}>
                <SimpleGrid
                    mt={'xl'}
                    w={{ base: '80%', md: '70%' }}
                    cols={{ base: 1, sm: 2, lg: 3 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}>
                    {imageData.map((image) => (
                        <Image radius={'lg'} key={image} h={300} fit='cover' src={image} />
                    ))}
                </SimpleGrid>
            </Center>
            {/* <Center my={'xl'}>
                <Card bg={'rgba(246, 246, 246, 1)'} h={500} shadow='xl' withBorder w={{ base: '80%', md: '70%' }} radius={'lg'}></Card>
            </Center> */}
        </div>
    );
};

const imageData = [h, i, j, k, l, m, n, a, a1, a2, a3, a4, a5, a6, a7, b, b1, b2, c, d, e, f, f1, g, g1];
