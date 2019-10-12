import React, { Component } from 'react';
import RecipeList from './RecipeList';



class Item extends Component{

    constructor(props){
        super(props);
        this.state = {
            showImage : true,
            showComponent : false
        }
        this.onImageClick = this.onImageClick.bind(this);
    }

    onImageClick(){
        this.setState({
            showImage : false,
            showComponent : true
        })
    }

    render(){
        return(
            <div>
                {this.state.showImage ? 
                    <img className="card-img-top img-fluid" src={this.props.itemName} alt="Card" onClick={this.onImageClick}/> : null}

                {this.state.showComponent ? <RecipeList searchItem={this.props.searchItem}/> : null }
            </div>
        );
    }

}

export default Item;