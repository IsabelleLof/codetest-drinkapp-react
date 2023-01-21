import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Cocktail from "../src/Cocktail";
import './Homepage.css';
import { ShoppingListContext } from './ShoppingListContext';
import ShoppingListCard from './ShoppingListCard';
import Toaster from './Toaster';
import Navbar from './Navbar';
import ListItems from './ListItems';

export default function Homepage (props) {
    // Experiment with state in react
    // React use state is a react hook
    const [cocktails, setCocktails] = React.useState([]);

    const { addToListItems } = React.useContext(ShoppingListContext);
    //console.log(addToListItems);

    // React useEffect hook

    // componentDidMount example (api calls or functions when the page loads)
    React.useEffect(() => {
        console.log('we are fetching our products')
        fetchCocktails()
    }, []);

    // runs every render (runs every time props or state changes)
    // React.useEffect(() => {});

    // runs after update of products but can be used for any state value
    React.useEffect(() => {
        console.log('We have a full list of products')
    }, [cocktails]);

    // componentWillUnmount
    // React.useEffect(() => {
        
    //     return () => {

    //     }
    // })
  

    const fetchCocktails = () => {
        // experiment with calling the api
        // combine the api and state
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then((response) => {
            setCocktails(response.data.drinks)
        })
    }

    return (
        <div className='grid-container'>

            {/* Within react you need to return a value or null */}
            {/* For loop / if statement are statements */}
            {/* ternary operators and array methods return a value */}
            {/* <button onClick={fetchProducts}>Show Products</button> */}
            <div className='cocktail-container-item1'>

                {
                // Put some products inside the state and map them with or without an api
                cocktails
                .filter((cocktail) => {
                    return props.cocktailSearchValue !== '' && props.isSearchConfirmed 
                    ? cocktail.strDrink.toLowerCase().includes(props.cocktailSearchValue.toLowerCase()) ? cocktail : null
                    : cocktail
                }).map((cocktail) => (
                    <div className='cards-container-button'>
                     <Cocktail key={cocktails.drinks} cocktail={cocktail} />
                       <button className='cards-button' onClick={() => addToListItems(cocktail)}>+</button>
                    </div>
                        
                )
                )}
            </div>
            <div className='shoppinglist-container-item2'>
                <ListItems />
            </div>
            <div className='toaster-container-item3'>
                <Toaster />
            </div>

            
        </div>
    )
}
 