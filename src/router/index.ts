import App from '../view/App';
import Home from '../view/Home';
import Hot from '../view/Hot';
// import Link from '../views/Link';
// import Other from '../views/Other';

const routes = [
    {
        path: '/App',
        component: App
    },
    {
        path: '/hot',
        component: Hot,
    },
    {
        path: '',
        component: Home
    }
];

export default routes;