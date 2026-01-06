import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeComponent from './Components/HomeComponent/HomeComponent.jsx';

import 'aos/dist/aos.css';




const router = createBrowserRouter([
  { 
    path: "/", 
    Component: App, 
    children:[
    {
      index: true,
      Component: HomeComponent
    }
  ] },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,

  </StrictMode>,
)
