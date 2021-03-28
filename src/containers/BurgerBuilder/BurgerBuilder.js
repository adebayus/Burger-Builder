import React, { Component } from 'react'
// 
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../AxiosOrder'
import Spinner from '../../components/UI/spinner/Spinner'
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler'


const INGREDIENT_PRICE = { 
    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon: 0.7

}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable:false,
        purchasing: false,
        loading:false,
        error:false,

    }
    
    componentDidMount(){
        axios.get('/ingredients.json')
            .then(response => {
                // console.log(response)
                this.setState({ingredients:response.data})
            })
            .catch(error => {this.setState({error: true})})
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
        // console.log("handle")
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
        // alert("You Continue")
        this.setState( { loading:true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name :'max',
                address: {
                    streen : 'test',
                    zipcode : '123',
                    country: 'indonesia'
                },
                email:'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order )
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing:false,
                })
            })
            .catch(error =>  this.setState({
                loading: false,
                purchasing: false
                
            }))
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        }
        let orderSummary = null;

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }


        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        
        let burger = this.state.error ? <p> ingredient Cant be load </p> : <Spinner/> 
        if(this.state.ingredients !== null){
            burger = (
				<Auxiliary>
					<Burger ingredient={this.state.ingredients} />
					<BuildControls
						ingredientAdded={this.addIngredientHandle}
						ingredientRemoved={this.removeIngredientHandle}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						purchaseable={this.state.purchaseable}
						ordered={this.purchaseHandling}
					/>
				</Auxiliary>
			);
            orderSummary = <OrderSummary 
            price = {this.state.totalPrice} 
            ingredients={this.state.ingredients} 
            clicked={this.purchaseHandling} 
            continue={this.purchaseHandlingContinue}/>

        }


        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} ordered={this.purchaseHandling}>
                    {/* <OrderSummary price = {this.state.totalPrice} ingredients={this.state.ingredients} clicked={this.purchaseHandling} continue={this.purchaseHandlingContinue}/> */}
                    { 
                        orderSummary
                    }
                </Modal>
                {
                    burger
                }
            </Auxiliary>
        )
    }
}
export default withErrorHandler( BurgerBuilder,axios);
