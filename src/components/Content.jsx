import headphoneImage from '../assets/productselection/headphoneImage.svg';
import speakerImage from '../assets/productselection/speakerImage.svg';
import earphoneImage from '../assets/productselection/earphoneImage.svg';
import oval from '../assets/productselection/oval.svg';
import bigSpeaker from '../assets/bigProductSelection/bigSpeaker.png';
import Group6 from '../assets/productselection/Group6.svg';
import zx7speaker from '../assets/carts/zx7speaker.svg';
import yx1earphones from '../assets/carts/yx1earphones.svg';

export function MainPageHeader() {
    return (
        <div className="headerHeadline">
                <h3>NEW PRODUCT</h3>
                <h1>XX99 MARK II
                HEADPHONES</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <div className="headerButton">
                    <a href="#!"><p className="mButton1">SEE PRODUCT</p></a>
                </div>
        </div>
        )
    }

export default function Container() {

    

    function MainPageContent() {
        return(
            <>
            
            <div className="containerWrapper">
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
                                <h5 className='mButton3'>SHOP</h5>
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
                                <h5 className='mButton3'>SHOP</h5>
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
                                <h5 className='mButton3'>SHOP</h5>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path   d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bigProduct">
                    <div className="bigSpeaker">
                        <div className="bigSpeakerImg">
                            <svg width="327" height="600" viewBox="0 0 327 600" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="327" height="600" rx="8" fill="#D87D4A"/>
                                <mask id="mask0_0_1" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="327" height="600">
                                <rect width="327" height="600" rx="8" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_0_1)">
                                <g opacity="0.202147">
                                <circle cx="162.5" cy="158.5" r="139" stroke="white"/>
                                <circle cx="163" cy="158" r="159.5" stroke="white"/>
                                <circle cx="163" cy="158" r="278.5" stroke="white"/>
                                </g>
                                <rect x="77.4817" y="55" width="172.248" height="207" fill="url(#pattern0)"/>
                                </g>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_0_1" transform="scale(0.00219298 0.00182482)"/>
                                </pattern>
                                </defs>
                            </svg>
                            <img src={bigSpeaker} alt="" className='bigSpeakerAbs' />
                        </div>
                        <div className="bigSpeakerText">
                            <h5 className='bigSpeakerHeader'>ZXS9 <br />SPEAKER</h5>
                            
                            <p className='bigSpeakerSubHeader'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        </div>
                        <div className="bigSpeakerButton tac">
                                <p className='mButton1 bg-black'>SEE PRODUCT</p>
                        </div>
                    </div>
                </div>

                <div className="smallCards">
                    <div className="smallCardsImg">
                        <img src={zx7speaker} alt="" />
                    </div>
                    <div className="smallCardsTexts">
                        <h4 className='mH4'>ZX7 SPEAKER</h4>
                    </div>
                    <div className="smallCardsButton">
                        <p>SEE PRODUCT</p>
                    </div>
                </div>
                <div className="smallCardsM">
                    <div className="smallCardsImgM">
                        <img src={yx1earphones} alt="" />
                    </div>
                    <div className="smallCardsTextsM">
                        <h4 className='mH4'>YX1 EARPHONES</h4>
                        <div className="smallCardsButtonM">
                            <p>SEE PRODUCT</p>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
            
        )
    }

    return(
        <>
        <MainPageContent />
        </>
    )
}