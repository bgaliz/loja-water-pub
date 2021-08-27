import React, { useEffect, useState } from 'react';

import './styles.css'

import CartItemAdded from '../CartItemAdded';
import Divider from '../Divider';
import Button from '../Button';
import { Link, useLocation } from 'react-router-dom';
import { PokemonProps, useCart } from '../../hooks/cart.provider';
import Modal from '../Modal';

interface CartContainerProps {
    endShopping?: boolean;
}

const CartContainer: React.FC<CartContainerProps> = ({
    endShopping
}:CartContainerProps) => {
    const { cart } = useCart()
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
        <div className="poke-resume-container">
            <h2>Resumo</h2>
            <div className="container-shop-requests">
                <CartItemAdded />
            </div>
            <Divider />
            <div className="full-price">
                <span>Total</span>
                <span>R${cart?.total}</span>
            </div>
            {
                endShopping
                ? (

                    <Button text="Finalizar" kindOfButton="success" onClick={handleOpenModal}/>
                ) 
                : (
                    <Link to='./cart' >
                        <Button text="Comprar" kindOfButton="success"/>
                    </Link>
                )
            }
        </div>
        </>
    )
}

export default CartContainer;