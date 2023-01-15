import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Cocktail from "../src/Cocktail";
import './Homepage.css';

function Homepage (props) {
    // Experiment with state in react
    // React use state is a react hook
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);


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
        <div>
            {/* Within react you need to return a value or null */}
            {/* For loop / if statement are statements */}
            {/* ternary operators and array methods return a value */}
            {/* <button onClick={fetchProducts}>Show Products</button> */}
            <div className='cocktail-container'>
                {
                // Put some products inside the state and map them with or without an api
                data.map((cocktail, i) => {
                    if (i < 3) {
                        return <Cocktail key={cocktail.idDrink}  cocktail={cocktail} />
                    }}
                )}
            </div>

            
        </div>
    )
}

export default Homepage;
 