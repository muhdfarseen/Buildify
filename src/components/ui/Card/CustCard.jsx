import { Box, BackgroundImage, Flex, Title, Text, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const CustCard = (props) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Box p={20} w={{ base: '100%', md: '40%' }}>
            <BackgroundImage style={{ borderRadius: '10px' }} src={props.img}>
                <Flex h={'70vh'} justify={'start'} align={'end'}>
                    <Stack style={{ borderRadius: '0px 10px' }} bg={'white'} pl={20} pr={40} py={20} gap={4}>
                        <Title fw={700} order={isMobile ? 3 : 2} style={{ fontFamily: 'Montserrat Alternates' }}>
                            {props.title}
                        </Title>
                        <Text c={'dimmed'} size={isMobile ? 'sm' : 'lg'}>
                            {props.subheading}
                        </Text>
                        <Text fw={600} c={'red'} size={isMobile ? 'xs' : 'xs'}>
                            {props.desc}
                        </Text>
                    </Stack>
                </Flex>
            </BackgroundImage>
        </Box>
    );
};
