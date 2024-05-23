import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirstComp from "./smallComp/FirstComp";
import YouMayAlsoLike from "./smallComp/YouMayAlsoLike";
import {useNavigate} from 'react-router-dom';
import supabase from "./smallComp/Supabase";

export default function ProductDetail() {
    const [product,setProduct] = useState();
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

    useEffect(() => {
        getProductDetails();
    }, [slug]);

    async function getProductDetails(){
        try{
        const {data, error} = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        if (error) {
            console.log(error);
        }
        else{
            console.log(data);
            setProduct(data);
        }
        }catch(error) {
            console.log(error);
        }
    }

    console.log(product);
    return (
        <>
            {product ? product.map((product, index) => (
                <React.Fragment key={index}>
                    <div  className="productDetailContainer">
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
                                        <h4 className="mH4 ls-1">{product.title} {product.category.en}</h4>
                                    </div>
                                    <div className="productText">
                                        <p className="mBody tal">{product.description.en}</p>
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
                                {product.features_text.en.map((feature, index) => (
                                    <React.Fragment key={index}>
                                    <p className="mBody tal">{feature[0]}</p>
                                    <p className="mBody tal">{feature[1]}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="productInTheBox">
                                <h5 className="featuresH5">IN THE BOX</h5>
                                <div className="inTheBox">
                                    {product.in_the_box.en.map((item, index) => (
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
                        <YouMayAlsoLike category={product.category.en} currentProductSlug={slug} />
                    </div>
                    <div className="containerWrapper">
                        <FirstComp />
                    </div>
                </React.Fragment>
                
            )) : 'Loading...'}
        </>
    );
}

