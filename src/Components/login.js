import React,{ useState, useEffect }from 'react';

import { Link } from 'react-router-dom';

//css
import Style from "./login.module.css";

// errors
import { errorsHandler } from './errors';

// ReactToastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {

        const [FormData, setFormData] = useState({
            email:"",
            password:""
        })
        const [errors, setErrors] = useState({})
        const [touched, setTouched] = useState({
            email:false,
            password:false
        })

        const changeHandler = (e) => {
            setFormData({...FormData,[e.target.name]:e.target.value})
        }

        useEffect(() => {
            setErrors(errorsHandler(FormData))
        },[FormData])

        const Focused = (e) => {
            setTouched({
                ...touched,[e.target.name]:true
            })
        }

        const  notify = (text, type) => {
            if (type === "success") {
                toast.success(text , {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:'dark'
                    })
            }else{
                toast.error(text , {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:'dark'
                    })
            }
            
        };

        const Submited = (e) => {
            e.preventDefault()
            if (Object.keys(errors).length) {
                setTouched({
                    email:true,
                    password:true
                })
                notify("خطایی رخ داده است","err")
            }else{
                setTouched({
                    email:false,
                    password:false
                })
            notify("با موفقیت وارد شدید","success")
            }
        }

    
        return (
            <div className={Style.contaner}>
                <h1>ورود</h1>
                <div>
                    <form onSubmit={Submited}>
                        <label>ایمیل:</label>
                        <input type="text" value={FormData.email} name='email' onChange={changeHandler} onFocus={Focused}/>
                        {touched.email ? <span>{errors.email}</span> : null}
                        <label>رمز:</label>
                        <input type="password" value={FormData.password} name='password' onChange={changeHandler} onFocus={Focused}/>
                        {touched.password ? <span>{errors.password}</span> : null}
                        <button>ورود</button>
                    </form>
                    <h5> هنوز عضو نشده اید ؟<Link to="/signup">عضویت در سایت</Link> </h5>
                </div>
                <ToastContainer />
            </div>
        );
}

export default Product;