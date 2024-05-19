import ss1 from '../assets/categoryImgs/speakers/ss1.png';
import ss2 from '../assets/categoryImgs/speakers/ss2.png';
import { Link } from 'react-router-dom';
import FirstComp from './smallComp/FirstComp';



export default function Speakers() {

    return(
        <>
        <div className="categoryItems">
            <div className="categoryHeader">
                <h4 className="mH4 txtWhite">SPEAKERS</h4>
            </div>
            <div className='categoryContainer'>
                <div className="categoryContent">
                    <div className="contentHeader">
                        <div className="headerImgBg">
                            <svg width="689" height="352"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="689" height="352" rx="8" fill="#F1F1F1"/>
                            </svg>
                        </div>
                        <img src={ss1} />
                    </div>
                    <div className="contentText">
                        <p className='mOverline txtOrange'>NEW PRODUCT</p>
                        <h4 className='mH4 ls-1'>ZX9 SPEAKER</h4>
                        <p className='mBody'>
                            Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                        </p>
                        <div className="contentButton">
                            <Link to={`/details/zx-9-speaker-detail`}><p className='mButton1 tac'>SEE PRODUCT</p></Link>
                    </div>
                    </div>
                </div>
                <div className="categoryContent">
                    <div className="contentHeader">
                        <div className="headerImgBg">
                            <svg width="689" height="352" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="689" height="352" rx="8" fill="#F1F1F1"/>
                            </svg>
                        </div>
                        <img src={ss2} />
                    </div>
                    <div className="contentText">
                        <h4 className='mH4 ls-1'>
                            ZX7 SPEAKER
                        </h4>
                        <p className='mBody'>
                            Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.                    </p>
                        <div className="contentButton">
                            <Link to={`/details/zx-7-speaker-detail`}><p className='mButton1 tac'>SEE PRODUCT</p></Link>
                    </div>
                    </div>
                </div>
                <FirstComp />
            </div>
        </div>
        </>
    )
}