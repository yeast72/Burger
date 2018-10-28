import React , { Component } from 'react'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <>
                <p>BurgerBuilder</p>
                <Burger></Burger>
                <p>BurgerControler</p>
            </>
        )
    }
}

export default BurgerBuilder;