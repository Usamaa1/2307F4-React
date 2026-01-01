import React, { useContext, useRef, useState } from 'react';
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




const RegisterComponent = () => {


       const userNameRef = useRef();
       const emailRef = useRef();
       const passwordRef = useRef();

       let [isUserRegistered, setIsUserRegistered] = useState(false);


       const {register} = useContext(AuthContext);

    const registerHandler = async (e) => {
        e.preventDefault();




        register({
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
    setIsUserRegistered(true)

    }





    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <h1 className='text-center'>Signup Page</h1>
                        <form>

                            <MDBInput className='mb-4' ref={userNameRef} id='userName' label='Username' />
                            <MDBInput className='mb-4' ref={emailRef} type='email' id='email' label='Email address' />
                            <MDBInput className='mb-4' ref={passwordRef} type='password' id='password' label='Password' />

                            <MDBCheckbox
                                wrapperClass='d-flex justify-content-center mb-4'
                                id='form3Example5'
                                label='Subscribe to our newsletter'
                                defaultChecked
                            />

                            <MDBBtn type='submit' className='mb-4' onClick={(e)=>registerHandler(e)} block>
                                Sign in
                            </MDBBtn>

                            {
                                isUserRegistered ? (
                           
                                    <div className='alert alert-success'>User Registered</div>
             
                                ):(
                                    <div></div>
                                )


                            }
                            

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

export default RegisterComponent