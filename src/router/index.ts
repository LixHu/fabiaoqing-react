import App from '../view/App';
import Home from '../view/Home';
// import Link from '../views/Link';
// import Other from '../views/Other';

const routes = [
    {
        path: '/App',
        component: App
    },
    {
        path: '',
        component: Home,
        // routes: [
        //     {
        //         path: '/about',
        //         component: About
        //     },
        //     {
        //         path: '/link',
        //         component: Link
        //     }
        // ]
    }
];

export default routes;