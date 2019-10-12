import React from 'react'

export default function RecipeLineItem(props) {
    return (
        <div className="row" key={props.key}>
                        <div className="col-md-3">
                            <img src={props.recipe.image} alt={props.recipe.name}/>
                        </div>
                        <div className="col-md-9">
                            <h3>Recipe Name: {props.recipe.name}</h3>
                            <p>Ingredients: {props.recipe.ingredients}</p>
                            <p>Calories: {props.recipe.calories}</p>
                            <p>Health Labels: {props.recipe.healthLabels}</p>
                        </div>
                    </div>
    )
}
