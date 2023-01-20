import { useState, createContext } from "react";

export const ShoppingListContext = createContext();

export default function ShoppingListContextProvider(props) {
    const [listItems, setListItems] = useState([]);

    const addToListItems = (newListItem) => {
        console.log(newListItem);
    }

    return (
        <ShoppingListContext.Provider value={
            {listItems, addToListItems}
        }>
           {props.children}
       </ShoppingListContext.Provider>
    );
}
