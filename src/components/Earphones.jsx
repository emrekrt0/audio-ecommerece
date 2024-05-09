import ep1 from '../assets/categoryImgs/earphones/ep1.png';
import FirstComp from './smallComp/FirstComp';



export default function Speakers() {

    return(
        <>
        <div className="categoryItems">
            <div className="categoryHeader">
                <h4 className="mH4 txtWhite">EARPHONES</h4>
            </div>
            <div className='categoryContainer'>
                <div className="categoryContent">
                    <div className="contentHeader">
                        <div className="headerImgBg">
                            <svg width="327" height="352" viewBox="0 0 327 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="327" height="352" rx="8" fill="#F1F1F1"/>
                            </svg>
                        </div>
                        <img src={ep1} />
                    </div>
                    <div className="contentText">
                        <p className='mOverline txtOrange'>NEW PRODUCT</p>
                        <h4 className='mH4 ls-1'>YX1 WIRELESS EARPHONES</h4>
                        <p className='mBody'>
                            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.                    </p>
                        <div className="contentButton">
                            <p className='mButton1 tac'>SEE PRODUCT</p>
                        </div>
                    </div>
                </div>
                <FirstComp />
            </div>
        </div>
        </>
    )
}