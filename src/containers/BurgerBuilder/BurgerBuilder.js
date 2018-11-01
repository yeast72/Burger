import React , { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            'salad' : 1,
            'cheese' : 2,
            'bacon' : 1,
            'meat' : 3
        }
    }
    render() {
        return (
            <Aux>
                <p>BurgerBuilder</p>
                <Burger ingredients={this.state.ingredients}></Burger>
                <p>BurgerControler</p>
            </Aux>
        )
    }
}

export default BurgerBuilder;