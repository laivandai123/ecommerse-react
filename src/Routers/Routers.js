import { lazy } from 'react';

const Routers = [
    {
        path: '/',
        component: lazy(() => import('@components/Homepage/Homepage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/Ourshop/Ourshop'))
    }
];
export default Routers;
