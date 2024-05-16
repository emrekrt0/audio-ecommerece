import React from 'react';

const YouMayAlsoLike = ({ products, currentProductSlug }) => {
    const currentProduct = products.find(product => product.slug === currentProductSlug);
    const currentCategory = currentProduct.category;
    const sameCategoryProducts = products.filter(product => product.slug !== currentProductSlug && product.category === currentCategory);
    const otherProducts = products.filter(product => product.slug !== currentProductSlug && product.category !== currentCategory);
    const firstThreeProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 3);

    return (
        <div>
            <h2>You May Also Like</h2>
            {firstThreeProducts.map(product => (
                <div key={product.slug}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default YouMayAlsoLike;