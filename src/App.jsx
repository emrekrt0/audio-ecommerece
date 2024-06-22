import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Container from './components/Content'
import Footer from './components/Footer'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Cart from './components/smallComp/Cart'
import SelectLang from './components/smallComp/SelectLang'
import supabase from './components/smallComp/Supabase'

export const hMenuContext = createContext()
export const cartContext = createContext()
export const langContext = createContext()
export const cartProductContext = createContext()

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')
  const [hamMenu, setHamMenu] = useState(false)
  const [cart, setCart] = useState(false)
  const [user, setUser] = useState()
  const [userID, setUserID] = useState()
  
  const parsedCartProduct = JSON.parse(localStorage.getItem('cartProduct'))
  const [cartProduct, setCartProduct] = useState(parsedCartProduct || [])


  useEffect(() => {
    localStorage.setItem('lang', lang)
  },[lang])

  useEffect(() => {
    const jsonedCartProduct = JSON.stringify(cartProduct)
    localStorage.setItem('cartProduct', jsonedCartProduct)
  }, [cartProduct])

  useEffect(() => {
   location.pathname === '/' ? navigate('/home') : null;
}, [location, navigate]);

useEffect(() => {
  const fetchUser = async () => {
  const { data, error } = await supabase.auth.getSession()
    if (error) {
      alert(error.message)
    } else {
      setUser(data)
      setUserID(data.session.user.id)
    }
  }
  fetchUser()
}, [userID]);

  return (
    <>
      <langContext.Provider value={{lang, setLang}}> 
      <cartContext.Provider value={{cart, setCart}}>
      <cartProductContext.Provider value={{cartProduct, setCartProduct}}>
      <hMenuContext.Provider value={{hamMenu, setHamMenu}}>
        <Header user={user} />
        <Outlet />
        <SelectLang />
        <Footer />
      </hMenuContext.Provider>
      </cartProductContext.Provider>
      </cartContext.Provider>
      </langContext.Provider>
    </>  
  )
}

export default App
