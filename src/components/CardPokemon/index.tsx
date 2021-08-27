import React from 'react';

import './styles.css'

import { PokemonProps, useCart } from '../../hooks/cart.provider';

import Button from '../Button';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

interface CardPokemonProps {
    pokemons: PokemonProps[]
}

const CardPokemon: React.FC<CardPokemonProps> = ({pokemons}: CardPokemonProps) => {
    const { handleAddCart } = useCart();

    return (
        <div className="container-card-pokemon">
            {
                pokemons.map(pokemon => {
                    return (
                        <div className="card-pokemon" key={pokemon.id}>
                            <Link 
                                to={{
                                    pathname: "/details",
                                    state: {
                                        ...pokemon
                                    }
                                }} 
                                className="redirection"
                            >
                                <div className="image">
                                    <img src={pokemon.image} alt="pokemon.png" /> 
                                </div>
                                <h2>{pokemon.name}</h2>
                                <div className="description-card-pokemon">
                                    <span>Preço</span>
                                    <span>R${pokemon.price}</span>
                                </div>
                            </Link>
                            <Button 
                                text="Comprar" 
                                kindOfButton="withBuyIcon"
                                onClick={() => handleAddCart({id: pokemon.id, pokemon})}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardPokemon;