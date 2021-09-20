import React from 'react'
import { useState } from 'react'

const ClientForgotPass = () => {
    const [email, setEmail] = useState('')
    return (
        <>
            <section class="sr-sec">
                <div class="card m-auto sr-shadow sr-card1">
                    <div class="card-body text-center p-lg-5 p-md-5 p-sm-2 ">
                        <h5 class="card-title sr-text font-color">Reset your password</h5>
                        <p class="card-text sr-text font-color mb-0 mb-1">Enter your email address to receive information about password reset.</p>
                        <form>
                            <div class="form-input">
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-sm mb-5" placeholder="Email" />
                            </div>
                            <div class="">
                                <a href="reset-password.html" class="btn sr-w-80 mt-5 sa-btn1">Continue</a>
                            </div>
                        </form>

                    </div>
                </div>

            </section>
        </>
    )
}

export default ClientForgotPass
