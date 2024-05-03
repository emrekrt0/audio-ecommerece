import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Container from './components/Content'
import Footer from './components/Footer'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Cart from './components/smallComp/Cart'

export const hMenuContext = createContext()

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [hamMenu, setHamMenu] = useState(false)

  useEffect(() => {
   location.pathname === '/' ? navigate('/home') : null;
}, [location, navigate]);
  return (
    <> 
      <hMenuContext.Provider value={{hamMenu, setHamMenu}}>
        <Header />
        <Outlet />
        <Footer />
        <Cart />
      </hMenuContext.Provider>
    </>  
  )
}

export default App
