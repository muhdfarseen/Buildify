import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../components/Pages/HomePage';
import { NotFound } from '../components/Pages/NotFound';
import { Project } from '../components/Pages/Project';
import { Gallery } from '../components/Pages/Gallery';
import { Contactus } from '../components/Pages/Contactus';
import { Aboutus } from '../components/Pages/Aboutus';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: 'projects',
        element: <Project />
    },
    {
        path: 'gallery',
        element: <Gallery />
    },
    {
        path: 'aboutus',
        element: <Aboutus/>
    },
    {
        path: 'contact',
        element: <Contactus />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
