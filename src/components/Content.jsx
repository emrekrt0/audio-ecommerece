import headphoneImage from '../assets/productselection/headphoneImage.svg';
import oval from '../assets/productselection/oval.svg';

export default function Container() {

    function MainPageContent() {
        return(
            <div className="containerWrapper">
                <div className="selectionContent">
                    <div className="selectionHeadphone">
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
                            <h5 className='mt15'>Buy  now</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
        <MainPageContent />
        </>
    )
}