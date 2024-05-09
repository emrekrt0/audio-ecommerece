
import headphoneImage from '../../assets/productselection/headphoneImage.svg';
import speakerImage from '../../assets/productselection/speakerImage.svg';
import earphoneImage from '../../assets/productselection/earphoneImage.svg';
import oval from '../../assets/productselection/oval.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { hMenuContext } from '../../App';

export default function FirstComp() {
    const {hamMenu, setHamMenu} = useContext(hMenuContext)

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    function toggleHamMenu() {
        setHamMenu(false)
        console.log(hamMenu, 'hamMenu firstcomp');
    }
    return(
        <div className="selectionContent">
                    <div className="selectionProduct">
                        <div className="selectionSVG">
                            <svg width="327" height="165" viewBox="0 0 327 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="327" height="165" rx="8" fill="#F1F1F1"/>
                            </svg>
                        </div>
                        <div className='selectionImages'>
                            <img src={headphoneImage} alt="" />
                            <img src={oval} alt="" className='ovalPlace'/>
                        </div>
                        <div className="selectionTexts">
                            <h5 className='selectionHeaders'>HEADPHONES</h5>
                            <div className="button3">
                                <NavLink to={'/headphones'} onClick={() => {toggleHamMenu(); scrollToTop()}}><h5 className='mButton3'>SHOP</h5></NavLink>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path   d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="selectionProduct">
                        <div className="selectionSVG">
                            <svg width="327" height="165" viewBox="0 0 327 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="327" height="165" rx="8" fill="#F1F1F1"/>
                            </svg>
                        </div>
                        <div className='selectionImages'>
                            <img src={speakerImage} alt="" />
                            <img src={oval} alt="" className='ovalPlace'/>
                        </div>
                        <div className="selectionTexts">
                            <h5 className='selectionHeaders'>SPEAKERS</h5>
                            <div className="button3">
                            <NavLink to={'/speakers'} onClick={() => {toggleHamMenu(); scrollToTop()}}><h5 className='mButton3'>SHOP</h5></NavLink>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path   d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="selectionProduct">
                        <div className="selectionSVG">
                            <svg width="327" height="165" viewBox="0 0 327 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="327" height="165" rx="8" fill="#F1F1F1"/>
                            </svg>
                        </div>
                        <div className='selectionImages'>
                            <img src={earphoneImage} alt="" />
                            <img src={oval} alt="" className='ovalPlace'/>
                        </div>
                        <div className="selectionTexts">
                            <h5 className='selectionHeaders'>EARPHONES</h5>
                            <div className="button3">
                            <NavLink to={'/earphones'} onClick={() => {toggleHamMenu(); scrollToTop()}}><h5 className='mButton3'>SHOP</h5></NavLink>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path   d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
    )
}