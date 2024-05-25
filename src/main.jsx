import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './components/Content.jsx'
import Checkout from './components/Checkout.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Categories from './components/Categories.jsx'

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
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/details/:slug',
        element: <ProductDetail />,
      },
      {
        path: '/categories/:category',
        element: <Categories />,
      }
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
);
