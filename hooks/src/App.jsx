import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import NavComponent from './Component/NavComponent/NavComponent'
import BootstrapNav from './BootstrapNav'
import Loading from './Loading'

export const App = () => {
  return (
    <>
    <NavComponent></NavComponent>
    {/* <BootstrapNav></BootstrapNav> */}

    <Suspense fallback={<Loading></Loading>}>
    <Outlet></Outlet>

    </Suspense>
    
    
    
    </>
  )
}
