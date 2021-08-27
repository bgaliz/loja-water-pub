import React, { useEffect } from 'react';

import './styles.css'

import Header from '../../components/header';
import CartContainer from '../../components/CartContainer';
import CartComponent from '../../components/CartComponent';

const Cart: React.FC = () => {

    return (
        <>
            <Header />
            <main>
                <div className="container-cart-details">
                    <CartComponent />
                </div>
                <div className="poke-resume">
                    <CartContainer endShopping={true} />
                </div>
            </main>
        </>
    )
}

export default Cart;