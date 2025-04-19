import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    const navigation = useNavigation();

    const isNavigating = Boolean(navigation.location);
    // console.log(isNavigating)

    return (
        <div>
            <Header></Header>
            <div style={{"display": "flex", "gap": "20px"}}>
                <SideBar></SideBar>
                {isNavigating && <h1>Loading....</h1>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;