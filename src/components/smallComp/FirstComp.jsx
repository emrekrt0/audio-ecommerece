
import headphoneImage from '../../assets/productselection/headphoneImage.svg';
import speakerImage from '../../assets/productselection/speakerImage.svg';
import earphoneImage from '../../assets/productselection/earphoneImage.svg';
import oval from '../../assets/productselection/oval.svg';

export default function FirstComp() {
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
    )
}