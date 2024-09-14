import { SimpleGrid, ThemeIcon, Text, Stack, Flex, Box, Image, Group, Drawer, Title, Card } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMenu2, IconSquareRoundedCheck } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

export const About = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [opened, { open, close }] = useDisclosure(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuClick = (path) => {
        if (path.startsWith('#')) {
            // Scroll to the section
            const sectionId = path.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            close(); // Close the drawer after navigating
        } else {
            navigate(path); // Navigate for regular routes
            close();
        }
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Projects', path: '/projects' },
        { name: 'About us', path: '/aboutus' },
        { name: 'Contact us', path: '/contact' }
    ];

    return (
        <>
            <Box mih={'100dvh'}>
                <Flex bg={'black'} w={'100%'} p={{ base: 20, md: 40 }} align={'center'} justify={'space-between'}>
                    <Image onClick={() => navigate('/')} style={{ cursor: 'pointer' }} src='/HLogo.svg' alt='logo' h={40} />
                    <IconMenu2 onClick={open} color='white' />
                </Flex>

                <Stack py={isMobile ? 20 : 40} px={isMobile ? 20 : 180} gap={5}>
                    <Title style={{ fontFamily: 'Montserrat Alternates' }}>About us</Title>
                    <Text ta={'justify'} >
                        At Buildify, we believe that architecture is more than just building structures; it’s about creating spaces that
                        inspire, connect, and enhance lives. With over 3+ years of experience in the industry, we have established ourselves
                        as a leading architecture firm, offering innovative design solutions that blend creativity, functionality, and
                        sustainability. Our team of talented architects, designers, and engineers work collaboratively to bring your vision
                        to life. Whether it's residential, commercial, or public projects, we are dedicated to crafting spaces that reflect
                        the unique identity and needs of our clients. From the initial concept to the final construction, we ensure that
                        every detail is meticulously planned and executed with precision. At the heart of our design philosophy is a
                        commitment to sustainability. We prioritize eco-friendly materials, energy-efficient designs, and environmentally
                        responsible practices to create buildings that not only stand the test of time but also contribute positively to the
                        environment. Our projects are designed to be both aesthetically pleasing and functional, seamlessly integrating
                        modern technology with timeless design principles. We pride ourselves on building strong relationships with our
                        clients. Every project begins with understanding your goals, lifestyle, and vision, and we work closely with you
                        throughout the entire process to ensure your dream becomes a reality. Our client-centered approach ensures that each
                        project is a reflection of your aspirations, delivered on time and within budget. At Buildify, we are passionate
                        about transforming spaces and creating environments where people can live, work, and thrive. Let us help you design
                        the future you envision.
                    </Text>{' '}
                    <br />
                    <Text size='xl' fw={'bold'}>
                        Our Services
                    </Text>
                    <SimpleGrid
                    mt={10}
                        cols={{ base: 1, sm: 2, lg: 3 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}>
                        {servicesData.map((item, index) => (
                            <Card shadow='lg' p={'lg'} radius={'lg'}  withBorder key={index}>
                                <ThemeIcon mb={10} variant="light" color='red' radius='lg' size='xl'>
                                    <IconSquareRoundedCheck style={{ width: '70%', height: '70%' }} />
                                </ThemeIcon>
                                <Text  size='md'>
                                    {item}
                                </Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Box>

            <Drawer
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                size={'xs'}
                position='right'
                withCloseButton={false}
                opened={opened}
                onClose={close}>
                <Stack h={'96vh'} p={20} justify='space-between'>
                    <Stack gap={20}>
                        {menuItems.map((item) => (
                            <Text
                                className='hvrred'
                                onClick={() => handleMenuClick(item.path)}
                                key={item.name}
                                fw={location.pathname === item.path ? 'bold' : 'normal'}
                                c={location.pathname === item.path ? 'red' : 'black'}>
                                {item.name}
                            </Text>
                        ))}
                    </Stack>

                    <Box>
                        <Group gap={20} pb={{ base: 20, md: 40 }}>
                            <IconBrandFacebook className='soc-icon' color='white' />
                            <IconBrandInstagram className='soc-icon' color='white' />
                            <IconBrandYoutube className='soc-icon' color='white' />
                        </Group>
                        <Stack gap={10} justify='space-between'>
                            <Text size='sm' c={'dark'}>
                                &#169; Buildfy Design Co.
                            </Text>
                            <Text size='sm' c={'dark'}>
                                Design & Developed by{' '}
                                <span
                                    style={{ cursor: 'pointer', color: '#8D37EF' }}
                                    onClick={() => window.open('https://www.imiot.co.in/', '_blank')}>
                                    Imiot Tech
                                </span>
                            </Text>
                        </Stack>
                    </Box>
                </Stack>
            </Drawer>
        </>
    );
};

const servicesData = [
    'Architecture Design and Interior Design (with 3D and walkthrough)',
    'Landscape Design',
    'Approvals from concerned Authorities',
    'Preparation of relevant drawing/sketches for execution of work on site',
    'Review of sub Consultants shop drawings if any',
    'Site visit/inspection',
    'Construction material quality Testing',
    'Quantity surveying',
    'Building valuation'
];
