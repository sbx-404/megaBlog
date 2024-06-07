import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' 
import store  from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Login from './components/Login.jsx'
import { AuthLayout, Signup } from './components/index.js'
import Home from "./Pages/Home.jsx"
import AllPosts from "./Pages/AllPosts.jsx"
import AddPost from "./Pages/AddPost.jsx"
import EditPost from "./Pages/EditPost.jsx"
import Post from './Pages/Post.jsx'
import Login from './Pages/Login.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[{
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:(
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      )
    },
    {
      path:"/signup",
      element:(
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      )
    },
    {
      path:"/all-posts",
      element:(
        <AuthLayout authentication>
          {" "}
          <AllPosts />
        </AuthLayout>
      )
    },
    {
      path:"/add-posts",
      element:(
        <AuthLayout authentication>
          {" "}
          <AddPost />
        </AuthLayout>
      )
    },
    {
      path:'/edit-post/:slug',
      element:(
        <AuthLayout authentication>
          {" "}
          <EditPost />
        </AuthLayout>
      )
    },
    {
      path:'/post/:slug',
      element:<Post />
    },
  ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
    </ Provider>
  </React.StrictMode>,
)
