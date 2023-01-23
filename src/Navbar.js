import React from 'react';
import './Navbar.css';

export default function Navbar (props) {
     


    return (
        <div className='navbar'>
                <div className='search-container'>
                <input onChange={props.handleCocktailSearchInput} value={props.cocktailSearchValue} className='search-input' placeholder='Search...' />
                    <button onClick={props.cocktailSearchSubmit} className='search-button'>Search for a cocktail or ingredient...</button>
                </div>
        </div>
    )
}