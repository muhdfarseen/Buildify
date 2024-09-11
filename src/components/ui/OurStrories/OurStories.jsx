import { Center, Stack, Title, Text, Card, SimpleGrid, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const OurStories = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();

    return (
        <div>
            <Stack mt={{ base: 0, md: 80 }} px={40}>
                <Title
                    ta={{ base: 'left', md: 'center' }}
                    fw={700}
                    order={isMobile ? 3 : 1}
                    style={{ fontFamily: 'Montserrat Alternates' }}>
                    Our Stories
                </Title>
                <Center>
                    <Text ta={{ base: 'left', md: 'center' }} w={{ base: '100%', md: '40%' }} size={isMobile ? 'sm' : 'lg'}>
                        From concept to completion, we partner with our clients to bring their vision to life. Our goal is to deliver
                        exceptional results that exceed expectations
                    </Text>
                </Center>
            </Stack>

            <Center>
                <SimpleGrid
                    w={{ base: 'calc(100% - 80px)', md: 'calc(80% - 80px)' }}
                    my={20}
                    cols={{ base: 1, sm: 2, lg: 3 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}>
                    <Card radius={'lg'} w={'100%'} h={'80vh'} shadow='xl' withBorder></Card>
                    <Card radius={'lg'} w={'100%'} h={'80vh'} shadow='xl' withBorder></Card>
                    <Card radius={'lg'} w={'100%'} h={'80vh'} shadow='xl' withBorder></Card>
                </SimpleGrid>
            </Center>

            <Text ta={{ base: 'left', md: 'center' }} pl={{ base: 40, md: 0 }}>
                <Button onClick={() => navigate('/gallery')} color='red' rightSection={<IconChevronRight />} variant='light'>
                    Explore Gallery
                </Button>
            </Text>
        </div>
    );
};
