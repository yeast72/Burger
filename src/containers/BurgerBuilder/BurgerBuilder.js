import React , { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux'
import BuildControls from '../../components/Burger/BurgerControls/BuildControls';
import Model from '../../components/UI/Model/Model'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad:0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}




class BurgerBuilder extends Component {
    state = {
        ingredients : {
            'salad' : 0,
            'cheese' : 0,
            'meat' : 0,
            'bacon' : 0
        },
        totalPrice : 0.4,
        purcaseAble: false
    }

    updatePurcaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ig => {
                return ingredients[ig]
            }).reduce((prev,Curr) => {
                return prev+Curr
            },0)
        this.setState({purcaseAble: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updateIngredients , totalPrice: newPrice});
        this.updatePurcaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount < 1) {
            return ;
        }
        const updateCount = oldCount - 1; 
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ingredients: updateIngredients , totalPrice: newPrice});
        this.updatePurcaseState(updateIngredients);
    }
    render() {
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] < 1;
        }

        return (
            <Aux>
                <p>BurgerBuilder</p>
                <Model><OrderSummary ingredients={this.state.ingredients}></OrderSummary></Model>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientsAdd={this.addIngredientHandler} 
                    ingredientsRemove={this.removeIngredientHandler}
                    disableButton={disableInfo}
                    totalPrice={this.state.totalPrice}
                    purcaseAble={this.state.purcaseAble}>
                </BuildControls>
               
            </Aux>
        )
    }
}

export default BurgerBuilder;