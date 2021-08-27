import React from 'react';

import {FaMinusCircle} from 'react-icons/fa';

import './styles.css'

import {useCart} from '../../hooks/cart.provider';
import { useEffect } from 'react';

interface CartItemAddedProps {
    hasButtonRemove?: boolean
    hasBorder?: boolean
}

const CartItemAdded: React.FC<CartItemAddedProps> = ({
    hasButtonRemove,
    hasBorder
}: CartItemAddedProps) => {
    const { cart } = useCart();

    return (
        <>
            {
                cart?.products.map((item, index) => (
                    <div className={`container-cart-item-added ${hasBorder ? 'hasBorder' : ''}`} key={index}>
                        <button className="button-remove-product">
                            <FaMinusCircle size={16} className={hasButtonRemove ? 'hasButton' : ''}/>
                        </button>
                        <p>{item.qttd}x {item.pokemon?.name}</p>
                        
                        <span>R${item.pokemon?.price}</span>
                    </div>
                ))
            }
        </>
    );
}

export default CartItemAdded