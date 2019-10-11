import React, { Component } from 'react';

class Area extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Toolbar color={this.props.color} />
        )
    }
}

const Toolbar = (props) => {
    return(
        <Button color={props.color}/>
    )
}

const Button = (props) => {
    return(
        <h3>Selected theme: {props.color}</h3>
    )
}

export default Area;