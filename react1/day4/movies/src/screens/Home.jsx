import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    );
}

export default Home;