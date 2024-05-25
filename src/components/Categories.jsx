import React, {useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import supabase from './smallComp/Supabase';
import FirstComp from './smallComp/FirstComp';

export default function Categories() {
    const params = useParams();
    const [category, setCategory] = useState();

    useEffect(() => {
        getCategories();
    }, [params.category])
    
    console.log(params);
    async function getCategories() {
        try {
        const {data, error} = await supabase
        .from('products')
        .select('*')
        .order('id', {ascending: true})
        .eq('category->>en',params.category)
        if (error) {
            console.log(error)
        }
        else {
            console.log(data)
            setCategory(data)
        }
        } catch(error) {
            console.log(error)
        }

    }

    return(
        <>
                <div className="categoryItems">
                <div className="categoryHeader">
                    <h4 className="mH4 txtWhite">{params.category}</h4>
                </div>
                <div className='categoryContainer'>
                {category && category.map((product) => (
                    <div className="categoryContent" key={product.id}>
                        <div className="contentHeader">
                            <div className="headerImgBg">
                                <svg width="689" height="352" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="689" height="352" rx="8" fill="#F1F1F1"/>
                                </svg>
                            </div>
                            <img src={product.image} />
                        </div>
                        <div className="contentText">
                            {product.new && <p className='mOverline txtOrange'>NEW PRODUCT</p>}
                            <h4 className='mH4 ls-1'>{product.title} {product.category.en}</h4>
                            <p className='mBody'>
                                {product.description.en}
                            </p>
                            <div className="contentButton">
                                <Link to={`/details/${product.slug}`}><p className='mButton1 tac'>SEE PRODUCT</p></Link>
                            </div>
                        </div>
                    </div>
            ))}
            <FirstComp />
                </div>
            </div>
        </>
    )
}