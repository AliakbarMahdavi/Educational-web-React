import React, { useContext } from 'react';

// css
import Style from "./course.module.css";

//image
import star from "../image/icons8-star-48.png"
import pepole from "../image/icon-people-png-6.jpg"

import { cartContext } from '../context/cartContextProvider';

const Course = ({image, name, price, number, id}) => {
    
    const {dispatch} = useContext(cartContext)

    const productData = {
        image,
        name,
        price,
        number, 
        id
    }

    return (
        <div className={Style.contaner}>
            <img src={image} alt="img" />
            <h1>{name}</h1>
            <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <button onClick={() => dispatch({type:"add", payload:productData})}>خرید</button>
            </div>
            <div>
                <div><img src={pepole} alt="pepole" />
                    <h1>{number.toLocaleString()}</h1>
                 </div>
                {price.toLocaleString() == 0 ? <h5>رایگان</h5> : <h5>{price.toLocaleString()}</h5>}
            </div>
        </div>
    );
};

export default Course;