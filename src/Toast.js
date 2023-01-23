import React from "react";

import './Toast.css';

export default function Toast (props) {

    //console.log(props)

    //const [cocktail, setCocktail] = React.useState([])

    //const [selectedCocktail, setSelectedCocktail] = React.useState('')

    


    return (
        <div className='coctail-card-container'>
            <div className='cocktail-card'>
                <img className="cocktail-image" src={props.toast.strDrinkThumb} alt={props.toast.image} />
               <div className='cocktail-name-description'> 
                <h2 className="cocktail-name">{props.toast.strDrink}</h2>
                <p className="cocktail-instructions">{props.toast.strInstructions}</p>
               </div> 
            </div>
        </div>    
    )
}