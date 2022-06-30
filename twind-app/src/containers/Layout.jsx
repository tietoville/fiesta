import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-200">
            <Header>
                <Logo />
                <Navigation />
            </Header>
            <main>
                <div className="flex justify-center">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
