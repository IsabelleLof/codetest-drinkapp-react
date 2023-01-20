import React from 'react';
import './Navbar.css';

export default function Navbar (props) {

    const [cocktailSearchValue, setCocktailSearchValue] = React.useState('');

    const handleCocktailSearchInput = (event) => {
      const currentSearchInputValue = event.target.value;
      setCocktailSearchValue(currentSearchInputValue);
      console.log('search input value', event.target.value);
    }
  
    const submitCocktailSearch = () => {
      props.cocktailSearchHandler(cocktailSearchValue)
    }
     


    return (
        <div className='navbar'>
                <div className='search-container'>
                <input onChange={props.handleCocktailSearchInput} value={props.cocktailSearchValue} className='search-input' placeholder='Margarita' />
                    <button onClick={props.cocktailSearchSubmit} className='search-button'>Search for a margarita...</button>
                </div>
        </div>
    )
}