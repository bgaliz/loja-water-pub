import React from 'react';

import './styles.css'

import ResumeProduct from '../ResumeProduct';

const CartResume: React.FC = () => {
    return (
        <div className="container-cart-resume">
            <div className="table-names">
                <span>Produto</span>
                <span>qttd</span>
                <span>Preço</span>
            </div>
            <div className="container-resume-products">
                <ResumeProduct />
            </div>
        </div>
    );
}

export default CartResume;