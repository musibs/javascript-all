import React from 'react';
import './Card.css';

const Card = props => {
    return(
          
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid" src={props.itemName} alt="Card" onClick={() => props.onImageClick(props.searchItem)}/>
                <h2 onClick={() => props.onImageClick(props.searchItem)} className="card-text">{props.searchItem.toUpperCase()}</h2>
            </div>
        </div>
    )
}

export default Card;