import React, { Component } from 'react'

const styles = {
    border : 'solid',
    textAlign: 'center',
    boxShadow: '2px 2px'        
}

export default class Container extends Component {

    render() {
        return (
            <div style={styles}>
                Hello
            </div>
        )
    }
}
