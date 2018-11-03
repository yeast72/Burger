import React from 'react'
import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKeys => {
            return <li>
            <span styled={{textTranfrom: 'capitalize'}}>{igKeys}</span>:{props.ingredients[igKeys]}
            </li>
        })


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    )
}

export default OrderSummary;