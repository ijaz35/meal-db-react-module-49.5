import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const { strMeal, strCategory, strArea } = props.cartItem;
    return (
        <div className='item-details'>
            <h3>{strMeal}</h3>
            <p>{strCategory}</p>
            <p>{strArea}</p>
        </div>
    );
};

export default CartItem;