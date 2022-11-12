import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart }) => {

    return (
        <div>
            <h2>Order Details</h2>


            {
                cart.map(cartItem => <CartItem
                    cartItem={cartItem}
                    key={cartItem.idMeal}></CartItem>)
            }

        </div>
    );
};

export default Cart;