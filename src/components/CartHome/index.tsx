import React, { useState } from 'react';

import './styles.css'

import Button from '../Button';
import CartItemAdded from '../CartItemAdded';
import Divider from '../Divider';
import Modal from '../Modal';

import {useCart} from '../../hooks/cart.provider';
import { useEffect } from 'react';

const CartHome: React.FC = () => {
    const {cart} = useCart();

    const [openModal, setOpenModal] = useState(false);

    function handleOpenModal() {
        if(openModal) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }else {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
        }

        setOpenModal(!openModal);
    }

    return (
        <>
            <Modal isOpenned={openModal} />
            <div className="container-cart">
                <div className="cart-title">
                    <h2>Carrinho</h2>
                </div>
                <div className="cart-main">
                    <CartItemAdded hasButtonRemove={true} hasBorder={true}/>
                </div>
                <div className="cart-footer">
                    <div className="full-price">
                        <span>Total:</span>
                        <span>{cart?.total}</span>
                    </div>
                    <Divider />
                    <Button 
                        text="Finalizar" 
                        kindOfButton="withIcon" 
                        onClick={handleOpenModal}
                        disabled={cart?.products.length === 0}
                    />
                </div>
            </div>
        </>
    );
}

export default CartHome;