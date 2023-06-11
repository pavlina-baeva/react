import React from 'react';

function Card(props) {
    return (
        <div className="heroCard">
            <div className="heroName">{props.name}</div>
            <div className="heroUniverse">Вселенная: {props.universe}</div>
            <div className="heroAlterego">Альтер-эго: {props.alterego}</div>
            <div className="heroOccupation">Род деятельности: {props.occupation}</div>
            <div className="heroFriends">Друзья: {props.friends}</div>
            <div className="heroSuperpowers">Суперсилы: {props.superpowers}</div>
            <img src={props.url} alt="иллюстрация"></img>
        </div>
    )
}

export default Card;