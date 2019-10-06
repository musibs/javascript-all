import React, { Component } from 'react'
import Title from '../components/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Drink as much as you can because we provide the best cocktail in the town. Free of Cost."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "You will absolutely love this place, if you are a Hiker. The mountain and the sun, the perfect combination"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "We provide free shuttle service from/to the nearby airports and railway junctions"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "We have strongest and finest collections of Beers with us. Try the chilled ones"
            }
        ]
    }
    render() {
        return (
            <section class="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map( (item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>

                    })}

                </div>
            </section>

        )
    }
}
