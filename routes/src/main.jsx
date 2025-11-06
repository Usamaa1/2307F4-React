import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import './index.css'
import App from './App.jsx'
import { HomeComponent } from './Components/HomeComponent/HomeComponent.jsx';
import { ContactComponent } from './Components/ContactComponent/ContactComponent.jsx';
import { AboutComponent } from './Components/AboutComponent/AboutComponent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomeComponent
      },
      {
        path: 'about',
        Component: AboutComponent
      },
      {
        path: 'contact',
        Component: ContactComponent
      }
    ]

  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
