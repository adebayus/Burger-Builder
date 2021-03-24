import React, { Component } from 'react'
// 
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICE = { 
    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon: 0.7

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0, 
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable:false,
        purchasing: false,
    }
    
    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients).map( igKey => {
            return ingredients[igKey]
        }).reduce( (sum,el) => {
            return sum+el
        }, 0)
        this.setState({purchaseable : sum > 0 })
    }

    addIngredientHandle = (type) =>{ 
        console.log("handle")
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients,
        }
        updatedIngredient[type]= updateCounted;
        const priceAddtion = INGREDIENT_PRICE[type];
        const oldprice = this.state.totalPrice;
        const newprice = oldprice + priceAddtion;
        this.setState({
            totalPrice: newprice,
            ingredients: updatedIngredient,
        } )
        this.updatePurchaseState(updatedIngredient)

    }
    removeIngredientHandle = (type) =>{ 
        
    console.log("handle")
    const oldCount = this.state.ingredients[type];
      
    if (oldCount <= 0) {
		return;
	}
	const updatedIngredient = {
		...this.state.ingredients,
	};
	const updateCounted = oldCount - 1;
	updatedIngredient[type] = updateCounted;
	const priceAddtion = INGREDIENT_PRICE[type];
	const oldprice = this.state.totalPrice;
	const newprice = oldprice - priceAddtion;
	this.setState({
		totalPrice: newprice,
		ingredients: updatedIngredient, 
	});
    this.updatePurchaseState(updatedIngredient)
    }

    purchaseHandling = ()=> {
        // console.log("Asdasd")
        
        this.setState({
            purchasing: !this.state.purchasing,
        })
    }
    purchaseHandlingContinue = () => {
        alert("You Continue")
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        // console.log(disabledInfo);
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} ordered={this.purchaseHandling}>
                    <OrderSummary price = {this.state.totalPrice} ingredients={this.state.ingredients} clicked={this.purchaseHandling} continue={this.purchaseHandlingContinue}/>
                </Modal>
                <Burger ingredient={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemoved= { this.removeIngredientHandle}
                    disabled ={disabledInfo}
                    price = {this.state.totalPrice}
                    purchaseable = {this.state.purchaseable}
                    ordered = {this.purchaseHandling}
                />
            </Auxiliary>
        )
    }
}
export default BurgerBuilder;
