import React from 'react';

import './styles.css'

import {StatusProps} from '../../hooks/cart.provider';

import {handleUpperCaseFirstCaracter} from '../../helper'

interface InputDetail {
    title: string,
    description?: string | number
    status?: StatusProps[]
}

const Input: React.FC<InputDetail> = ({
    title, 
    description,
    status
}: InputDetail) => {
    return (
        <div className="container-detail">
            <div className="detail">
                <label>{title}:</label>
                <p>{description}</p>
            </div>
            <div className="container-poke-status">
                {
                    status?.map((pokeStatus, index) => {
                        return (
                            <div className="status" key={index}>
                                <label>{handleUpperCaseFirstCaracter(pokeStatus.stat.name)}:</label>
                                <span>{pokeStatus.base_stat}</span>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
}

export default Input;