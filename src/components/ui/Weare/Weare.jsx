import { Flex, Image, Text, Stack, Title, Button, Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import img from '../../../assets/HomePage/weare.jpg';
import img2 from '../../../assets/HomePage/weare2.jpg';
import { IconChevronRight } from '@tabler/icons-react';

export const Weare = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const navigation = () => {
        const sectionId = 'aboutus';
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Center>
                <Flex
                    px={{ base: 0, md: 50 }}
                    py={30}
                    gap={30}
                    id='explore'
                    direction={{ base: 'column', md: 'row' }}
                    justify={'space-between'}
                    w={{ base: '90%', md: '80%' }}
                    wrap={'wrap'}>
                    <Flex w={{ base: '100%', md: '50%' }} align={'center'}>
                        <Stack w={{ base: '100%', md: '80%' }}>
                            <Text size={isMobile ? 'sm' : 'lg'}>We’re</Text>
                            <Title fw={700} order={isMobile ? 3 : 1} style={{ fontFamily: 'Montserrat Alternates' }}>
                                BUiLDiFY Design CO.
                            </Title>
                            <Text size={isMobile ? 'sm' : 'lg'}>
                                We believe in the power of design to transform spaces and lives. Our team of passionate architects is
                                dedicated to creating innovative, sustainable, and beautiful environments.
                            </Text>
                            <Button onClick={navigation} w={'fit-content'} color='red' rightSection={<IconChevronRight />} variant='light'>
                                Know more about us
                            </Button>
                        </Stack>
                    </Flex>

                    <Image src={img} radius={10} fit='contain' w={{ base: '100%', md: '40%' }} h={{ base: '50%', md: '100%' }} />
                </Flex>
            </Center>
            <Center mb={{ base: 0, md: 20 }} px={{ base: 0, md: 60 }}>
                <Image id='aboutus' radius={10} src={img2} fit='contain' w={{ base: '90%', md: '80%' }} />
            </Center>
        </>
    );
};
