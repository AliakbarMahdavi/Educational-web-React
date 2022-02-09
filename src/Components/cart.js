import React, { useContext } from 'react';

//context
import { cartContext } from '../context/cartContextProvider';

import { Link } from 'react-router-dom';

//css
import Style from "./cart.module.css"

//component
import CartItem from './cartItem';

const Cart = () =>{

    const {cartData, dispatch} = useContext(cartContext)

        return (
            <div className={Style.contaner}>
                {
                    cartData.checked ? 
                        <div className={Style.buy}>
                            <h1>تسویه حساب انجام شد.</h1>
                            <button><Link to="/product">خرید بیشتر</Link></button>
                        </div>
                    :
                
                    cartData.itemsCounter == 0 ?
                    <div className={Style.null}>
                        <h1>سبد خرید خالی است !</h1>
                        <button><Link to="/product">بازگشت به فروشگاه</Link></button>
                    </div> 
                    
                    : 
                    
                    <div className={Style.data}>
                        <div>
                            <h1>تعداد : <span>{cartData.itemsCounter}</span></h1>
                            <h1>جمع : <span>{cartData.total}</span></h1>
                            <button onClick={() => dispatch({type:"CHECKOUT"})}>تسویه حساب</button>
                        </div>
                        <div>
                            {cartData.cartValue.map(item => <CartItem key={item.id} data={item}/>)}
                        </div>
                    </div>
                }

            </div>
        );
}

export default Cart;