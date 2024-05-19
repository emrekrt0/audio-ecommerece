import React from 'react';
import { Link } from 'react-router-dom';
import scrollToTop from './scrollToTop';

const YouMayAlsoLike = ({ products, currentProductSlug }) => {
    const currentProduct = products.find(product => product.slug === currentProductSlug);
    const currentCategory = currentProduct.category;
    const sameCategoryProducts = products.filter(product => product.slug !== currentProductSlug && product.category === currentCategory);
    const otherProducts = products.filter(product => product.slug !== currentProductSlug && product.category !== currentCategory);
    const firstThreeProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 3);

    return (
    <>
        <h5 className='featuresH5'>YOU MAY ALSO LIKE</h5 >
        <div className='ymayLikeContainer'>
            {firstThreeProducts.map(product => (
                <div className='ymayLikeContent' key={product.slug}>
                    <div className="ymayLikeImg">
                        <div className="grayBG">
                            <svg width="327" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="327" height="120" rx="8" fill="#F1F1F1"/>
                            </svg>
                        </div>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <h5 className='mH5 tac'>{product.title} {product.title.length <=8 && 
                    product.title !== 'XX59' && product.category}</h5>
                    <div class="contentButton">
                        <Link to={`/details/${product.slug}`} onClick={scrollToTop}><p class="mButton1 tac">SEE PRODUCT</p></Link>
                    </div>
                </div>
            ))}
        </div>
    </>
    );
};

export default YouMayAlsoLike;