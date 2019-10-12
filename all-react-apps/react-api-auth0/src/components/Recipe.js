import React from 'react'
import './Recipe.css'
import banana from '../images/banana.jpg';
import mango from '../images/mango.jpg';
import orange from '../images/orange.jpg';
import apple from '../images/apple.jpg';
import chicken from '../images/chicken.jpg';
import pizza from '../images/pizza.jpg';
import soup from '../images/soup.jpg';
import chicken2 from '../images/chicken-2.jpg';
import Card from './Card';

//const fruitItems = ['banana', 'apple', 'mango', 'orange'];

const Recipe = props => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h1>Try our award wining Recipies</h1>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <Card itemName={banana} searchItem="banana"/>
                <Card itemName={apple} searchItem="apple"/>
                <Card itemName={mango} searchItem="mango"/>
                <Card itemName={orange} searchItem="orange"/>
            </div>
            <div className="row">
                <Card itemName={chicken} searchItem="chicken"/>
                <Card itemName={pizza} searchItem="pizza"/>
                <Card itemName={soup} searchItem="soup"/>
                <Card itemName={chicken2} searchItem="chicken"/>
            </div>
        </div>
    )
}

export default Recipe;