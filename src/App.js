import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../src/Homepage';
import Navbar from './Navbar';

import ShoppingListContextProvider from './ShoppingListContext';
import ListItems from './ListItems';
import ShoppingListCard from './ShoppingListCard';
import Toaster from './Toaster';


export default function App() {

  const [cocktailSearchValue, setCocktailSearchValue] = React.useState('')
  const [isSearchConfirmed, setSearchConfirmation] = React.useState(false);

  const handleCocktailSearchInput = (event) => {
    const currentSearchInputValue = event.target.value
    setCocktailSearchValue(currentSearchInputValue)
    
    if(currentSearchInputValue === '') {
      setSearchConfirmation(false)
    }
}

const cocktailSearchSubmit = (cocktailSearchValue) => {
  setSearchConfirmation(true)
}

  //const [cocktailSearchFilter, setCocktailSearchFilter] = React.useState('');

  //const [addNewFavoriteProduct, setAddNewFavoriteProduct] = useState(0);

  //const handleClick = (event, favorites) => {
  //  console.log(event.target);

  //  setAddNewFavoriteProduct(current => current + favorites);
//  };

  return (
    <div>
    <BrowserRouter>
      <ShoppingListContextProvider>
      <Navbar 
          handleCocktailSearchInput={handleCocktailSearchInput} 
          cocktailSearchSubmit={cocktailSearchSubmit}
          cocktailSearchValue={cocktailSearchValue} />
      <Routes>    
      <Route exact path='/' element={ <Homepage isSearchConfirmed={isSearchConfirmed} cocktailSearchValue={cocktailSearchValue} /> } />
      <Route exact path='/listItems' element={ <ListItems /> } />
      <Route exact path='/shoppingListCard' element={ <ShoppingListCard /> } />
      </Routes>
      </ShoppingListContextProvider>   
    </BrowserRouter>      

    </div>

  );
}

