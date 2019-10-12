import React from 'react';
import Item from './Item';

const Card = props => {
    return(
        <div className="col-sm-3">
            <div className="card">
                <Item itemName={props.itemName} searchItem={props.searchItem}/>
            </div>
        </div>
    )
}

export default Card;