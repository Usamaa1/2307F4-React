import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import './index.css'
import App from './App.jsx'
import { HomeComponent } from './Components/HomeComponent/HomeComponent.jsx';
import { ContactComponent } from './Components/ContactComponent/ContactComponent.jsx';
import { AboutComponent } from './Components/AboutComponent/AboutComponent.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Components/LoginComponent/LoginComponent.jsx';
import RegisterComponent from './Components/RegisterComponent/RegisterComponent.jsx';
import { UserContext } from './Context/UserContext.jsx';



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

  },
  {
    path: '/login',
    Component: LoginComponent
  }
  ,
  {
    path: '/signup',
    Component: RegisterComponent
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} ></RouterProvider>
    </UserContext>
  </StrictMode>,
)
