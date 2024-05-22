import React from 'react'
import hs1 from '../../assets/cart/hs-1.png'
import hs2 from '../../assets/cart/hs-2.png'
import hs3 from '../../assets/cart/hs-3.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from './scrollToTop'

export default function Summary() {
    const [modal, setModal] = useState(false)

    function handleBackdropClick() {
        setModal(false);
    }

    function openModal() {
        setModal(true);
    }

    function ShowModal() {
        return (
           <div className="modals">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-header-svg">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="32" fill="#D87D4A"/>
                                <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" stroke-width="4"/>
                            </svg>
                        </div>
                    </div>
                    <div className="modal-header-text">
                        <div className="modal-header-texts">
                            <div className="model-header-text-headline">
                                <h1 className='modalH1'>THANK YOU</h1>
                                <h1 className='modalH1'>FOR YOUR ORDER</h1>
                            </div>
                            <p className='mBody tal'>You will receive an email confirmation shortly.</p>
                        </div>
                    </div>
                    <div className="modal-body">
                        <svg width="263" height="232" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="263" height="232" rx="8" fill="#F1F1F1"/>
                        </svg>
                        <div className="modal-body-content">
                            <div className="modal-body-product">
                                <div className="modal-body-product-info">
                                    <div className="modal-body-productImg">
                                        <img src={hs1} alt="hs1" />
                                    </div>
                                    <div className="modal-body-productTxt">
                                        <h4 className='cartH'>XX99 MK II</h4>
                                        <h6 className='cartPrice'>$ 2,999</h6>
                                    </div>
                                    <div className="modal-body-productQty">
                                        <h3 className='smryNumb'>x1</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body-divider"></div>
                            <div className="modal-body-txt">
                                <div className="modal-body-txt-content">
                                    <p className='modalSub tac op50'>and 2 other item(s)</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body-footer">
                                <p className='mBody txtWhite tal'>GRAND TOTAL</p>
                                <h6 className='mH6 txtWhite'>$ 5,446</h6>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="modalBttn">
                            <Link to={'/home'}  onClick={scrollToTop}><p class="mButton1 tac">BACK TO HOME</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return(
    <>
        <div className="summaryContainer">
            <div className="cartTop">
                <div className="cartHeader">
                    <h6 className='mH6'>SUMMARY</h6>
                </div>
            </div>
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
                    <div className="smrytQty">
                        <h3 className='smryNumb'>x1</h3>
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
                    <div className="smrytQty">
                        <h3 className='smryNumb'>x2</h3>
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
                    <div className="smrytQty">
                        <h3 className='smryNumb'>x1</h3>
                    </div>
                </div>
            </div>
            <div className="sumFooterContainer">
                <div className="sumFooterContent">
                    <div className="sumFooter">
                        <p className='mBody'>TOTAL</p>
                        <h6 className='mH6'>$ 5,396</h6>
                    </div>
                    <div className="sumFooter">
                        <p className='mBody'>SHIPPING</p>
                        <h6 className='mH6'>$ 50</h6>
                    </div>
                    <div className="sumFooter mb24">
                        <p className='mBody'>VAT (INCLUDED)</p>
                        <h6 className='mH6'>$ 1,079</h6>
                    </div>
                </div>
                <div className="sumFooter mb32">
                    <p className='mBody'>GRAND TOTAL</p>
                    <h6 className='mH6 txtOrange'>$ 5,446</h6>
                </div>
                <div class="sumBttn">
                    <p class="mButton1 tac" onClick={openModal}>CONTINUE & PAY</p>
                </div>
            </div>
            
        </div>
        {modal && <div className="cOutModal">
            {modal && <ShowModal />}
            {modal && <div className='backdrop' onClick={handleBackdropClick}></div>}
        </div>
        }
    </>
    )
}