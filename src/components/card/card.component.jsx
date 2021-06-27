import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img 
            className="user__img" 
            alt="user" 
            src={`https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=80&w=80`} />
            <h1>{props.user.name}</h1>
            <p>{props.user.email}</p>
        </div>
    )
}
