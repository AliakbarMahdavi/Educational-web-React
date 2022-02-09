import React from 'react';
import Styles from "./banner.module.css"
import banner from "../images/banner.png"
import { Link } from 'react-router-dom';


const Banner = () =>{


        return (
            <div className={Styles.continer}>
                <div>
                    <div>
                        <img src={banner} alt="header"></img>
                    </div>
                    <div>
                        <div>
                            <h1>آموزش پروژه محور برنامه نویسی</h1>
                            <h5>پشتیبانی قدم به قدم | وبینار های رایگان</h5>
                            <Link to="/product"><span>همین الان شروع کن</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Banner;