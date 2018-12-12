import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger=(props:any)=>{
    const transformedIngredient= Object.keys(props.ingredients).map(igKey=>{
        let emptyarray=[...Array.apply(null, new Array(props.ingredients[igKey]))];
        return (emptyarray).map((_,i)=>{
          return <BurgerIngredient key={igKey+i} type={igKey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    return (
        <div className="Burger">
        <BurgerIngredient type="bread-top"/>
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default Burger;