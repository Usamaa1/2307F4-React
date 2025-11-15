import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {App} from './App.jsx'
// import { UseStateHookComponent } from './Component/UseStateHookComponent/UseStateHookComponent.jsx';
// import { UseRefHookComponent } from './Component/UseRefHookComponent/UseRefHookComponent.jsx';
// import { UseCallbackHookComponent } from './Component/UseCallbackHookComponent/UseCallbackHookComponent.jsx';
// import { UseMemoHookComponent } from './Component/UseMemoHookComponent/UseMemoHookComponent.jsx';
// import { UseEffectHookComponent } from './Component/UseEffectHookComponent/UseEffectHookComponent.jsx';



const UseStateHookComponent = lazy(()=>import('./Component/UseStateHookComponent/UseStateHookComponent.jsx'));
const UseRefHookComponent = lazy(()=>import('./Component/UseRefHookComponent/UseRefHookComponent.jsx'));
const UseCallbackHookComponent = lazy(()=>import('./Component/UseCallbackHookComponent/UseCallbackHookComponent.jsx'));
const UseMemoHookComponent = lazy(()=>import('./Component/UseMemoHookComponent/UseMemoHookComponent.jsx'));
const UseEffectHookComponent = lazy(()=>import('./Component/UseEffectHookComponent/UseEffectHookComponent.jsx'));
const FormValidationByReactFormHook = lazy(()=>import('./Component/FormValidationByReactFormHook/FormValidationByReactFormHook.jsx'))




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
      },
      {
        path: '/useCallBack',
        Component: UseCallbackHookComponent
      }
      ,
      {
        path: '/useMemo',
        Component: UseMemoHookComponent
      }
      ,
      {
        path: '/useEffect',
        Component: UseEffectHookComponent
      }
      ,
      {
        path: '/formValidation',
        Component: FormValidationByReactFormHook
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
