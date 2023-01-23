import { useState, createContext } from "react";

export const ToastContext = createContext([]);

export default function ToastProvider(props) {
    const [toasts, setToasts] = useState([]);

    const displayToasts = (displayedToast) => {
        console.log(displayToasts);
    }

    return (
        <ToastContext.Provider value={{toasts, displayToasts}}>
           {props.text}
       </ToastContext.Provider>
    );
}
