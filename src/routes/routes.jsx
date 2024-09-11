import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../components/Pages/HomePage';
import { NotFound } from '../components/Pages/NotFound';
import { Project } from '../components/Pages/Project';
import { Gallery } from '../components/Pages/Gallery';

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
        path: '*',
        element: <NotFound />
    }
]);
