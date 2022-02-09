import React, { useState } from 'react';

import Style from "./contact.module.css"

// image
import logo from "../image/—Pngtree—vector location icon_3989706.png"
import EmailLogo from "../image/icons8-email-64.png"

const Contact = () => {

    const [data, setData] = useState({
        name:"",
        email:""
    });
    const [touched, setTouched] = useState({})
    const [err, setErr] = useState({})

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const Focused = e => {
        setTouched({
            [e.target.name]:true
         })
    }

    if (!data.name) {
        err.name = "نام را وارد کنید!" 
    }else{
        delete err.name
    }

    if (!data.email) {
        err.email = "ایمیل را وارد کنید!" 
    }else if (!/\S+@\S+\.\S+/.test(data.email)) {
        err.email = "ایمیل نامعتبر است" 
    }else{
        delete err.email
    }

    const submited = (e) => {
        e.preventDefault();

        if (Object.keys(err)) {
            setTouched({
                name:true,
                email:true
             })
        }
    }

    
        return (
            <div className={Style.contaner}>
                <div>
                    <div>
                        <h5>راه های ارتباطی</h5>
                        <div className={Style.location}>
                            <img src={logo} alt="logo" />
                        <h1>آدرس : تهران، پیروزی، نبرد جنوبی، مسلم شمالی</h1>
                        </div>
                        <div className={Style.email}>
                            <img src={EmailLogo} alt="EmailLogo" />
                            <h1>آدرس ایمیل : xrexali@yahoo.com</h1>
                        </div>
                    </div>
                    <div>
                        <h1>تماس با ما</h1>
                        <div>
                            <form onSubmit={submited}>
                                <label>نام <span>*</span></label>
                                <input type="text" name='name' onChange={changeHandler} value={data.name} onFocus={Focused}/>
                                {touched.name ? <span style={{color:"red", marginBottom:"20px", fontFamily: "iransanss"}}>{err.name}</span> : null}
                                <label>ایمیل <span>*</span></label>
                                <input type="text" name='email' onChange={changeHandler} value={data.email} onFocus={Focused}/>
                                {touched.email ? <span style={{color:"red", marginBottom:"20px", fontFamily: "iransanss"}}>{err.email}</span> : null}
                                <label>متن خود را بنویسید <span>*</span></label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <button>ارسال</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Contact;