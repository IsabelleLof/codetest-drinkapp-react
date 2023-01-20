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
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [cocktails, setCocktails] = React.useState([]);

    const { addToListItems } = React.useContext(ShoppingListContext);


    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);

        axios
          .get(url)
          .then((res) => {
              console.log(res.data);
              setData(res.data.drinks);
          })
          .catch((e) => console.log(e))
          .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);

    return (
        <div className='grid-container'>

            {/* Within react you need to return a value or null */}
            {/* For loop / if statement are statements */}
            {/* ternary operators and array methods return a value */}
            {/* <button onClick={fetchProducts}>Show Products</button> */}
            <div className='cocktail-container-item1'>

                {
                // Put some products inside the state and map them with or without an api
                data
                .filter((cocktail) => {
                    return props.cocktailSearchValue !== '' && props.isSearchConfirmed 
                    ? cocktail.strDrink.toLowerCase().includes(props.cocktailSearchValue.toLowerCase()) ? cocktail : null
                    : cocktail
                }).map((cocktail) => (
                    <div className='cards-container-button'>
                     <Cocktail key={data.drinks} cocktail={cocktail} />
                       <button className='cards-button' onClick={() => addToListItems(data)}>+</button>
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
 