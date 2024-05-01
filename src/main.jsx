import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './components/Content.jsx'
import Headphones from './components/Headphones.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Content />,
      },
      {
        path: '/headphones',
        element: <Headphones />,
      },
      {
        path: '/speakers',
        element: <App />,
      },
      {
        path: '/earphones',
        element: <App />,
      },
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
);
