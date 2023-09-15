import React from "react"
import "./RecipeCard.css"
export default function RecipeCard(props){

  

    let {title, image, extendedIngredients}=props.recipe
   /* const styles={
        backgroundImage: `${image}`
    }*/
    let ingredients=extendedIngredients.map(item=><p>{item.name}, </p>)
    ingredients=ingredients.concat(<p>{`love:)`}</p>)
    return(
        <div className="recipe-card">
            <img src={image} />
            <h2>{title}</h2>
            <h3>You will need:</h3>
            <div className="ing">{ingredients}</div>
        </div>
    )
}