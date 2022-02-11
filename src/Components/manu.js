import React, { useContext, useState } from 'react';
import image from "../images/logo.svg"
import { Link } from 'react-router-dom';

// css
import Styles from "./menu.module.css"

// image
import cardIcon from "../image/icons8-shopping-basket-64.png"
import loginLogo from "../image/icons8-enter-50.png"
import toggle from "../image/burger-menu-icon-16.jpg"
import closeIcone from "../image/icons8-close-48.png"

//context
import { cartContext } from '../context/cartContextProvider';

const Menu = () => {

    const {cartData} = useContext(cartContext)
    const [clicked, setClicked] = useState({
        click:false
    })

    const toggled = () => {
        setClicked({click: true})
    }

    const close = () => {
        setClicked({click: false})
    } 
    
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
                        <Link to="/login">
                            <img src={loginLogo} alt="loginLogo" />
                        </Link>
                    </div>
                    <img className={Styles.image} src={toggle} alt="toggle"  onClick={toggled}/>
                    <div className={clicked.click ? Styles.click : Styles.hide} style={{display:"none"}}>
                        <ul>
                                <li onClick={close}>
                                    <img src={closeIcone} alt="closeIcone" />
                                </li>
                                <li><Link to="/">صفحه نخست</Link></li>
                                <li><Link to="/product">دوره ها</Link></li>
                                <li><Link to="/contact">تماس با ما</Link></li>
                                <li><Link to="/aboutus">درباره ما</Link></li>
                                <li><Link to="/cart">سبد خرید</Link></li>
                        </ul>
                    </div>
            </header>
        )
}

export default Menu;