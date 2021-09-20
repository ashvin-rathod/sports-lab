import React, { Component, useState } from 'react'
import { Button, Container, Form, FormGroup, Row } from 'react-bootstrap'
// import '../../../../public/images/add-shop2'
const ClientLogin = ()=> {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         isPasswordShow: true,
    //         email: '',
    //         password: '',
    //         passerror: '',
    //         emailerror: ''
    //     }
    // }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passerror, setPasserror] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [isPasswordShow, setIsPasswordShow] = useState(true);

   const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        if (email === '') {
            setEmailerror( 'Please enter email id' )
          }
          else {
            setEmailerror( '' )
          }
          if (password === '') {
            setPasserror( 'Please enter password ' )
          }
          else {
            setPasserror( '' )
          }
          if (email && password) {
            alert(password)
          }
    }
    
        // const { isPasswordShow, email, password, emailerror, passerror } = this.state
        return (
            <>
                <body className="bg-color">
                    <Container fluid={true}>
                        <Row>
                            <div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
                            <div className="col-lg-6 col-md-6 form-container">
                                <div className="col-lg-6 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                                    <div className="logo mb-4">
                                        <img src='./images/logo.svg' alt="logo" />
                                    </div>
                                    <div className="heading mb-4">
                                        <h5 className="f1-color">Login to your account</h5>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="form-input">
                                            <FormGroup className='mb-2 my-2'>
                                                <Form.Control type="email" value={email} onChange={(e) => setEmail( e.target.value )} class="form-control mb-2" placeholder="Email" required />
                                            </FormGroup>            
                                            <p className="login-error">{emailerror}</p>

                                            <FormGroup>
                                                <Form.Control id="typepass" value={password} onChange={(e) => setPassword( e.target.value )} name="password" type={isPasswordShow ? 'password' : 'text'} className="form-control"
                                                    placeholder="Password" required />
                                                <img src="./images/svg/eye-close-line.svg" alt="eye-close-line" className="sr-eye" onClick={() => setIsPasswordShow( !isPasswordShow )} />
                                            </FormGroup>

                                            <p className="login-error">{passerror}</p>

                                            <div className="field-wrapper toggle-pass text-left d-flex mt-4">
                                                <Form.Label className='switch s-primary mr-2'>
                                                    <Form.Control type="checkbox" id="toggle-password" className='d-none' />
                                                    <span className="slider round"></span>
                                                </Form.Label>
                                                <p className="d-inline-block sr-font" style={{ fontSize: "12px" }}>Remember me</p>
                                            </div>
                                            <div className="sr-link mt-3 mb-5">
                                                <a href="#" className="sa-deco1">Forgot Password ?</a>
                                            </div>
                                            <div className="mb-3">
                                                {/* <Button className="btn sr-w-70 mb-3 sa-btn1">Login</Button> */}
                                                <input className="btn sr-w-70 mb-3 sa-btn1" type="submit" value="Login" />
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </body>
            </>
        )
    
}

export default ClientLogin