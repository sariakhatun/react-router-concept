import { StrictMode, Suspense } from 'react'
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
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users/Users2.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const router = createBrowserRouter([  
    
      {
        path:'/',
        Component:Root,
        children:[
          {index:true, Component:Home},
          {path :'mobiles', Component: Mobiles},
          {path:'laptops', Component:Laptop},
          {path:'home', Component:Home},
          {
            path:'users',
            loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
             Component:Users
          },
          {
            path:'users2',
            element: <Suspense fallback={<span>loading.....</span>}>
              <Users2 userPromise={userPromise}></Users2>
            </Suspense>
            
          },
          {
            path: 'users/:userId',
            loader: ({params})=>
              fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
            Component: UserDetails
          },
          {
            path:'posts',
            loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
            Component: Posts
          },
          {
            path:'posts/:postId',
            loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
            Component: PostDetails
          },{
            path:'*',
            element: <h3> Not Found : 404 Status</h3>
          }
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
