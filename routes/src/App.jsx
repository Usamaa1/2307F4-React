import { useState } from 'react'
import TailwindNavComponent from './Components/TailwindNavComponent/TailwindNavComponent'
import { Outlet } from 'react-router'
import BootstrapNavComponent from './Components/BootstrapNavComponent/BootstrapNavComponent'


function App() {


  return (
    <>
    {/* <TailwindNavComponent></TailwindNavComponent> */}
    <BootstrapNavComponent></BootstrapNavComponent>
    <Outlet></Outlet>


    </>
  )
}

export default App
