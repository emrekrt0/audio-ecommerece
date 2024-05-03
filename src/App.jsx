import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Container from './components/Content'
import Footer from './components/Footer'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Cart from './components/smallComp/Cart'

export const hMenuContext = createContext()
export const cartContext = createContext()

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [hamMenu, setHamMenu] = useState(false)
  const [cart, setCart] = useState(false)

  useEffect(() => {
   location.pathname === '/' ? navigate('/home') : null;
}, [location, navigate]);
  return (
    <> 
      <cartContext.Provider value={{cart, setCart}}>
      <hMenuContext.Provider value={{hamMenu, setHamMenu}}>
        <Header />
        <Outlet />
        <Footer />
      </hMenuContext.Provider>
      </cartContext.Provider>
    </>  
  )
}

export default App
