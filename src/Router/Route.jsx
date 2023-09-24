import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Components/Home/Home';

import LogIn from '../Components/LogIn/LogIn';
import Favourites from '../Components/Favourites/Favourites';
import Details from '../Components/Section Components/See Details Card/Details';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/favorites',
                element: <Favourites></Favourites>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/phone/:id',
                element: <Details></Details>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default Route;