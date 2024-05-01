import { useEffect, useState } from 'react'
import Header from './components/Header'
import Container from './components/Content'
import Footer from './components/Footer'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
   location.pathname === '/' ? navigate('/home') : null;
}, [location, navigate]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>  
  )
}

export default App
