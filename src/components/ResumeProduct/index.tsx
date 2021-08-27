import React from 'react';

import './styles.css'

import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa';

import { useCart } from '../../hooks/cart.provider';
import { useEffect } from 'react';

const ResumeProduct: React.FC = () => {
    const { cart, handleRemoverOneSingleProduct } = useCart();

    useEffect(() => {

    },[cart?.products])

    return (
        <div className="container-resume-products" >
            {
                cart?.products.map(x => (
                    <div className="row" key={x.id}>
                        <div className="pokemon">
                            <img src={x.pokemon?.image} alt="pokemon.png" />
                            <span>{x.pokemon?.name}</span>
                        </div>
                        <div className="add-remove-cart">
                            <FaMinusCircle className="remove" onClick={() => handleRemoverOneSingleProduct(x)}/>
                            <span>{x.qttd}</span>
                            <FaPlusCircle className="add"/>
                        </div>
                        <div className="price">
                            <span>R${x.pokemon?.price}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default ResumeProduct;