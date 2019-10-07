import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms : [],
        sortedRooms: [],
        featuredRooms : [],
        isLoading : true
    };

    componentDidMount(){
        let rooms = this.formatData();
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            sortedRooms:rooms,
            featuredRooms,
            isLoading:true
        })
    }

    formatData(){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };