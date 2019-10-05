import React, { Component } from 'react';

class ButtonToggle extends Component{

    constructor(props){
        super(props);
        this.state = {isToggle : true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggle : !state.isToggle
        }));
    }

    render(){
        return (
            <div><button onClick={this.handleClick}>{this.state.isToggle ? 'On' : 'Off'}</button></div>
        )
    }
}

export default ButtonToggle;