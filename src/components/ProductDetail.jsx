import React from "react";
import { useParams } from "react-router-dom";
import hp1 from '../assets/categoryImgs/headphones/hp1.png'
import hp2 from '../assets/categoryImgs/headphones/hp2.png'
import hp3 from '../assets/categoryImgs/headphones/hp3.png'
import sp1 from '../assets/categoryImgs/speakers/ss1.png'
import sp2 from '../assets/categoryImgs/speakers/ss2.png'
import hpd11 from '../assets/detailImgs/headphones/hpd11.jpg'
import hpd12 from '../assets/detailImgs/headphones/hpd12.jpg'
import hpd13 from '../assets/detailImgs/headphones/hpd13.jpg'
import hpd21 from '../assets/detailImgs/headphones/hpd21.jpg'
import hpd22 from '../assets/detailImgs/headphones/hpd22.jpg'
import hpd23 from '../assets/detailImgs/headphones/hpd23.jpg'
import hpd31 from '../assets/detailImgs/headphones/hpd31.jpg'
import hpd32 from '../assets/detailImgs/headphones/hpd32.jpg'
import hpd33 from '../assets/detailImgs/headphones/hpd33.jpg'
import spd11 from '../assets/detailImgs/speakers/spd11.jpg'
import spd12 from '../assets/detailImgs/speakers/spd12.jpg'
import spd13 from '../assets/detailImgs/speakers/spd13.jpg'
import spd21 from '../assets/detailImgs/speakers/spd21.jpg'
import spd22 from '../assets/detailImgs/speakers/spd22.jpg'
import spd23 from '../assets/detailImgs/speakers/spd23.jpg'
import ep1 from '../assets/categoryImgs/earphones/ep1.png'
import epd11 from '../assets/detailImgs/earphones/epd11.jpg'
import epd12 from '../assets/detailImgs/earphones/epd12.jpg'
import epd13 from '../assets/detailImgs/earphones/epd13.jpg'

import FirstComp from "./smallComp/FirstComp";
import {useNavigate} from 'react-router-dom';

export default function ProductDetail() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const products = [
    { 
        slug: "xx99-mark-II-headphones-detail",
        new: true,
        image: hp1,
        title: "XX99 Mark II Headphones",
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        price: "$ 2,999",
        features_text : "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        features_text2 : "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        in_the_box : [
            ["1x", "Headphone Unit"],
            ["2x", "Replacement Earcups"], 
            ["1x", "User Manual"], 
            ["1x", "3.5mm 5m Audio Cable"], 
            ["1x", "Travel Bag"],
        ],
        detail_images : [hpd11, hpd12, hpd13],
    },
    { 
        slug: "xx99-mark-I-headphones-detail",
        new: false,
        image: hp2,
        title: "XX99 Mark I Headphones",
        description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        price: "$ 1,750",
        features_text : "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
        features_text2 : "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
        in_the_box : [
            ["1x", "Headphone Unit"],
            ["2x", "Replacement Earcups"], 
            ["1x", "User Manual"], 
            ["1x", "3.5mm 5m Audio Cable"], 
        ],
        detail_images : [hpd21, hpd22, hpd23],
    },
    { 
        slug: "xx59-headphones-detail",
        new: false,
        image: hp3,
        title: "XX59 Headphones",
        description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        price: "$ 899",
        features_text : "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
        features_text2 : "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        in_the_box : [
            ["1x", "Headphone Unit"],
            ["2x", "Replacement Earcups"], 
            ["1x", "User Manual"], 
            ["1x", "3.5mm 5m Audio Cable"], 
        ],
        detail_images : [hpd31, hpd32, hpd33],
    },
    { 
        slug: "zx-9-speaker-detail",
        new: true,
        image: sp1,
        title: "ZX9 SPEAKER",
        description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        price: "$ 4,500",
        features_text : "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
        features_text2 : "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        in_the_box : [
            ["2x", "Speaker Unit"],
            ["2x", "Speaker Cloth Panel"], 
            ["1x", "User Manual"], 
            ["1x", "3.5mm 10m Audio Cable"],
            ["1x", "10m Optical Cable"], 
        ],
        detail_images : [spd11, spd12, spd13],
    },
    { 
        slug: "zx-7-speaker-detail",
        new: false,
        image: sp2,
        title: "ZX7 SPEAKER",
        description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        price: "$ 3,500",
        features_text : "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
        features_text2 : "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        in_the_box : [
            ["2x", "Speaker Unit"],
            ["2x", "Speaker Cloth Panel"], 
            ["1x", "User Manual"], 
            ["1x", "3.5mm 7.5m Audio Cable"],
            ["1x", "7.5m Optical Cable"], 
        ],
        detail_images : [spd21, spd22, spd23],
    },
    { 
        slug: "yx1-earphones-detail",
        new: true,
        image: ep1,
        title: "YX1 WIRELESS EARPHONES",
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        price: "$ 599",
        features_text : "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
        features_text2 : "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        in_the_box : [
            ["2x", "Earphone Unit"],
            ["6x", "Multi-size Earplugs"], 
            ["1x", "User Manual"], 
            ["1x", "USB-C Charging Cable"],
            ["1x", "Travel Pouch"], 
        ],
        detail_images : [epd11, epd12, epd13],
    }
    ]
    ;
    function handleGoBack() {
        navigate(-1);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const product = products.find(p => p.slug === slug);
    console.log(product);
    return (
        <>
            <div className="productDetailContainer">
                <div className="goBckBtn" onClick={handleGoBack}>
                    <p className="mBody tal">Go Back</p>
                </div>
                <div className="productDetail">
                    <div className="productDetailTop">
                        <div className="productDetailTopImg">
                            <div className="bckgrnd">
                                <svg width="327" height="327" viewBox="0 0 327 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="327" height="327" rx="8" fill="#F1F1F1"/>
                                </svg>
                            </div>
                            <img src={product.image} alt="" />
                        </div>
                    
                        <div className="productDetailTexts">
                            {product.new && <div className="newProduct mOverline txtOrange"><p>NEW PRODUCT</p></div>}
                            <div className="productHeadline">
                                <h4 className="mH4 ls-1">{product.title}</h4>
                            </div>
                            <div className="productText">
                                <p className="mBody tal">{product.description}</p>
                            </div>
                            <div className="productPrice">
                                <h6 className="mH6">{product.price}</h6>
                            </div>
                        </div>
                    
                        <div className="productAddToCart">
                            <div className="productQty w120h48 spcevenly">
                                <div className="qtyRmv pQtyNumb op25">
                                    -
                                </div>
                                <h3 className='pQtyNumb'>1</h3>
                                <div className="qtyAdd pQtyNumb op25">
                                    +
                                </div>
                            </div>
                            <div className="productButton">
                                <p className="mButton1 w160h48 tac">ADD TO CART</p>
                            </div>
                        </div>
                    </div>
                        <div className="productFeatures">
                            <h5 className="featuresH5">FEATURES</h5>
                            <p className="mBody tal">{product.features_text}</p>
                            <p className="mBody tal">{product.features_text2}</p>
                        </div>
                        <div className="productInTheBox">
                            <h5 className="featuresH5">IN THE BOX</h5>
                            <div className="inTheBox">
                                {product.in_the_box.map((item, index) => (
                                    <div key={index} className="inTheBoxItem">
                                        <h5 className="mSubTitle fs15 txtOrange">{item[0]}</h5>
                                        <p className="mBody tal">{item[1]}</p>
                                    </div>
                                
                                ))}
                            </div>
                        </div>
                        <div className="productDetailImg">
                            {product.detail_images.map((img,index) => (
                                <img key={index} src={img} alt="" />
                            
                            ))}
                        </div>
                        <div className="youMayAlsoLike"></div>
                    </div>
                </div>
        </>
    );
}

