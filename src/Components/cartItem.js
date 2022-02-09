import React, { useContext } from 'react';

//css
import Style from "./cartItem.module.css"

//logo
import logo from "../image/icons8-close-50.png"

//context
import { cartContext } from '../context/cartContextProvider';

const CartItem = ({data}) => {

    const {dispatch} = useContext(cartContext);


    return (
        <div className={Style.contaner}>
            <div>
                <h1>محصول</h1>
                <h1>قیمت</h1>
                <h1>تعداد</h1>
            </div>
            <div>
                <button onClick={() => dispatch({type:"remove", payload:data})}><img src={logo} alt="logo" /></button>
                <img src={data.image} alt="img" />
                <h1>{data.name}</h1>
                <h1>{data.price}</h1>
                <h1>{data.quantity}</h1>
            </div>
            <div></div>
        </div>
    );
};

export default CartItem;