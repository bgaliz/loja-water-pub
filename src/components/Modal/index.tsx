import React, { useState } from 'react';

import './styles.css'

import {FaTimes, FaCheckCircle} from 'react-icons/fa'
import Button from '../Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../../hooks/cart.provider';

interface ModalProps {
    isOpenned: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpenned
}: ModalProps) => {
    const { handleRemoveProduct } = useCart();

    function handleCloseModal () {
        document.getElementById('container-overlay')?.classList.remove('isOpenned');
    }

    function handleRemoveEverythingFromCart () {
        handleRemoveProduct();
        handleCloseModal();
    }

    return (
        <div id="container-overlay" className={`${isOpenned? 'isOpenned' : ''}`}>
            <div className="modal">
                <button onClick={handleCloseModal}>
                    <FaTimes className="close-modal" />
                </button>
                <div className="modal-content">
                    <FaCheckCircle />
                    <h2>Compra realizada com sucesso!</h2>
                    <p>Você recebeu 3% de cashback referente a compra realizada.</p>
                    <Link to="/">
                        <Button text="Quer continuar comprando?" kindOfButton="success" onClick={handleRemoveEverythingFromCart}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;