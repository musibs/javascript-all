import React from 'react';
import ReactDOM from 'react-dom'

class Date extends React.Component{


     
   render(){
    const date = () => new Date().toLocaleString()
        return <h1>{date()}</h1> 
   };
}

export default Date;