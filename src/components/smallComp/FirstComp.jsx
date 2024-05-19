
import headphoneImage from '../../assets/productselection/headphoneImage.png';
import speakerImage from '../../assets/productselection/speakerImage.png';
import earphoneImage from '../../assets/productselection/earphoneImage.png';
import oval from '../../assets/productselection/oval.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { hMenuContext } from '../../App';
import scrollToTop from './scrollToTop';

export default function FirstComp() {
    const {hamMenu, setHamMenu} = useContext(hMenuContext)

    

    function toggleHamMenu() {
        setHamMenu(false)
        console.log(hamMenu, 'hamMenu firstcomp');
    }
    return(
        <div className="selectionContent">
                    <div className="selectionProduct">
                        <div className="selectionSVG">
                            <svg width="327" height="165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="327" height="165" rx="8" fill="#F1F1F1"/>
                            </svg>
                            <div className="selectionTexts">
                                <h5 className='selectionHeaders'>HEADPHONES</h5>
                                <div className="button3">
                                    <NavLink to={'/headphones'} onClick={() => {toggleHamMenu(); scrollToTop()}}><h5 className='mButton3'>SHOP</h5></NavLink>
                                    <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path   d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='selectionImages'>
                            <img src={headphoneImage} alt="" />
                            <svg className='ovalPlace' width="183" height="102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_0_2279)">
                                <ellipse cx="91.4444" cy="51" rx="47.4444" ry="7" fill="black"/>
                                </g>
                                <defs>
                                <filter id="filter0_f_0_2279" x="0.507492" y="0.507492" width="181.874" height="100.985" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_2279"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="selectionProduct">
                        <div className="selectionSVG">
                            <svg width="327" height="165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="327" height="165" rx="8" fill="#F1F1F1"/>
                            </svg>
                            <div className="selectionTexts">
                                <h5 className='selectionHeaders'>SPEAKERS</h5>
                                <div className="button3">
                                    <NavLink to={'/speakers'} onClick={() => {toggleHamMenu(); scrollToTop()}}><h5 className='mButton3'>SHOP</h5></NavLink>
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path   d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='selectionImages'>
                            <img src={speakerImage} alt="" />
                            <svg className='ovalPlace' width="183" height="102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_0_2279)">
                                <ellipse cx="91.4444" cy="51" rx="47.4444" ry="7" fill="black"/>
                                </g>
                                <defs>
                                <filter id="filter0_f_0_2279" x="0.507492" y="0.507492" width="181.874" height="100.985" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_2279"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="selectionProduct">
                        <div className="selectionSVG">
                            <svg width="327" height="165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="327" height="165" rx="8" fill="#F1F1F1"/>
                            </svg>
                            <div className="selectionTexts">
                                <h5 className='selectionHeaders'>EARPHONES</h5>
                                <div className="button3">
                                    <NavLink to={'/earphones'} onClick={() => {toggleHamMenu(); scrollToTop()}}><h5 className='mButton3'>SHOP</h5></NavLink>
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path   d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='selectionImages'>
                            <img src={earphoneImage} alt="" />
                            <svg className='ovalPlace' width="183" height="102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_0_2279)">
                                <ellipse cx="91.4444" cy="51" rx="47.4444" ry="7" fill="black"/>
                                </g>
                                <defs>
                                <filter id="filter0_f_0_2279" x="0.507492" y="0.507492" width="181.874" height="100.985" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_2279"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
    )
}