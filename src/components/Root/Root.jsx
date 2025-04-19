import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div style={{"display": "flex", "gap": "20px"}}>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;