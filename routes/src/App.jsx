import { useState } from 'react'
import TailwindNavComponent from './Components/TailwindNavComponent/TailwindNavComponent'
import { Outlet } from 'react-router'
import BootstrapNavComponent from './Components/BootstrapNavComponent/BootstrapNavComponent'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

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
