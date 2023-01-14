import React from 'react';

const DRINKS = [
  {
    strDrinkThumb: 'https:www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    strDrink: 'Mojitio',
    strInstructions: 'Isabelle of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.'
  },
  {
    strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg',
    strDrink: 'Manhattan',
    strInstructions: 'Benji was here of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.'
  },
  {
    strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg',
    strDrink: 'Margarita',
    strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.'
  },
  ];

  const Card = ({drink: {strDrinkThumb, strDrink, strInstructions}}) => {
    return(
        <div>
          <div>
            <img alt="" src={strDrinkThumb} />
            <p>{strDrink}</p>
            <p>{strInstructions}</p>
          </div>
          <button>Add to shoppinglist</button>  
        </div>

    )
}


const App = () => (
  <div>
    {DRINKS.map((drink, i) => {
      if (i < 3) {
        return <Card drink={drink} />}
    })}
  </div>

)

export default App
