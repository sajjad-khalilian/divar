import { sendOtp } from "services/auth";
import styles from "./SendOtp.module.css"


function SendOtp({mobile , setMobile , setStep}) {

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if(mobile.length !== 11) return;

        const {response , error} = await sendOtp(mobile)
        console.log({response , error});
        if(response) setStep(2)
        if(error) console.log(error.response.data.message);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <h2>پروژه دیوار</h2>
            <p>ورود به حساب کاربری</p>
            <span>برای استفاده از دیوار لطفا شماره تلفن خود را وارد کنید.کد تایید به این شماره ارسال خواهد شد</span>
            <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
            <input type="text" id="input" value={mobile} placeholder="شماره موبایل خود را وارد کنید" onChange={e => setMobile(e.target.value)}/>
            <button type="submit">ارسال کد تایید</button>
        </form>
    )
}

export default SendOtp
