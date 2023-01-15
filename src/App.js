import React, { useState } from 'react';
import './App.css';
import Homepage from '../src/Homepage';


function App() {

  const [cocktailSearchFilter, setCocktailSearchFilter] = React.useState('');

  //const [addNewFavoriteProduct, setAddNewFavoriteProduct] = useState(0);

  //const handleClick = (event, favorites) => {
  //  console.log(event.target);

  //  setAddNewFavoriteProduct(current => current + favorites);
//  };

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;

