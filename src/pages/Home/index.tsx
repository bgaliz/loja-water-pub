import React, { useEffect } from 'react'

import './styles.css'

import Header from '../../components/header';
import CartHome from '../../components/CartHome';
import CardPokemon from '../../components/CardPokemon';

import api from '../../services/api';
import {useCart, PokemonProps} from '../../hooks/cart.provider';
import { handleUpperCaseFirstCaracter, returnPrice } from '../../helper';

import {PokemonResponseModel, firePokemonsModel} from '../../shared/models/pokemon';
import { useCallback } from 'react';
import { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { AxiosResponse } from 'axios';

const Home: React.FC = () => {
    const { handleInicializePokemons, pokemons, cart, setPokemons } = useCart();
    const [poke, setPoke] = useState<PokemonProps[]>([]);



    useEffect(() => {
        const inicio = async () => {
            const allUrlPokemons = await api.get('type/fire')
           
            allUrlPokemons.data.pokemon.map(async (firePokemon: firePokemonsModel) => {               
                await api.get(`https://pokeapi.co/api/v2/pokemon/${firePokemon.pokemon.name}`)
                .then(pokemon => {
                    const image = pokemon.data.sprites.other.dream_world.front_default 
                        ? pokemon.data.sprites.other.dream_world.front_default 
                        : pokemon.data.sprites.other['official-artwork'].front_default;
                        
                    const creatingNewPokemon: PokemonProps = {
                        id: pokemon.data.id,
                        name: pokemon.data.name,
                        weight: pokemon.data.height,
                        attribute: 'Fire',
                        status: pokemon.data.stats, 
                        image,
                        base_experience: pokemon.data.base_experience,
                        price: returnPrice(`${Math.floor(Math.random() * 30000)}`)
                    }
                    
                    poke.push(creatingNewPokemon);
                    setPoke({...poke});

                    handleInicializePokemons(creatingNewPokemon)
                })
            })
            console.log('resposta: ',pokemons)
        }
        inicio();
    },[])

    return (
        <>
            <Header />
            <div className="container">
                <div className="container-main">
                   <CardPokemon pokemons={pokemons}/> 
                </div>
                <div className="container-carthome">
                    <CartHome />
                </div>
            </div>
        </>
    );
}

export default Home