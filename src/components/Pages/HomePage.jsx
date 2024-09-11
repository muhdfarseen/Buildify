import { Footer } from '../ui/Footer/Footer';
import { HeroPage } from '../ui/HeroPageHome/HeroPage';
import { OurProjects } from '../ui/OurProjects/OurProjects';
import { OurStories } from '../ui/OurStrories/OurStories';
import { Testimonials } from '../ui/Testimanials/Testimonials';
import { Weare } from '../ui/Weare/Weare';

export const HomePage = () => {
    return (
        <>
            <HeroPage />

            <Weare />

            <OurProjects />

            <OurStories />

            <Testimonials />

            <Footer />
        </>
    );
};
