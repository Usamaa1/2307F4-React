import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export const HomeComponent = () => {


    const nav = useNavigate();



  return (

    <>
    <div>HomeComponent</div>

    <Button variant='primary' onClick={()=>nav('about')} >About</Button>
    {/* <button className='btn btn-primary'>fjksdjfkjsd</button> */}

    </>

  )
}
