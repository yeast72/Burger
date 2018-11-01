import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styled from 'styled-components';

const Burger = styled.div`
    width: 100%;
    height: 250px;
    margin: auto;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media (min-width: 319px) {
        @media(min-height: 400px) {
            width: 350px;
            height: 300px;
        }
        
    }
`

const burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        }).reduce((previous,curr)=> {
            return previous.concat(curr);
        })

        if(transformedIngredients === 0) {
            return <p>Plese add ingredients first</p>
        }
    return (
        <Burger>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </Burger>
    )
}

export default burger;