import React from 'react'
import { useState } from 'react'

const AdminNewPass = () => {
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const [showNew, setShowNew] = useState(false)
    const [showConfirn, setShowConfirn] = useState(false)
    return (
        <>
        <div className="mobile-show">
    <div id="sidemenu"></div>
  </div>
  <section className="sr-sec">
    <div className="card m-auto sr-shadow sr-card1">
      <div className="card-body text-center p-lg-5 p-md-5 p-sm-2 ">
        <h5 className="card-title sr-text font-color">Reset your password</h5>
        <p className="card-text sr-text font-color">Choose a strong new password. Make sure it's unique!</p>
        <form>
          {/* <div className="form-input">
            <input id="typepass" name="password" type={showCurrent? "text" : "password"} value={currentPass} onChange={(e)=> setCurrentPass(e.target.value)} className="form-control " placeholder="Current Password"/>
            <img  src="./images/svg/eye-close-line.svg" alt="eye-close-line" onClick={()=> setShowCurrent(!showCurrent)} className="sr-eye" />
          </div> */}
          <div className="form-input">
            <input id="typepass2" name="password" value={newPass} onChange={(e)=> setNewPass(e.target.value)} type={showNew? "text" : "password"} className="form-control" placeholder="New Password"/>
            <img  src="./images/svg/eye-close-line.svg" alt="eye-close-line" onClick={()=> setShowNew(!showNew)} className="sr-eye top-34" />
          </div>
          <div className="form-input">
            <input id="typepass3" name="password" value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value)} type={showConfirn? "text" : "password"} className="form-control mb-5"
              placeholder="Confirm Password"/>
            <img  src="./images/svg/eye-close-line.svg" alt="eye-close-line" onClick={()=> setShowConfirn(!showConfirn)} className="sr-eye top-79" />
          </div>
          <div style={{clear: 'both'}}>
            <a href="login.html" className="btn sr-w-80 mt-4 sa-btn1 font-color">Reset</a>
          </div>
        </form>

      </div>
    </div>
  </section>
        </>
    )
}

export default AdminNewPass
