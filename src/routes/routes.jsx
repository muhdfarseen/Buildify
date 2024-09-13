import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../components/Pages/HomePage';
import { NotFound } from '../components/Pages/NotFound';
import { Project } from '../components/Pages/Project';
import { Gallery } from '../components/Pages/Gallery';
import { Contactus } from '../components/Pages/Contactus';

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
        path: 'contact',
        element: <Contactus />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
