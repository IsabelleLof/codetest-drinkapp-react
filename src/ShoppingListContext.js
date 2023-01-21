import { useState, createContext } from "react";

export const ShoppingListContext = createContext();

export default function ShoppingListContextProvider(props) {
    const [listItems, setListItems] = useState([]);

    const addToListItems = (newListItem) => {
        //check to see if cocktail exists in the array
        const doesCocktailExistInListItems = listItems.find(cocktail => cocktail.strDrink === newListItem.strDrink);
        //if it exists block the injection into the favorites array
        if(!doesCocktailExistInListItems) {
            //spread operator 'keep all the other favorites and add the new ones to'
            setListItems([...listItems, newListItem])
        }
        //bolean
        //else add it to the array
        console.log(newListItem);
    }

    return (
        <ShoppingListContext.Provider value={{listItems, addToListItems}}>
           {props.children}
       </ShoppingListContext.Provider>
    );
}
