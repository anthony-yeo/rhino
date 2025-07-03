import React from "react";

import { Outlet, Link } from "react-router-dom";

import './layout.css';

const Layout: React.FC = () => {
    return (
        <div>
            <header className="site-header">
                <nav className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/blogs">TBD</Link>
                    <Link to="/contact">TBD</Link>
                </nav>

                <main className="page-content">
                    <Outlet />
                </main>
                
            </header>
        </div>
    );
};

export default Layout;