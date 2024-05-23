import headphoneImage from '../assets/productselection/headphoneImage.svg';
import speakerImage from '../assets/productselection/speakerImage.svg';
import earphoneImage from '../assets/productselection/earphoneImage.svg';
import oval from '../assets/productselection/oval.svg';
import bigSpeaker from '../assets/bigProductSelection/bigSpeaker.png';
import Group6 from '../assets/productselection/Group6.svg';
import zx7speaker from '../assets/carts/zx7speaker-desktop.svg';
import yx1earphones from '../assets/carts/yx1earphones-tablet.svg';
import FirstComp from './smallComp/FirstComp';
import zx9tablet from '../static/main-zx9tablet.svg';
import { Link } from 'react-router-dom';
import scrollToTop from './smallComp/scrollToTop';
import supabase from './smallComp/Supabase';
import { useState, useEffect } from 'react';

export function MainPageHeader() {
    return (
        <div className="headerHeadline">
                <h3>NEW PRODUCT</h3>
                <h1>XX99 MARK II
                HEADPHONES</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <div className="headerButton">
                    <Link to={`/details/xx99-mark-II-headphones-detail`} onClick={scrollToTop}><p className="mButton1">SEE PRODUCT</p></Link>
                </div>
        </div>
        )
}

export default function Container() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const {data, error } = await supabase
        .from('products')
        .select('*');
        if (!error) {
          setProducts(data);
        } else {
          console.error('Error fetching products:', error);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
    
    getProducts();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  console.log(products);
    
    
    function MainPageContent() {
        
        return(
            <>
            <div className="containerWrapper">
                <FirstComp />
                <div className="productsContainer">
                    <div className="bigProduct">
                        <div className="bigSpeaker">
                            <img alt="" />
                            <div className="bigSpeaker-content">
                                <div className="bigSpeakerImg">
                                    <img src={bigSpeaker} alt="" />
                                </div>
                                <div className="bigSpeakerText">
                                    <h5 className='bigSpeakerHeader'>ZX9 <br />SPEAKER</h5>
                                    <p className='bigSpeakerSubHeader'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                                    <Link to={'/details/zx-9-speaker-detail'} onClick={scrollToTop}>
                                        <div className="bigSpeakerButton tac">
                                                <p className='mButton1 bg-black' >SEE PRODUCT</p>
                                        </div>
                                    </Link>
                                </div>
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
                        <Link to={'/details/zx-7-speaker-detail'} onClick={scrollToTop}>
                        <div className="smallCardsButton">
                            <p>SEE PRODUCT</p>
                        </div>
                        </Link>
                    </div>
                    <div className="smallCardsM">
                        <div className="smallCardsImgM">
                            <img src={yx1earphones} alt="" />
                        </div>
                        <div className="smallCardsTextsM">
                            <h4 className='mH4'>YX1 EARPHONES</h4>
                            <Link to={'/details/yx1-earphones-detail'} onClick={scrollToTop}>
                            <div className="smallCardsButtonM">
                                <p>SEE PRODUCT</p>
                            </div>
                            </Link>
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
