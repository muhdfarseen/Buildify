import { Flex } from '@mantine/core';
import { CustCard } from '../Card/CustCard';
import { CardData } from './CardData';

export const ProjectGrid = () => {
    return (
        <div id='projectcard'>
            <Flex my={40} px={{ base: 0, md: 40 }} wrap={'wrap'} justify={'center'} align={'center'}>
                {CardData.map((item) => (
                    <CustCard key={item.title} img={item.img} title={item.title} subheading={item.subheading} desc={item.desc} />
                ))}
            </Flex>
        </div>
    );
};
