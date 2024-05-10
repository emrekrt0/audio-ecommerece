import React from "react";
import { useParams } from "react-router-dom";
import hp1 from '../assets/categoryImgs/headphones/hp1.png'
import hp2 from '../assets/categoryImgs/headphones/hp2.png'
import hp3 from '../assets/categoryImgs/headphones/hp3.png'
import hpd11 from '../assets/detailImgs/headphones/hpd11.jpg'
import hpd12 from '../assets/detailImgs/headphones/hpd12.jpg'
import hpd13 from '../assets/detailImgs/headphones/hpd13.jpg'
import hpd21 from '../assets/detailImgs/headphones/hpd21.jpg'
import hpd22 from '../assets/detailImgs/headphones/hpd22.jpg'
import hpd23 from '../assets/detailImgs/headphones/hpd23.jpg'
import hpd31 from '../assets/detailImgs/headphones/hpd31.jpg'
import hpd32 from '../assets/detailImgs/headphones/hpd32.jpg'
import hpd33 from '../assets/detailImgs/headphones/hpd33.jpg'
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
    }]
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

