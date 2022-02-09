import React, {useState, useEffect} from 'react';

// css
import Style from "./Courses.module.css"

//component
import Course from './course';

// courseData
import { data } from './courseData';


const Courses = () => {

    const [coursData, setCoursData] = useState([])


    useEffect(() => {
        setCoursData(data())
    },[])

    return (
        <div className={Style.contaner}>
            <h1>دوره ها</h1>
            <div>
                <div>
                {coursData.map(item => <Course key={item.id} image={item.image} name={item.name} price={item.price} number={item.number} id={item.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default Courses;