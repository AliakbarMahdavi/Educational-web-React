export const errorsHandler = (data, type) => {
    const err = {}


    if (!data.email) {
        err.email = "ایمیل را وارد کنید";
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
        err.email = "ایمیل نامعتبر است";
    }else{
        delete err.email;
    }

    if (!data.password) {
        err.password = "پسورد را وارد کنید";
    }
    else if (data.password.length < 6) {
        err.password = "حداقل 6 حرف باید وارد کنید"
    }else{
        delete err.password
    }

    if (type === "signUp") {
        if (!data.name) {
            err.name = "نام را وارد کنید"
        }else{
            delete err.name
        }


        if (!data.confirmPassword) {
            err.confirmPassword = "رمز یکسان نیست"    
        }
        else if (data.confirmPassword !== data.password) {
            err.confirmPassword = "رمز یکسان نیست"
        }else {
            delete err.confirmPassword
        }
    }
    return err
}