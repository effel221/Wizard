import React, { FunctionComponent } from 'react';
import './Card.scss'

type CardProps = {
    title: string
}


const Card: FunctionComponent<CardProps> = ({title, children}) => {
    return (
        <div className="card">
           <h2>{title}</h2>
            {children}
        </div>
    );
};

export default Card;
