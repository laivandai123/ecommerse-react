import { lazy } from 'react';

const Routers = [
    {
        path: '/',
        component: lazy(() => import('@components/Homepage/Homepage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    }
];
export default Routers;
