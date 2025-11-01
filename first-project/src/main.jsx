import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import './index.css'
import { App } from './App';
import Navbar from './Navbar';
// import { App, Second } from './App';
// import App from './App';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App></App> */}
    {/* <App></App>
    <Second></Second> */}
    {/* <Navbar></Navbar> */}
    <App></App>






  </StrictMode>,
)
