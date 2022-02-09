import React, {createContext, useReducer} from 'react';

const initialState = {
    cartValue : [],
    itemsCounter: 0,
    checked:false
}

const sumItem = item => {
    const itemsCounter = item.reduce((total, product) => total + product.quantity, 0)
    let total = item.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString();
    return {itemsCounter, total}
}

const reduce = (state, action) => {
    switch(action.type){
        case"add":
            if(!state.cartValue.find(item => item.id === action.payload.id)){
                state.cartValue.push({
                    ...action.payload, quantity:1
                })  

            }else{
                const index = state.cartValue.findIndex(item => item.id === action.payload.id) 
                state.cartValue[index].quantity++
            }
            return {
                ...state,
                cartValue:state.cartValue,
                ...sumItem(state.cartValue),
                checked:false
            }
        case"remove":
            const newCartValue = state.cartValue.filter(item => item.id !== action.payload.id);
            return{
                ...state,
                cartValue:newCartValue,
                ...sumItem(newCartValue),
            }
        case "CHECKOUT" :
                return {
                    cartValue: [],
                    itemsCounter: 0,
                    total: 0,
                    checked:true
                }
            
        default: 
            return state;   
    }
}

export const cartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartData, dispatch] = useReducer(reduce, initialState)
    
    return (
        <div>
            <cartContext.Provider value={{cartData, dispatch}}>
                {children}
            </cartContext.Provider>
        </div>
    );
};

export default CartContextProvider;