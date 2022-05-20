import Home from '../Pages/Home';
import About from '../Pages/About';
import Login from '../Pages/Login';
import Contact from '../Pages/Contact';

export const publicRoute = [
    { path: '/', Component: Home },
    { path: '/home', Component: Home },
    { path: '/about', Component: About },
    { path: '/contact', Component: Contact },
    { path: '/login', Component: Login },
];