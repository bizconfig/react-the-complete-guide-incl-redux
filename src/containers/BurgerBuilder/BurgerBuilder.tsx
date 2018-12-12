import React, {Component} from 'react'
import  Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/RXContainer'

class BurgerBuilder extends Component {
public state={
    ingredients:{
        salad:1,
        cheese:2,
        bacon:2,
        meat:2
    }
}
 public render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;