import { useState } from 'react'
import NavbarComponent from './Components/HomeComponent/NavbarComponent/NavbarComponent'
import { Outlet } from 'react-router'



function App() {


  return (
    <>

    <NavbarComponent></NavbarComponent>
    <Outlet></Outlet>

    </>
  )
}

export default App
