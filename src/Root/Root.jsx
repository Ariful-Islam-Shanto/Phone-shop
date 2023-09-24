import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';



const Root = () => {

const location = useLocation();

useEffect(() => {
   if(location.pathname === '/') {
    document.title = `Phone-Home`
   }
   else{
    document.title = `Phone ${location.pathname.replace('/', '-')}`;
   }

   if(location.state) {
    document.title = `${location.state}`;
   }
},[location.pathname, location.state])

    return (
        <div className=''>
            <Navbar></Navbar>

            {/* //? This global context only works in outlet */}
            <Outlet context={'Hello I"m global context'}></Outlet>
        </div>
    );
};

export default Root;