import React from 'react';

import {FaFire, FaShoppingCart} from 'react-icons/fa'

import './styles.css';

const Header: React.FC = () => {
    return (
        <div className="container-header">
            <h1 className="logo">FirePub</h1>
            <div className="fire_icon">
                <FaFire />
            </div>
        </div>
    );
}

export default Header;
