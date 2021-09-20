
import axios from 'axios';
import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import {postaxios} from '../../../axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passerror, setPasserror] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [isPasswordShow, setIsPasswordShow] = useState(true);

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (email === '') {
      setEmailerror('Please enter email id');
    } else {
      setEmailerror('');
    }
    if (password === '') {
      setPasserror('Please enter password ');
    } else {
      setPasserror('');
    }
    if (email && password) {

      // fetch api
      var urlencoded = new URLSearchParams();
      urlencoded.append("email", email);
      urlencoded.append("password", password);
      
      const url = 'admin/login';
      
      // postaxios(url,urlencoded).then((result)=>{
      //   console.log('result are', result.data.token)
      //   if (result.data.token) {
      //   console.log('result are', result.data)
      //   localStorage.setItem('admin-login', result.data.token);
      //   localStorage.setItem('admin-details', JSON.stringify(result.data.res));
      //   history.push('/admindashboard');
      //   console.log('data');
      //   } else {
      //     alert('Invalid User');
      //     console.log('error');
      //   }
      // })


      
      axios.post(`http://localhost:3000/admin/login`,urlencoded,{
        headers: { "Content-Type": 'application/x-www-form-urlencoded' }
      }).then((result)=>{
        console.log('result are', result.data.token)
        if (result.data.token) {
        // console.log('result are', result.data)
        localStorage.setItem('admin-login', result.data.token);
        localStorage.setItem('login-details', JSON.stringify(result.data.res));
        // localStorage.setItem('login-id', result.data);
        history.push('/admindashboard');
        // console.log('data');
        } else {
          alert('Invalid User');
          console.log('error');
        }
      })

      // fetch('http://localhost:6302/admin/login', {
      //   method: 'post',
      //   headers: {
      //     Accept: 'application/json',
      //     "Content-Type": 'application/x-www-form-urlencoded',
      //   },
      //   body: JSON.stringify({ email, password }),
      // })
      //   .then((Response) => Response.json())
      //   .then((result) => {
      //     console.log('result-----',result);
      //     if (result.token) {
      //       localStorage.setItem('login', result.token);
      //       console.log(result.token);
      //       history.push('/admindashboard');
      //       console.log('data');
      //     } else {
      //       alert('Invalid User');
      //       console.log('error');
      //     }
      //   });
    }
  };

  return (
    <>
      <div className="bg-color">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
            <div className="col-lg-6 col-md-6 form-container">
              <div className="col-lg-6 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                <div className="logo mb-4">
                  <img src="./images/logo.svg" alt="logo" />
                </div>
                <div className="heading mb-4">
                  <h5 className="f1-color">Login to your account</h5>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-input">
                    <FormGroup className="mb-2 my-2">
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control mb-2"
                        placeholder="Email"
                        required
                      />
                    </FormGroup>
                    <p className="login-error">{emailerror}</p>

                    <FormGroup>
                      <Form.Control
                        id="typepass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type={isPasswordShow ? 'password' : 'text'}
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <img
                        src="./images/svg/eye-close-line.svg"
                        alt="eye-close-line"
                        className="sr-eye"
                        onClick={() => setIsPasswordShow(!isPasswordShow)}
                      />
                    </FormGroup>

                    <p className="login-error">{passerror}</p>

                    <div className="field-wrapper toggle-pass text-left d-flex mt-4">
                      <Form.Label className="switch s-primary mr-2">
                        <Form.Control
                          type="checkbox"
                          id="toggle-password"
                          className="d-none"
                        />
                        <span className="slider round"></span>
                      </Form.Label>
                      <p
                        className="d-inline-block sr-font"
                        style={{ fontSize: '12px' }}
                      >
                        Remember me
                      </p>
                    </div>
                    <div className="sr-link mt-3 mb-5">
                      <Link to='/adminforgotpass' className="sa-deco1">
                        Forgot Password ?
                      </Link>
                    </div>
                    <div className="mb-3">
                      {/* <Button className="btn sr-w-70 mb-3 sa-btn1">Login</Button> */}
                      <input
                        className="btn sr-w-70 mb-3 sa-btn1"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
