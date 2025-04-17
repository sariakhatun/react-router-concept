import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'
const Root = () => {
    let navigation = useNavigation()
    let isNavigating = Boolean(navigation.location)
    return (
        <div>
            <Header/>
            <div className='root-main'>
                <Sidebar></Sidebar>
                {isNavigating && <span>Loading...</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;