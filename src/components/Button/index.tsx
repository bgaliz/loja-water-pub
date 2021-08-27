import React from 'react';

import { FaLock, FaShoppingCart } from 'react-icons/fa'

import './styles.css';

interface ButtonProps {
    text: string;
    type?: string;
    disabled?: boolean,
    kindOfButton?: 'outline' | 'warning' | 'danger' | 'success' | 'withIcon' | 'withBuyIcon'
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = 'button',
    kindOfButton,
    disabled
}: ButtonProps) => {
    return (
        <div className={`container-button ${disabled ? 'disabled' : ''}`}>
            <button className={`button ${kindOfButton}`} onClick={onClick} disabled={disabled}>
                <div className="icon">
                    <FaLock className="lock-icon-button" size={16}/>
                    <FaShoppingCart className={'cart-icon-button'} size={16}/>
                </div>
                <p>{text}</p>
            </button>
        </div>
    )
}

export default Button;