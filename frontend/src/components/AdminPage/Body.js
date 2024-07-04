import React, { useState, useEffect } from 'react';
import HomePage from './Home';
import Customers from './Customers'
import Products from './Products.js'

import '../../Css/admin.css';

function Header() {
    const [content, setContent] = useState(<HomePage />);

    useEffect(() => {
        // Feather ikonlarını yüklemek için
        import('feather-icons').then(feather => {
            feather.replace();
        });
    }, []);

    const showHome = () => {
        setContent(<HomePage />);
    }

    const showProduct = () => {
        setContent(<Products/>); // Burayı değiştirin, null döndürecek
    };

    const showCustomer = () => {
        setContent(<Customers/>);
    };

    const showCategory = () => {
        setContent(null); // Burayı değiştirin, null döndürecek
    };

    const showAddress = () => {
        setContent(null); // Burayı değiştirin, null döndürecek
    };

    return (
        <div className='container'>
            <div className="header2">
                <nav className="navbar2">
                    <ul className="navbar__menu2">
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showHome}>
                                <i data-feather="home"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showProduct}>
                                <i data-feather="message-square"></i>
                                <span>Products</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showCustomer}>
                                <i data-feather="users"></i>
                                <span>Customers</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showCategory}>
                                <i data-feather="folder"></i>
                                <span>Categories</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showAddress}>
                                <i data-feather="compass"></i>
                                <span>Address</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
}

export default Header;
