import { Flex, Box, Text, Stack, Title, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { CustCard } from '../Card/CustCard';
import { CardData } from './CardData';
import { useNavigate } from 'react-router-dom';

export const OurProjects = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();

    return (
        <Flex px={{ base: 0, md: 40 }} wrap={'wrap'} justify={'center'} align={'center'}>
            <Box p={{ base: '40', md: 0 }} pr={{ base: 0, md: '5%' }} w={{ base: '100%', md: '40%' }}>
                <Stack pl={{ base: 0, md: 20 }}>
                    <Title fw={700} order={isMobile ? 3 : 1} style={{ fontFamily: 'Montserrat Alternates' }}>
                        Our Projects
                    </Title>
                    <Text size={isMobile ? 'sm' : 'lg'}>
                        From concept to completion, we partner with our clients to bring their vision to life. Our goal is to deliver
                        exceptional results that exceed expectations
                    </Text>

                    <Button
                        onClick={() => navigate('/projects')}
                        w={'fit-content'}
                        color='red'
                        rightSection={<IconChevronRight />}
                        variant='light'>
                        Explore All Projects
                    </Button>
                </Stack>
            </Box>
            {CardData.map((item) => (
                <CustCard key={item.title} img={item.img} title={item.title} subheading={item.subheading} desc={item.desc} />
            ))}

            <Box p={{ base: '40', md: 0 }} pl={{ base: 0, md: '5%' }} w={{ base: '100%', md: '40%' }}>
                <Stack>
                    <Title fw={700} order={isMobile ? 3 : 1} style={{ fontFamily: 'Montserrat Alternates' }}>
                        Explore All
                    </Title>
                    <Text size={isMobile ? 'sm' : 'lg'}>
                        From concept to completion, we partner with our clients to bring their vision to life. Our goal is to deliver
                        exceptional results that exceed expectations
                    </Text>
                    <Button
                        onClick={() => navigate('/projects')}
                        w={'fit-content'}
                        color='red'
                        rightSection={<IconChevronRight />}
                        variant='light'>
                        Explore All Projects
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
};
