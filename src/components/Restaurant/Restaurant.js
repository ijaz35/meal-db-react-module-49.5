import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const handlerAddToCart = (selectMeal) => {
        const exist = cart.find(item => item.idMeal === selectMeal.idMeal);
        if (!exist) {
            const newCart = [...cart, selectMeal];
            setCart(newCart);
        }


    }
    return (
        <div className="restaurant-container">
            <div className='card-container'>
                {
                    meals.map(meal => <Meal
                        handlerAddToCart={handlerAddToCart}
                        meal={meal}
                        key={meal.idMeal
                        }></Meal>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Restaurant;