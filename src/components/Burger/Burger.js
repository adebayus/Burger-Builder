import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
    let transformIngredient = Object.keys(props.ingredient).map(igkey => {
        // console.log("[igkey]",igkey)
        return [...Array(props.ingredient[igkey])].map((_,i) => {
            // console.log("[_,i]")
            return <BurgerIngredient key={igkey + i} type={igkey}/> 
        })
    })
    // transformIngredient = ["ayam","ikan"]
    const reducing =  transformIngredient.reduce((arr,el) => {
        return arr.concat(el)
    })
    // console.log(transformIngredient)
    // console.log(reducing)
    if(reducing.length === 0  ){
        transformIngredient = <p> Please start adding ingredient </p>
    }

    return (
        <div id="lord" className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default Burger;