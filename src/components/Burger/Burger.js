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
    return (
        <Burger>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            <BurgerIngredient type="bacon"></BurgerIngredient>
            <BurgerIngredient type="cheese"></BurgerIngredient>
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </Burger>
    )
}

export default burger;