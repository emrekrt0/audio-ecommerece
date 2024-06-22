import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import bigSpeaker from '../assets/bigProductSelection/bigSpeaker.png';
import zx7speaker from '../assets/carts/zx7speaker-desktop.svg';
import yx1earphones from '../assets/carts/yx1earphones-tablet.svg';
import FirstComp from './smallComp/FirstComp';
import zx9mobile from '../static/main-zx9mobil.svg';
import zx9tablet from '../static/main-zx9tablet.svg';
import zx9pc from '../static/main-zx9pc.svg';
import scrollToTop from './smallComp/scrollToTop';
import supabase from './smallComp/Supabase';
import { langContext } from '../App';

export function MainPageHeader() {
    const { lang } = useContext(langContext);
    return (
        <div className="headerHeadline">
                <h3>{lang==='en' ? 'NEW PRODUCT' : 'YENİ ÜRÜN'}</h3>
                <h1>XX99 MARK II
                {lang==='en' ? ' HEADPHONES' : ' KULAKLIK'}</h1>
                <p>{lang==='en' ? 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.' : 'Tutkulu müzik tutkunları için doğal, gerçeğe yakın ses ve olağanüstü yapım kalitesini deneyimleyin.'}</p>
                <div className="headerButton">
                    <Link to={`/details/xx99-mark-II-headphones-detail`} onClick={scrollToTop}><p className="mButton1">{lang==='en' ? 'SEE PRODUCT' : 'ÜRÜNÜ GÖR'}</p></Link>
                </div>
        </div>
        )
}

export default function Container() {
    const [products, setProducts] = useState([]);
    const { lang } = useContext(langContext);

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
        alert('Error:', error);
      }
    }
    
    getProducts();
  }, []);

    
    
    function MainPageContent() {
        
        return(
            <>
            <div className="containerWrapper">
                <FirstComp />
                <div className="productsContainer">
                    <div className="bigProduct">
                        <div className="bigSpeaker">
                            <picture>
                                <source media="(min-width: 1440px)" srcSet={zx9pc} />
                                <source media="(min-width: 768px)" srcSet={zx9tablet} />
                                <img src={zx9mobile} alt="" />
                            </picture>
                            <div className="bigSpeaker-content">
                                <div className="bigSpeakerImg">
                                    <img src={bigSpeaker} alt="" />
                                </div>
                                <div className="bigSpeakerText">
                                    <h5 className='bigSpeakerHeader'>ZX9 <br />{lang==='en'?'SPEAKER':'HOPARLÖR'}</h5>
                                    <p className='bigSpeakerSubHeader'>{lang==='en'?'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.' : 'Gerçekten dikkate değer bir ses sunmak için olağanüstü bir şekilde üretilmiş premium hoparlörlere yükseltin.'}</p>
                                    <Link to={'/details/zx-9-speaker-detail'} onClick={scrollToTop}>
                                        <div className="bigSpeakerButton tac">
                                                <p className='mButton1 bg-black' >{lang==='en' ? 'SEE PRODUCT' : 'ÜRÜNÜ GÖR'}</p>
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
                            <h4 className='mH4'>ZX7 {lang==='en'?'SPEAKER':'HOPARLÖR'}</h4>
                        </div>
                        <Link to={'/details/zx-7-speaker-detail'} onClick={scrollToTop}>
                        <div className="smallCardsButton">
                            <p>{lang==='en' ? 'SEE PRODUCT' : 'ÜRÜNÜ GÖR'}</p>
                        </div>
                        </Link>
                    </div>
                    <div className="smallCardsM">
                        <div className="smallCardsImgM">
                            <img src={yx1earphones} alt="" />
                        </div>
                        <div className="smallCardsTextsM">
                            <h4 className='mH4'>YX1 {lang==='en'?'EARPHONES':'KABLOSUZ KULAKLIK'}</h4>
                            <Link to={'/details/yx1-earphones-detail'} onClick={scrollToTop}>
                            <div className="smallCardsButtonM">
                                <p>{lang==='en' ? 'SEE PRODUCT' : 'ÜRÜNÜ GÖR'}</p>
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
