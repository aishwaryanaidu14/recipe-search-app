import React from "react"
import "./IngredientTag.css"

export default function IngredientTag(props){

    const styles={
        backgroundColor: (props.bg)
    }

    return(
        <>
            <div className="IngredientTag" style={styles} id={props.ingredient}>
                <p>{props.ingredient}</p>
                <h2 onClick={props.handleClick} id={props.ingredient}>X</h2>
            </div>
        </>
    )
}