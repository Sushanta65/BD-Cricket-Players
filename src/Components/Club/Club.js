import React from 'react';
import './Club.css'
const Club = (props) => {
    const {name, salary, img} = props.player;
    return (
        <div className="addedPlayerInfo my-3 p-2 media">
            <img className="mr-2 align-self-center" src={img} alt={name}/>
            <div className="media-body">
            <strong>Name: </strong><span>{name}</span><br/>
            <strong>Salary: </strong><span>{salary}</span>
            </div>
        </div>
    );
};

export default Club;