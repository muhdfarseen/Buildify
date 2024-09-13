import { useState } from 'react';
import { Flex, Image, Modal, Text, Title } from '@mantine/core';
import { CustCard } from '../Card/CustCard';
import { useDisclosure } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import { CardData } from './CardData';

export const ProjectGrid = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleCardClick = (project) => {
        setCurrentProject(project);
        open();
    };

    return (
        <div id='projectcard'>
            <Flex my={40} px={{ base: 0, md: 40 }} wrap={'wrap'} justify={'center'} align={'center'}>
                {CardData.map((item) => (
                    <CustCard
                        onClick={() => handleCardClick(item)}
                        key={item.title}
                        img={item.img}
                        title={item.title}
                        subheading={item.subheading}
                        desc={item.desc}
                    />
                ))}
            </Flex>

            {currentProject && (
                <Modal radius={'lg'} size={'xl'} opened={opened} onClose={close} title={currentProject.title}>
                    <Carousel withIndicators height={260} slideSize='60%' slideGap='md' loop>
                        {currentProject.modalContent.images.map((image, index) => (
                            <Carousel.Slide key={index}>
                                <Image fit='cover' height={260} radius={'lg'} src={image} />
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                    <Title mt={20}>{currentProject.title}</Title>
                    <Text c={'dimmed'}>{currentProject.subheading}</Text>
                    <Text mt={10}>{currentProject.modalContent.description}</Text>
                </Modal>
            )}
        </div>
    );
};
