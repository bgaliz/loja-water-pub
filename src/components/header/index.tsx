import React from 'react';

import {FaWater, FaShoppingCart} from 'react-icons/fa'

import './styles.css';

const Header: React.FC = () => {
    return (
        <div className="container-header">
            <h1 className="logo">WaterPub</h1>
            <div className="fire_icon">
                <FaWater />
            </div>
        </div>
    );
}

export default Header;
