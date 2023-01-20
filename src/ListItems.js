import React from "react";
import { ShoppingListContext } from "./ShoppingListContext";


export default function ListItems() {
    const { listItems } = React.useContext(ShoppingListContext);
    return (
        <div>
            <h1>Shopping List</h1>
            {listItems.map( cocktail => (
                <ul>
                <h1>{cocktail.strDrink}</h1>
                 <li></li>
                </ul>
            ))}
        </div>
    )
}