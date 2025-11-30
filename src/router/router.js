import { createBrowserRouter } from 'react-router';
import App from '../App';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../page/Home';
import { fetchData } from '../utility';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
        loader: fetchData,
      },
    ],
  },
  { path: 'register', Component: Register },
  { path: 'login', Component: Login },
]);
