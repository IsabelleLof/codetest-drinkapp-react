import React from "react";
import "./ListItems.css";
import { ShoppingListContext } from "./ShoppingListContext";


//Build a _print shopping button_ that displays a 'browser dialog'



export default function ListItems(props) {
    const { listItems } = React.useContext(ShoppingListContext);
    console.log(listItems);
    return (
        <div className="list-items-container">
            <h1 className="list-items-title">Shopping List</h1>
            {listItems.map( newListItem => (
                <ul>
                  <li>{newListItem.strIngredient1}</li>
                  <li>{newListItem.strIngredient2}</li>
                </ul>
            ))}
        </div>
    )
}