import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { CartProvider } from './hooks/cart.provider';

import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';

const Routes = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Route component={Home} path="/" exact/>
                <Route component={Details} path="/details"/>
                <Route component={Cart} path="/cart"/>
            </BrowserRouter>
        </CartProvider>
    );
}

export default Routes;