import React,{Component} from 'react'
import  './BurgerIngredient.css'

class BurgerIngredient extends Component <any, any> {
    constructor(props: any){
        super(props);
    }
   public render(){ 
    let ingredient=null; 
    switch(this.props.type){
        case 'bread-bottom':
        ingredient=<div className="BreadBottom"/>;
        break;
        case 'bread-top':
        ingredient=<div className="BreadTop">
        <div className="Seeds1"/>
        <div className="Seeds2"/>
        </div>;
        break;
        case 'meat':
        ingredient=<div className="Meat"/>;
        break;
        case 'cheese':
        ingredient=<div className="Cheese"/>;
        break;
        case 'bacon':
        ingredient=<div className="Salad"/>;
        break;
        case 'salad':
        ingredient=<div className="BreadBottBaconom"/>;
        break;
    }
    return ingredient
}
}
export default BurgerIngredient;