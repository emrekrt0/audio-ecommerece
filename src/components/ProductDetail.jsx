import React from "react";
import { useParams } from "react-router-dom";
import sp1 from '../assets/categoryImgs/speakers/ss1.png'
import sp2 from '../assets/categoryImgs/speakers/ss2.png'
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
import YouMayAlsoLike from "./smallComp/YouMayAlsoLike";
import {useNavigate} from 'react-router-dom';

export default function ProductDetail() {
    const navigate = useNavigate();
    const { slug } = useParams();

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
                                <svg width="281" height="480"  fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="281" height="480" rx="8" fill="#F1F1F1"/>
                                </svg>
                            </div>
                            <img src={product.image} alt="" />
                        </div>
                        <div className="productDetail-Texts-Cart">
                            <div className="productDetailTexts">
                                {product.new && <div className="newProduct mOverline txtOrange"><p>NEW PRODUCT</p></div>}
                                <div className="productHeadline">
                                    <h4 className="mH4 ls-1">{product.title} {product.category}</h4>
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
                    </div>
                </div>
                <div className="youMayAlsoLike">
                        <YouMayAlsoLike products={products} currentProductSlug={slug} />
                </div>
                <div className="containerWrapper">
                    <FirstComp />
                </div>
        </>
    );
}

