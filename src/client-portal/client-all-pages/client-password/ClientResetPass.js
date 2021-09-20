import React, { useState } from 'react'

const ClientResetPass = () => {
    const [vCode, setVCode] = useState({ first: '', second: '', third: '', fourth: '' })
    return (
        <><div className="mobile-show">
            <div id="sidemenu"></div>
        </div>
            <section className="sr-sec">
                <div className="card m-auto sr-shadow sr-card1">
                    <div className="card-body text-center p-lg-5 p-md-5 p-sm-2 ">
                        <h5 className="card-title sr-text font-color">Reset your password</h5>
                        <p className="card-text sr-text font-color">Enter the verification code that we just sent you on your email.</p>
                        <form>
                            <div className="form-input d-flex justify-content-center mb-5">
                                <span> <input type="text" className="form-control sr-otp text-center" id="inputZip" maxLength="1" /></span>
                                <span> <input type="text" className="form-control sr-otp text-center" id="inputZip" maxLength="1" /></span>
                                <span> <input type="text" className="form-control sr-otp text-center" id="inputZip" maxLength="1" /></span>
                                <span> <input type="text" className="form-control sr-otp text-center" id="inputZip" maxLength="1" /></span>
                            </div>

                            <div>
                                <a href="new-password.html" className="btn sr-w-80 mt-5 sa-btn1">Verify</a>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="mt-5">
                    <p className="card-text sr-text d-flex justify-content-center f1-color">Didn't receive a code?
                        <a href="" className="ml-1 sa-edit1 f1-color"> Resend</a></p>
                </div>

            </section></>
    )
}

export default ClientResetPass
