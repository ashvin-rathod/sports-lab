import React, { useEffect} from 'react';
import { useState } from 'react';
import { Link, useHistory, } from 'react-router-dom';

const AdminForgotPass = () => {
  const [email, setEmail] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const history = useHistory()
  const redirect="/adminresetpass";/*this page redirect after click continu*/
  const emailRegex =/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

  const emailValidation = () => {
    emailRegex.test(email)? setEmailerror('Your email looks good!'): setEmailerror('Please enter a valid email!');
    if (email==='') {
        setEmailerror('')
    }
  };

  useEffect(() => {
       emailValidation();
  }, [email])

  const hendaleSubmit = (e)=>{
    e.preventDefault();
    if (email==='') {
        setEmailerror('Please enter a valid email!')
    }
    // emailValidation();
if (emailRegex.test(email)) {
    history.push(redirect)
}
  }


  return (
    <>
      <section class="sr-sec">
        <div class="card m-auto sr-shadow sr-card1">
          <div class="card-body text-center p-lg-5 p-md-5 p-sm-2 ">
            <h5 class="card-title sr-text font-color">Reset your password</h5>
            <p class="card-text sr-text font-color mb-0 mb-1">
              Enter your email address to receive information about password
              reset.
            </p>
            <form onSubmit={e=>hendaleSubmit(e)}>
              <div class="form-input">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control form-control-sm mb-5"
                  placeholder="Email"
                />
                <p>{emailerror}</p>
              </div>
              <div class="">
                <button type="submit"  class="btn sr-w-80 mt-5 sa-btn1">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminForgotPass;
