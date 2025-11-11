import React from 'react'
import { Outlet } from 'react-router'
import NavComponent from './Component/NavComponent/NavComponent'
import BootstrapNav from './BootstrapNav'

export const App = () => {
  return (
    <>
    {/* <NavComponent></NavComponent> */}
    <BootstrapNav></BootstrapNav>
    <Outlet></Outlet>
    
    
    
    </>
  )
}
