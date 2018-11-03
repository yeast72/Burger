import React from 'react'
import styled from 'styled-components'
import BuildControl from  './BuildControl/BuildControl'

const Container = styled.div`
    width:100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`
const OrderButton = styled.button`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;

    :hover , :active{
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }

    :disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }

    :not(:disavled) {
        animation: enable 0.3s linear;
    }

    @keyframes enable {
        0% {
             transform: scale(1);
        }
        60% {
            transform: scale(1.1);
         }
         100% {
            transform: scale(1);
         }
    }
`

const controls = [
    { label: "Salad", type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <Container>
        <p>Current Price : <strong>{props.totalPrice.toFixed(2)}</strong> </p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientsAdd(ctrl.type)}
            removed={() => props.ingredientsRemove(ctrl.type)}
            disableButton={props.disableButton[ctrl.type]}></BuildControl>
        ))}
        <OrderButton disabled={!props.purcaseAble}>Order</OrderButton>
    </Container>
)

export default buildControls;