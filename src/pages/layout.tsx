import React from 'react';
import {Outlet} from 'react-router-dom';
import classes from '../styles/layout.module.scss';
import Header from "../components/header/header";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main className={classes.main}>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;
