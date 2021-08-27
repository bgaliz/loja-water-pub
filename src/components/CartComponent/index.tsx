import React from 'react';

import './styles.css'

import CartResume from '../CartResume';

const CartContainer: React.FC = () => {
    return (
        <div className="container-cart-component">
            <h2>Carrinho</h2>
            <div className="container-cart-table">
                <CartResume />
            </div>
        </div>
    );
}

export default CartContainer;