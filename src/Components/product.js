import React, { useEffect, useState } from 'react';

// css
import Style from "./product.module.css";

//component
import Course from './course';

// courseData
import { data } from './courseData';


const Product = () =>{

    const [coursData, setCoursData] = useState([])
    const [inputData, setInputData] = useState("")
    const [bol, setBol] = useState(false)

    useEffect(() => {
        setCoursData(data())
    },[])

    const changeHandler = (e) => {
        const data = e.target.value;
        setInputData(data)
    } 

    const newCoursData = coursData.filter(item => item.name.includes(inputData))
    useEffect(() => {
        if (newCoursData.length === 0) {
            setBol(true)
        }else{
            setBol(false)
        }
    })


        return (
            <div className={Style.contaner}>
                <div>
                    <input type="text" placeholder='جستجوی دوره...' value={inputData} onChange={changeHandler}/>
                </div>
                <div>
                    <div>
                        {newCoursData.map(item => <Course key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} number={item.number}/>)}
                    </div>
                </div>
                {bol ? <h1 style={{margin:"100px", fontFamily:"iransanss"}}>موردی یافت نشد !</h1> : null}
            </div>
        );
}

export default Product;