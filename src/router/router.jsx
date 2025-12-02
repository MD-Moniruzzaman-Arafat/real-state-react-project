import { createBrowserRouter } from 'react-router';
import App from '../App';
import Loder from '../components/Loader/Loder';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Details from '../page/Details';
import Home from '../page/Home';
import { detailsLoader, fetchData } from '../utility';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
        loader: fetchData,
        hydrateFallbackElement: <Loder />,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: detailsLoader,
        hydrateFallbackElement: <Loder />,
      },
    ],
  },
  { path: 'register', Component: Register },
  { path: 'login', Component: Login },
]);
