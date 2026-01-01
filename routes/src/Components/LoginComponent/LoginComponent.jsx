import React,{useContext, useRef} from 'react';
import axios from 'axios';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { AuthContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router';

const LoginComponent = () => {
   const emailRef = useRef();
       const passwordRef = useRef();


       const {login} = useContext(AuthContext);

       const nav = useNavigate();



    const LoginHandler = async (e)=>{
       e.preventDefault();
 
        login({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        nav('/')

    }




    return (
        <>
            <div className="container">
                <div className="row">
                   <div className="col mt-5">
                    <h1 className='text-center'>Login Page</h1>
                     <form>
                        <MDBInput className='mb-4' ref={emailRef} type='email' id='form2Example1' label='Email address' />
                        <MDBInput className='mb-4' ref={passwordRef} type='password' id='form2Example2' label='Password' />

                        <MDBRow className='mb-4'>
                            <MDBCol className='d-flex justify-content-center'>
                                <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                            </MDBCol>
                            <MDBCol>
                                <a href='#!'>Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn type='submit' className='mb-4' block onClick={LoginHandler}>
                            Sign in
                        </MDBBtn>

                        <div className='text-center'>
                            <p>
                                Not a member? <a href='#!'>Register</a>
                            </p>
                            <p>or sign up with:</p>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='google' />
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>
                        </div>
                    </form>
                   </div>
                </div>

            </div>

        </>
    )
}

export default LoginComponent