import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from './Supabase';
import scrollToTop  from './scrollToTop';

const YouMayAlsoLike = ({ category, currentProductSlug }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('id', { ascending: true })
                .neq('slug', currentProductSlug)
                .eq('category',JSON.stringify({en: category}))
                .limit(3)
            
            if (error) {
                console.log(error);
                return;
            }

            if (data.length < 3) {
                const { data: data2, error: error2 } = await supabase
                    .from('products')
                    .select('*')
                    .order('id', { ascending: true })
                    .neq('slug', currentProductSlug)
                    .neq('category->>en', category)
                    .limit(3 - data.length);
                if (error2) {
                    console.log(error2);
                } else {
                    setProducts([...data, ...data2]);
                }
            }

            else {
                setProducts(data);
            }
        };

        fetchProducts();
    }, [category, currentProductSlug]);
    console.log(products);
return (
        <>
            <h5 className='featuresH5'>YOU MAY ALSO LIKE</h5 >
            <div className='ymayLikeContainer'>
            {products.length > 0 ? (
                products.map((product) => (
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
                    product.title !== 'XX59' && product.category.en}</h5>
                    <div className="contentButton">
                        <Link to={`/details/${product.slug}`} onClick={scrollToTop}><p className="mButton1 tac">SEE PRODUCT</p></Link>
                    </div>
                </div>
            ))): 'Loading...'}
        </div>
        </>
    );
};

export default YouMayAlsoLike;
