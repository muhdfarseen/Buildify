import { Center, Stack, Title, Text, Box, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronRight } from '@tabler/icons-react';
import { CarouselCard } from '../Carousel/CarouselCard';

export const Testimonials = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            <Stack p={40}>
                <Title
                    ta={{ base: 'left', md: 'center' }}
                    fw={700}
                    order={isMobile ? 3 : 1}
                    style={{ fontFamily: 'Montserrat Alternates' }}>
                    Testimonials
                </Title>
                <Center>
                    <Text ta={{ base: 'left', md: 'center' }} w={{ base: '100%', md: '40%' }} size={isMobile ? 'sm' : 'lg'}>
                        Discover what our clients have to say about their experience working with us. See how we turn their vision into
                        reality and consistently surpass their expectations.
                    </Text>
                </Center>
            </Stack>

            <Center>
                <Box w={{ base: '90%', md: 'calc(80% - 80px)' }}>
                    <Carousel slideSize={{ base: '100%', md: '50%' }} slideGap='md' loop dragFree withIndicators>
                        <Carousel.Slide>
                            <CarouselCard />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <CarouselCard />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <CarouselCard />
                        </Carousel.Slide>
                    </Carousel>
                </Box>
            </Center>
            <Text my={40} ta={{ base: 'left', md: 'center' }} pl={{ base: 40, md: 0 }}>
                <Button color='red' rightSection={<IconChevronRight />} variant='light'>
                    Watch on Youtube
                </Button>
            </Text>
        </div>
    );
};
