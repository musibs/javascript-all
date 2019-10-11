import React, { Component } from 'react';


const ThemeContext = React.createContext('light');

class AreaContext extends Component{

   render(){
       return(
            <ThemeContext.Provider value="dark">
                <Toolbar />
           </ThemeContext.Provider>
       )
   }
}


const Toolbar = () => {
    return(
        <Button />
    )
}

const Button = () => {
    return(
        <Label />
    )
}

class Label extends Component{

    static contextType = ThemeContext;
    render(){
        return(
            <h2>Value is: {this.context}</h2>
        )
    }
}

export default AreaContext