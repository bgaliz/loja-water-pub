import React, { useState, useContext } from 'react';
import { useCallback } from 'react';
import { createContext } from 'react';
import api from '../services/api';

export interface StatusProps {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string,
  }
}

interface CartProps {
  id?: number;
  qttd?: number
  pokemon?: PokemonProps
}

interface CartListProps {
  total: number;
  products: CartProps[];
}

export interface PokemonProps {
    id?: number;
    name: string;
    base_experience: number;
    attribute: string;
    weight: number;
    status: StatusProps[];
    image: string;
    price: string;
}

interface ContextProps {
    cart?: CartListProps,
    handleRemoveProduct: () => void;
    pokemons: PokemonProps[],
    handleAddCart(produto: CartProps): void;
    handleInicializePokemons(pokemons: PokemonProps): void;
    setPokemons: React.Dispatch<React.SetStateAction<PokemonProps[]>>
    handleRemoverOneSingleProduct: (value: CartProps) => void
}

const CartContext = createContext({} as ContextProps);


const CartProvider: React.FC = ( {children} ) => {
    const [cart, setCart] = useState<CartListProps>({
      total: 0,
      products: []
    });
    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

    const handleInicializePokemons = (pokemon: PokemonProps) => {
      pokemons.push(pokemon);
      setPokemons(pokemons);
    }

    const handleAddCart = ({id, pokemon, qttd = 1}: CartProps) => {      
      const hasSameProduct = cart.products.filter(x => x.pokemon === pokemon);

      if(hasSameProduct.length > 0) {
        const getIndex = cart.products.indexOf({id, pokemon, qttd});
        
        cart.products.splice(getIndex, 1, {
          id, 
          pokemon, 
          qttd: qttd + 1
        })
      } else {
        cart?.products.push({id, pokemon, qttd})
      }
      
      setCart(cart);
      cart.total = cart.total + Number(pokemon?.price)

      console.log(cart);
      console.log(cart.total);
    }

    const handleRemoveProduct = () => {
      cart.total = 0;
      cart.products = [];
    }

    const handleRemoverOneSingleProduct = (value:CartProps) => {
      cart.products.map((x,index) => {
        if(x.id === value.id){
          console.log('removido: ',value);
          cart.products.splice(index, 1);
        }
      })
    }

    return (
        <CartContext.Provider
          value={{
            cart,
            handleInicializePokemons,
            pokemons,
            handleAddCart,
            setPokemons,
            handleRemoveProduct,
            handleRemoverOneSingleProduct
          }}
        >
          {children}
        </CartContext.Provider>
      )
}


function useCart(): ContextProps {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be inside CartContext')
  }

  return context
}

export { CartProvider, useCart }