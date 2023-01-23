import React from "react";
import Toast from "./Toast";
import { ToastContext } from "./ToastContext";
import "./Toasts.css"



export default function Toasts({toasters}) {

    return (
        <div>
            {toasters.map(( toast ) => ((<div className="toast">{toast}</div>)))}
            <button>Print</button>
        </div>
    );
}