import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cocktail from "../src/Cocktail";
import './Homepage.css';
import Toasts from './Toasts';
import ListItems from './ListItems';

import { ShoppingListContext } from './ShoppingListContext';
import { ToastContext } from './ToastContext';

export default function Homepage (props) {
    
    const [cocktails, setCocktails] = React.useState([]);

    //For the ToastContext 

    const [toasts, setToasts] = useState([]);

    const { addToListItems } = React.useContext(ShoppingListContext);
    const { displayToasts } = React.useContext(ToastContext);
    //const { addToPrintItems } = React.useContext
    //console.log(addToListItems);

    //useEffect hook

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
  

    const fetchCocktails = () => {

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((response) => {
            setCocktails(response.data.drinks)
        })
    }

    return (
        <div className='grid-container'>

            <div className='cocktail-container-item1'>

                {cocktails
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
            <Toasts toasters={['toast1', 'toast2']} />
            </div>
            <div>
                <dialog>
                    Hej
                </dialog>
            </div>

            
        </div>
    )
}
 