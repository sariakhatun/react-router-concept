import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Route/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobliles/Mobiles.jsx';
import Laptop from './Components/Laptops/Laptop.jsx';

const router = createBrowserRouter([  
    
      {
        path:'/',
        Component:Root,
        children:[
          {index:true, Component:Home},
          {path :'mobiles', Component: Mobiles},
          {path:'laptops', Component:Laptop},
          {path:'home', Component:Home}
        ]
      },
      {
        path:'about',
        element: <div>About me</div>
      },
      {
        path: 'blogs',
        element: <div>All my blogs here</div>
      },
      {
        path: 'app',
        Component: App
      },
      {
        path: '/app2',
        element: <App></App>
      }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
