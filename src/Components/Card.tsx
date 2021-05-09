import React, { FunctionComponent } from 'react';
import './Card.scss'
import {ComponentWithTitle} from "./Interfaces";

// Card wrapper for form elements
const Card: FunctionComponent<ComponentWithTitle> = ({title, children}) => {
    return (
        <div className="card">
           <h2>{title}</h2>
            {children}
        </div>
    );
};

export default Card;
