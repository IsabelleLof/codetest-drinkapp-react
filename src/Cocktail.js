import './Cocktail.css';
import React from 'react';

export default function Cocktail (props) {

    //console.log(props)

    const [cocktail, setCocktail] = React.useState([])

    const [selectedCocktail, setSelectedCocktail] = React.useState('')

    


    return (
        <div className='coctail-card-container'>
            <div className='cocktail-card'>
                <img className="cocktail-image" src={props.cocktail.strDrinkThumb} alt={props.cocktail.image} />
               <div className='cocktail-name-description'> 
                <h2 className="cocktail-name">{props.cocktail.strDrink}</h2>
                <p className="cocktail-instructions">{props.cocktail.strInstructions}</p>
               </div> 
            </div>
        </div>    
    )
}