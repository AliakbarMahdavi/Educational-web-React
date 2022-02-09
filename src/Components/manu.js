import React, { useContext } from 'react';
import image from "../images/logo.svg"
import { Link } from 'react-router-dom';

// css
import Styles from "./menu.module.css"

// image
import cardIcon from "../image/icons8-shopping-basket-64.png"

//context
import { cartContext } from '../context/cartContextProvider';

const Menu = () => {
    const {cartData} = useContext(cartContext)
    
        return (
            <header>
                     <div className={Styles.logo}>
                        <img src={image} alt="logo"></img>
                    </div>
                    <div className={Styles.menu}>
                        <ul>
                                <li><Link to="/">صفحه نخست</Link></li>
                                <li><Link to="/product">دوره ها</Link></li>
                                <li><Link to="/contact">تماس با ما</Link></li>
                                <li><Link to="/aboutus">درباره ما</Link></li>
                                <li><Link to="/cart">سبد خرید</Link></li>
                        </ul>
                    </div>
                    <div className={Styles.shopping}>
                        <Link to="/cart">
                            <img src={cardIcon} alt="cardIcon" />
                        </Link>
                        <h1>{cartData.itemsCounter}</h1>
                    </div>
                    <div className={Styles.login}>
                        <div>
                            <Link to="/login">
                                <h1> ورود و ثبت نام </h1>
                            </Link>
                        </div>

                    </div>

            </header>
        )
}

export default Menu;