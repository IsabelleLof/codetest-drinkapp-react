import React from "react";
import { ShoppingListContext } from "./ShoppingListContext";


export default function ListItems(props) {
    const { listItems } = React.useContext(ShoppingListContext);
    console.log(listItems);
    return (
        <div>
            <h1>Shopping List</h1>
            {listItems.map( newListItem => (
                <ul>
                  <li>{newListItem.strDrink}</li>
                </ul>
            ))}
        </div>
    )
}