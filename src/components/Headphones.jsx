import hp1 from '../assets/categoryImgs/headphones/hp1.png';
import hp2 from '../assets/categoryImgs/headphones/hp2.png';
import hp3 from '../assets/categoryImgs/headphones/hp3.png';
import FirstComp from './smallComp/FirstComp';



export default function Headphones() {
    
    
    
    return(
        <>
        <div className="categoryHeader">
            <h4 className="mH4 txtWhite">HEADPHONES</h4>
        </div>
        <div className='categoryContainer'>
            <div className="categoryContent">
                <div className="contentHeader">
                    <div className="headerImgBg">
                        <svg width="327" height="352" viewBox="0 0 327 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="327" height="352" rx="8" fill="#F1F1F1"/>
                        </svg>
                    </div>
                    <img src={hp1} />
                </div>
                <div className="contentText">
                    <p className='mOverline txtOrange'>NEW PRODUCT</p>
                    <h4 className='mH4 ls-1'>XX99 Mark II HEADPHONES</h4>
                    <p className='mBody'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <div className="contentButton">
                        <p className='mButton1 tac'>SEE PRODUCT</p>
                </div>
                </div>
            </div>
            <div className="categoryContent">
                <div className="contentHeader">
                    <div className="headerImgBg">
                        <svg width="327" height="352" viewBox="0 0 327 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="327" height="352" rx="8" fill="#F1F1F1"/>
                        </svg>
                    </div>
                    <img src={hp2} />
                </div>
                <div className="contentText">
                    <h4 className='mH4 ls-1'>XX99 Mark I HEADPHONES</h4>
                    <p className='mBody'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    <div className="contentButton">
                        <p className='mButton1 tac'>SEE PRODUCT</p>
                </div>
                </div>
            </div>
            <div className="categoryContent">
                <div className="contentHeader">
                    <div className="headerImgBg">
                        <svg width="327" height="352" viewBox="0 0 327 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="327" height="352" rx="8" fill="#F1F1F1"/>
                        </svg>
                    </div>
                    <img src={hp3} />
                </div>
                <div className="contentText">
                    <h4 className='mH4 ls-1'>XX59 HEADPHONES</h4>
                    <p className='mBody'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <div className="contentButton">
                        <p className='mButton1 tac'>SEE PRODUCT</p>
                </div>
                </div>
            </div>
            <FirstComp />
        </div>
        </>
    )
}