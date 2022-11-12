import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Meal.css';
const Meal = (props) => {
    const { meal, handlerAddToCart } = props;
    const { strMeal, strMealThumb, strInstructions } = meal;
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
            <div className="card-info">
                <h3>{strMeal}</h3>
                <p>{strInstructions.slice(0, 150)}</p>

            </div>
            <button onClick={() => handlerAddToCart(meal)} className='cart-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon
                    icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Meal;