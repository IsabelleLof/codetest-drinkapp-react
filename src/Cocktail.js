import './Cocktail.css';

export default function Cocktail (props) {
    console.log(props)
    return (
            <div className='cocktail-card'>
                <img className="cocktail-image" src={props.cocktail.strDrinkThumb} alt={props.cocktail.image} />
                <h2 className="cocktail-name">{props.cocktail.strDrink}</h2>
                <p className="cocktail-instructions">{props.cocktail.strInstructions}</p>

            </div>
    )
}