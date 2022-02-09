import React from 'react';

//css
import Style from "./footer.module.css"

//image
import logo from "../images/1.svg"
import instagram from "../image/icons8-instagram-30 (1).png"
import tel from "../image/icons8-telegram-app-50.png"

import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className={Style.contaner}>
           <div>
                <div>
                    <div>
                        <h1>درباره بوتواستارت <p></p></h1>
                        <p>
                    ما در بوتواستارت در تلاشیم بستری فراهم کنیم که علاقه مندان به برنامه نویسی بتوانند مطالب به روز حوزه برنامه نویسی را یاد بگیرند.
                        </p>
                    </div>
                    <div>
                        <h1>فهرست سفارشی <p></p></h1>
                        <div>
                            <ul>
                                <li><Link to="/">صفحه نخست</Link></li>
                                <li><Link to="/contact">تماس با ما</Link></li>
                                <li><Link to="/cart">سبد خرید</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/product">دوره ها</Link></li>
                                <li><Link to="/aboutus">درباره ما</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1>پرداخت آسان <p></p></h1>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div>
                    <p>تمامی حقوق برای سایت بوتواستارت محفوظ می باشد.</p>
                    <img src={instagram} alt="instagram" />
                    <img src={tel} alt="tel" />
                </div>
           </div>
        </div>
    );
};

export default footer;