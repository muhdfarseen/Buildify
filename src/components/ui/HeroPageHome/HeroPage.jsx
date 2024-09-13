import { BackgroundImage, Center, Text, Stack, Flex, Box, Image, Group, Drawer } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMenu2 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroImage from '../../../assets/HomeHero.jpg';

export const HeroPage = () => {
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

    const explreNavigation = () => {
        const sectionId = 'explore';
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Projects', path: '/projects' },
        { name: 'About us', path: '#about' },
        { name: 'Contact us', path: '/contact' }
    ];

    return (
        <>
            <Flex h={'100dvh'}>
                <BackgroundImage src={HeroImage}>
                    <Flex h={'100%'} direction={'column'} align={'center'} justify={'space-between'}>
                        <Flex w={'100%'} px={{ base: 20, md: 40 }} my={{ base: 20, md: 40 }} align={'center'} justify={'space-between'}>
                            <Image src='/HLogo.svg' alt='logo' h={40} />
                            <IconMenu2 onClick={open} color='white' />
                        </Flex>
                        <Stack>
                            <div className='hero-text'>
                                BU<span className='red'>i</span>LD<span className='red'>i</span>FY
                            </div>
                            <Center>
                                <Stack justify='center' align='center'>
                                    <Text size={isMobile ? 'sm' : 'lg'} ta={'center'} w={{ base: '80%', md: '60%' }} c='white'>
                                        A sense of creativity construction and Expertise in designing and building structures
                                    </Text>
                                    <div onClick={explreNavigation} className='hero-button'>
                                        EXPLORE US
                                    </div>
                                </Stack>
                            </Center>
                        </Stack>
                        <Group gap={20} pb={{ base: 20, md: 40 }}>
                            <IconBrandFacebook className='soc-icon' color='white' />
                            <IconBrandInstagram className='soc-icon' color='white' />
                            <IconBrandYoutube className='soc-icon' color='white' />
                        </Group>
                    </Flex>
                </BackgroundImage>
            </Flex>

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
                                Design & Developed by <span style={{ color: '#8D37EF' }}>Imiot Tech</span>
                            </Text>
                        </Stack>
                    </Box>
                </Stack>
            </Drawer>
        </>
    );
};
