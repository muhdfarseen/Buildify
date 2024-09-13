import { SimpleGrid, Avatar, Text, Stack, Flex, Box, Image, Group, Drawer, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMenu2 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

export const Contact = () => {
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
        { name: 'About us', path: '#about' },
        { name: 'Contact us', path: '/contact' }
    ];

    return (
        <>
            <Box mih={'100dvh'}>
                <Flex bg={'black'} w={'100%'} p={{ base: 20, md: 40 }} align={'center'} justify={'space-between'}>
                    <Image src='/HLogo.svg' alt='logo' h={40} />
                    <IconMenu2 onClick={open} color='white' />
                </Flex>

                <Stack py={isMobile ? 20 : 40} pl={isMobile ? 20 : 180} gap={5}>
                    <Title style={{ fontFamily: 'Montserrat Alternates' }}>Connect us</Title>
                    <Text c={'dimmed'}>A sense of creativity construction and Expertise in designing and building structures</Text> <br />
                    <br />
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 5 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}>
                        {contacts.map((contact, index) => (
                            <Box key={index}>
                                <Avatar size='lg' src={contact.avatar} alt={contact.name} color='red'>
                                    {contact.initials}
                                </Avatar>
                                <Text mt={10} fw={600}>
                                    {contact.name}
                                </Text>
                                <Text size='sm'>{contact.email}</Text>
                                <Text size='sm'>{contact.phone}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                    <br />
                    <br />
                    <Text size='xl' fw={'bold'}>
                        Mail to us
                    </Text>
                    <Text>Buildifydesignco@gmail.com</Text>
                    <br />
                    <br />
                    <Text size='xl' fw={'bold'}>
                        Reach to us
                    </Text>
                    <Text>Buildify Design Co.</Text>
                    <Text>Kurishinkal buildings , Near Mulamoottil finances</Text>
                    <Text>Malilamukku North, Alappuzha</Text>
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
                                Design & Developed by <span style={{ color: '#8D37EF' }}>Imiot Tech</span>
                            </Text>
                        </Stack>
                    </Box>
                </Stack>
            </Drawer>
        </>
    );
};

const contacts = [
    {
        name: 'Vishnu Prasad',
        email: 'vishnu@buildifydesign.com',
        phone: '+1 (555) 123-4567',
        avatar: 'https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        initials: 'VP'
    },
    {
        name: 'Sanu M',
        email: 'sanu@buildifydesign.com',
        phone: '+1 (555) 987-6543',
        avatar: 'https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        initials: 'SM'
    },
    {
        name: 'Sushama E K',
        email: 'sushama@buildifydesign.com',
        phone: '+1 (555) 456-7890',
        avatar: 'https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        initials: 'SE'
    },
    {
        name: 'Sherimol Thampi',
        email: 'sherimol@buildifydesign.com',
        phone: '+1 (555) 321-7890',
        avatar: 'https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        initials: 'ST'
    }
];
