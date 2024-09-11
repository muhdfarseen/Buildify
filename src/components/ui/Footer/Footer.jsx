import { Flex, Stack, Text, Group, Box, Image, Divider } from '@mantine/core';
import Logo from '/HLogo.svg';
import { IconMail, IconPhone } from '@tabler/icons-react';

export const Footer = () => {
    return (
        <>
            <Flex bg={'#090C0D'} id='contact' direction={'column'} align={'center'}>
                <Flex
                    id='about'
                    pt={50}
                    gap={50}
                    direction={{ base: 'column', md: 'row' }}
                    wrap={'wrap'}
                    justify={'space-between'}
                    w={{ base: '90%', md: '75%' }}>
                    <Box pt={10} h={60}>
                        <Image src={Logo} h={'100%'} w={'auto'} />
                    </Box>

                    {footerData.map((item) => (
                        <Stack key={item.title}>
                            <Text c={'white'} fw={700} size='sm'>
                                {item.title}
                            </Text>

                            {item.data.map((data) => (
                                <Text key={data} size='sm' c={'#C9C9C9'}>
                                    {data}
                                </Text>
                            ))}
                        </Stack>
                    ))}
                    <Stack>
                        <Group align='center'>
                            <IconPhone color='gray' />
                            <Text fw={700} size='sm' c={'#C9C9C9'}>
                                +91 1234 567 890
                            </Text>
                        </Group>
                        <Group align='center'>
                            <IconMail color='gray' />
                            <Text size='sm' c={'#C9C9C9'}>
                                info@buildify.com
                            </Text>
                        </Group>
                    </Stack>
                </Flex>

                <Divider color='gray' mt={40} w={{ base: '90%', md: '75%' }} />

                <Group align='center' py={20} gap={10} w={{ base: '90%', md: '75%' }} wrap='wrap' justify='space-between'>
                    <Text size='sm' c={'white'}>
                        {' '}
                        &#169; Buildfy Design Co.
                    </Text>
                    <Text size='sm' c={'white'}>
                        Design & Developed by <span style={{ color: '#8D37EF' }}>Imiot Tech</span>
                    </Text>
                </Group>
            </Flex>
        </>
    );
};

const footerData = [
    {
        title: 'What We Do',
        data: ['Interior Designing', 'Site Planning', '3D & Walk Around', 'Building Renovation', 'Project Consultation']
    },
    {
        title: 'Connect us',
        data: ['Buildify Design Co.', 'Alappuzha (Head office)', 'Ernakulam', 'Kannur']
    }
];
