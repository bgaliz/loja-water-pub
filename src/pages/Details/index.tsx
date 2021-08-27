import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css'

import { PokemonProps } from '../../hooks/cart.provider';

import Header from '../../components/header';
import InputDetail from '../../components/InputDetail';
import CartContainer from '../../components/CartContainer';


const Details: React.FC = () => {
    const pokemon = useLocation().state as PokemonProps;
    
    useEffect(() => {
        console.log(pokemon);
    },[])

    return (
        <>
            <Header />
            <main>
                <div className="poke-information">
                    <h2>{pokemon.name}</h2>
                    <div className="image">
                        <img src={pokemon.image} alt="img.png" />
                    </div>
                    <div className="details">
                        <InputDetail title="Attribute" description={pokemon.attribute} />
                        <InputDetail title="Base Experience" description={pokemon.base_experience} />
                        <InputDetail title="Weight" description={pokemon.weight} />
                    </div>
                    <InputDetail title="Status" status={pokemon.status} />
                </div>
                <div className="poke-resume">
                    <CartContainer />
                </div>
            </main>
        </>
    );
}

export default Details
