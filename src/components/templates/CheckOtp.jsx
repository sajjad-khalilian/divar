import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import styles from "./CheckOtp.module.css"


function CheckOtp({mobile , code , setCode , setStep}) {

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        if(code.length !== 5) return;


        const {response , error} = await checkOtp(mobile , code)
        console.log({response , error});
        if(response){
            setCookie(response.data)
            navigate("/")
        }
        if(error) console.log(error.response.data.message);

    }


    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <p>تایید کد پیامک شده</p>
            <span> کد تایید شده به شماره موبایل {mobile} را وارد کنید</span>
            <label htmlFor="input">کد تایید را وارد کنید</label>
            <input type="text" id="input" value={code} placeholder="کد تایید را وارد کنید" onChange={e => setCode(e.target.value)}/>
            <button onClick={() => setStep(2)}>ورود</button>
            <button className={styles.backPage} onClick={() => setStep(1)}>تغییر شماره موبایل</button>
        </form>
    )
}

export default CheckOtp
