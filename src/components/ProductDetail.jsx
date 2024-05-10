import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { slug } = useParams();

    const products = [
    { 
        slug: "headphone-detail",
        title: "Kulaklık",
        description: "Kulaklık açıklaması",
        price: "100 TL",
        image: "https://source.unsplash.com/400x400/?headphone",
    },
    {
        slug: "speaker-detail",
        title: "Hoparlör",
        description: "Hoparlör açıklaması",
        price: "200 TL",
        image: "https://source.unsplash.com/400x400/?speaker",
    },
    {
        slug: "earphone-detail",
        title: "Kulaklık",
        description: "Kulaklık açıklaması",
        price: "300 TL",
        image: "https://source.unsplash.com/400x400/?earphone",
    }]
    ;

    const product = products.find(p => p.slug === slug);

    return (
        <>
            <div className="productDetailContainer">
                <div className="goBckBtn">
                    <p>GO Back</p>
                </div>
                <div className="productDetail">
                    <div className="productDetailTop">
                        <div className="productImg">
                            <div className="bckgrnd">
                                <svg width="327" height="327" viewBox="0 0 327 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="327" height="327" rx="8" fill="#F1F1F1"/>
                                </svg>
                            </div>
                            <img src={product.image} alt="" />
                        </div>
                        {product.new && <div className="newProduct"><h3>New Product</h3></div>}
                        <div className="productHeadline"></div>
                        <div className="productText"></div>
                        <div className="productPrice"></div>
                        <div className="productAddToCart">

                        </div>
                        <div className="productFeatures"></div>
                        <div className="productInTheBox"></div>
                        <div className="productDetailImg"></div>
                        <div className="youMayAlsoLike"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

