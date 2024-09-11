import { Card, Stack, Text, Image, Avatar } from '@mantine/core';

export const CarouselCard = () => {
    return (
        <div>
            <Card h={'100%'} shadow='sm' padding='lg' radius={'lg'} withBorder>
                <Card.Section>
                    <Image
                        src='https://images.unsplash.com/photo-1603665185806-510f5376ce99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        height={160}
                        alt='Norway'
                    />
                </Card.Section>

                <Stack pt={20} gap={5}>
                    <Avatar
                        size={'lg'}
                        src={
                            'https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }
                        alt='Vitaly Rtishchev'
                        color='red'>
                        VR
                    </Avatar>
                    <Text fw={700}>Jessy Thomas</Text>
                    <Text c='dimmed' size='sm'>
                        (Rt. Forest Officer, Govt. of Kerala, Palakkad)
                    </Text>

                    <Text size='md'>
                        Explore testimonials from our satisfied clients in the home construction industry. Witness firsthand how we bring
                        their dreams to life and consistently exceed their expectations. Explore testimonials from our satisfied clients in
                        the home construction industry. Witness firsthand how we bring their dreams to life and consistently exceed their
                        expectations.
                    </Text>
                </Stack>
            </Card>
        </div>
    );
};
