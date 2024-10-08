import { SimpleGrid, Avatar, Text, Stack, Flex, Box, Image, Group, Drawer, Title, Card } from '@mantine/core';
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
                    <Title style={{ fontFamily: 'Montserrat Alternates' }}>Connect us</Title>
                    <Text c={'dimmed'}>A sense of creativity construction and Expertise in designing and building structures</Text> <br />
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 3 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}>
                        {contacts.map((contact, index) => (
                            <Card p={'lg'} radius={'lg'} withBorder key={index}>
                                <Group align='start' gap={20}>
                                    <Avatar size='lg' radius={'md'} src={contact.avatar} alt={contact.name} color='red'>
                                        {contact.initials}
                                    </Avatar>
                                    <Box>
                                        <Text size='xl' fw={600}>
                                            {contact.name}
                                        </Text>
                                        <Text size='sm'>{contact.email}</Text>
                                        <Text fw={600} size='md'>
                                            {contact.phone}
                                        </Text>
                                    </Box>
                                </Group>
                            </Card>
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

const contacts = [
    {
        name: 'Ar. Vishnu Prasad',
        email: 'Architect',
        phone: '828 984 7438',
        initials: 'VP'
    },
    {
        name: 'Ar. Sanu Madathil',
        email: 'Architect',
        phone: '755 989 2762',
        initials: 'SM'
    },
    {
        name: 'Ar. Nandini Kumari',
        email: 'Architect',
        phone: '812 969 9047',
        initials: 'NK'
    },
    {
        name: 'Sherimol Thampi',
        email: 'Empanelled Licensed',
        phone: '859 001 5087',
        initials: 'ST'
    },
    {
        name: 'Sushama E K ',
        email: 'Senior Draughtsman',
        phone: '894 326 5088',
        initials: 'SE'
    }
];
