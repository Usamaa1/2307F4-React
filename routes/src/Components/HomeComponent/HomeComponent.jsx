import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AuthContext, UserContext } from '../../Context/UserContext';

export const HomeComponent = () => {


    const nav = useNavigate();

    const {user} = useContext(AuthContext)



  return (

    <>
    <h1>Welcome {user.userName}!</h1>
    <div>HomeComponent</div>

    <Button variant='primary' onClick={()=>nav('about')} >About</Button>
    {/* <button className='btn btn-primary'>fjksdjfkjsd</button> */}

    </>

  )
}
