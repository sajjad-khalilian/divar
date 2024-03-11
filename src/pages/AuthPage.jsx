import { useState } from "react"
import CheckOtp from "components/templates/CheckOtp"
import SendOtp from "components/templates/SendOtp"

function AuthPage() {

    const [step , setStep] = useState(1)
    const [mobile , setMobile] = useState("")
    const [code , setCode] = useState("")


    return (
        <div>
            {step === 1 && <SendOtp mobile={mobile} setMobile={setMobile} setStep={setStep}/>}
            {step === 2 && <CheckOtp mobile={mobile} code={code} setCode={setCode} setStep={setStep}/>}
        </div>
    )
}

export default AuthPage
