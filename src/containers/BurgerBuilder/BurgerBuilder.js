import React , { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux'
import BuildControls from '../../components/Burger/BurgerControls/BuildControls';


class BurgerBuilder extends Component {
    state = {
        ingredients : {
            'salad' : 1,
            'cheese' : 1,
            'meat' : 1,
            'bacon' : 2
        }
    }
    render() {
        return (
            <Aux>
                <p>BurgerBuilder</p>
                <Burger ingredients={this.state.ingredients}></Burger>
                <p>BurgerControler</p>
                <BuildControls></BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder;