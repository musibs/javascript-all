import React, { Component } from 'react';
import { RoomContext } from '../context';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { featuredRooms } = this.context;
        console.log(featuredRooms);
        return (
            <div>
                hello from FeaturedRooms
            </div>
        )
    }
}
