import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//for react Router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home },
      {path: "mobiles", Component: Mobiles },
      {path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<h1>Loading.....</h1>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: "users/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts
      },
      {
        path: "posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: "about",
    element: <h1>This is my About sections</h1>
  },
  {
    path: "home",
    element: <h1>This is my Home Page</h1>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode fallback={<h1>Loading</h1>}>
    <RouterProvider router={router} />
  </StrictMode>,
)
