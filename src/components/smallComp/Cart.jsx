import hs1 from '../../assets/cart/hs-1.png'
import hs2 from '../../assets/cart/hs-2.png'
import hs3 from '../../assets/cart/hs-3.png'
import { NavLink, useLocation } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { hMenuContext, cartContext, langContext, cartProductContext } from '../../App';
import scrollToTop from './scrollToTop';
import supabase from './Supabase';


export default function Cart() {
    const {hamMenu, setHamMenu} = useContext(hMenuContext)
    const {cart, setCart} = useContext(cartContext)
    const {lang} = useContext(langContext)
    const {cartProduct} = useContext(cartProductContext)
    
    console.log(cartProduct, 'cartProduct CART.JSX');

    function handleBackdropClick() {
        setCart(false)
        setHamMenu(false)
    }
    function toggleHamMenu() {
        setHamMenu(!hamMenu)
        console.log(hamMenu, 'hamMenu firstcomp');
    }
    return(
       <>
       
       {cart && <div className='backdrop' onClick={handleBackdropClick}></div>}
        <div className="cartContainer">
            <div className="cartTop">
                <div className="cartHeader">
                    <h6 className='mH6'>{lang==='en'?'CART (3)' : 'SEPET (3)'}</h6>
                </div>
                <div className="cartRmvBtn">
                    <p className='mBody underline'>{lang==='en'? 'Remove All' : 'Hepsini Kaldır'}</p>
                </div>
            </div>
            {cartProduct && cartProduct.map((product,index) => (
                <div key={index}>{product.title}</div>
            ))}
            <div className="cartProductsContainer">
                <div className="cartProducts">
                    <div className="productInf">
                        <div className="porductImg">
                            <div className='cartImgBG'>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="64" height="64" rx="8" fill="#F1F1F1"/>
                                </svg>
                            </div>
                            <img src={hs1} alt="hs1" />
                        </div>
                        <div className="productTxt">
                            <h4 className='cartH'>XX99 MK II</h4>
                            <h6 className='cartPrice'>$ 2,999</h6>
                        </div>
                    </div>
                    <div className="productQty">
                        <div className="qtyRmv pQtyNumb op25">
                            -
                        </div>
                        <h3 className='pQtyNumb'>1</h3>
                        <div className="qtyAdd pQtyNumb op25">
                            +
                        </div>
                    </div>
                </div>
                <div className="cartProducts">
                    <div className="productInf">
                        <div className="porductImg">
                            <div className='cartImgBG'>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="64" height="64" rx="8" fill="#F1F1F1"/>
                                </svg>
                            </div>
                            <img src={hs2} alt="hs1" />
                        </div>
                        <div className="productTxt">
                            <h4 className='cartH'>XX59</h4>
                            <h6 className='cartPrice'>$ 899</h6>
                        </div>
                    </div>
                    <div className="productQty">
                        <div className="qtyRmv pQtyNumb op25">
                            -
                        </div>
                        <h3 className='pQtyNumb'>1</h3>
                        <div className="qtyAdd pQtyNumb op25">
                            +
                        </div>
                    </div>
                </div>
                <div className="cartProducts">
                    <div className="productInf">
                        <div className="porductImg">
                            <div className='cartImgBG'>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="64" height="64" rx="8" fill="#F1F1F1"/>
                                </svg>
                            </div>
                            <img src={hs3} alt="hs1" />
                        </div>
                        <div className="productTxt">
                            <h4 className='cartH'>YX1</h4>
                            <h6 className='cartPrice'>$ 599</h6>
                        </div>
                    </div>
                    <div className="productQty">
                        <div className="qtyRmv pQtyNumb op25">
                            -
                        </div>
                        <h3 className='pQtyNumb'>1</h3>
                        <div className="qtyAdd pQtyNumb op25">
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className="cartFooter">
                <p className='mBody'>TOTAL</p>
                <h6 className='mH6'>$ 5,396</h6>
            </div>
            <div className="cartCheckout">
                <NavLink to={'/checkout'} onClick={scrollToTop}><h1 className='mButton1 tac' onClick={() => setCart(false) }>{lang==='en'? 'CHECKOUT' : 'ÖDEMEYE GİT'}</h1></NavLink>
            </div>
        </div>
       </>
    )
}