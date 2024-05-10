import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './components/Content.jsx'
import Headphones from './components/Headphones.jsx'
import Speakers from './components/Speakers.jsx'
import Earphones from './components/Earphones.jsx'
import Checkout from './components/Checkout.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import { useParams } from 'react-router-dom'

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
        element: <Speakers />,
      },
      {
        path: '/earphones',
        element: <Earphones />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/details/:slug',
        element: <ProductDetail />,
      }
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
);
