import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import {App} from './App.jsx'
import { UseStateHookComponent } from './Component/UseStateHookComponent/UseStateHookComponent.jsx';
import { UseRefHookComponent } from './Component/UseRefHookComponent/UseRefHookComponent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        index: true,
        Component: UseStateHookComponent
      },
      {
        path: '/useRef',
        Component: UseRefHookComponent
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
