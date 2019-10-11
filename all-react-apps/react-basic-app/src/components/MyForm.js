import React, { Component } from 'react';

class MyForm extends Component{


    state = {
        value : ''
    }

    handleChange =  (event) => {
        this.setState({value : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.value)
    }

    render(){
        
        return(
            <>
            <div>{this.state.value}</div>
            <form onSubmit={this.handleSubmit}>
                 <label htmlFor="Name">Name</label>  &nbsp; 
                 <input type="text" id="name" onChange={this.handleChange} /> &nbsp;
                 <input type="submit" value="Submit" />
            </form>
            </>
        )
    }
}

export default MyForm;