import React, {useState,useEffect,useContext}from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import supabase from './smallComp/Supabase';
import FirstComp from './smallComp/FirstComp';
import { langContext } from '../App';

export default function Categories() {
    const params = useParams();
    const [category, setCategory] = useState();
    const {lang} = useContext(langContext)

    useEffect(() => {
        getCategories();
    }, [params.category_link, lang])
    
    async function getCategories() {
        try {
        const {data, error} = await supabase
        .from('products')
        .select('*')
        .order('id', {ascending: true})
        .ilike(`category_link`,`%${params.category_link}%`)
        if (error) {
            alert(error)
        }
        else {
            setCategory(data)
        }
        } catch(error) {
            alert(error)
        }

    }

    let categoryNames = '';
    if(category) {
        categoryNames = category[0].category[lang];
    }

    return(
        <>
                <div className="categoryItems">
                <div className="categoryHeader">
                    <h4 className="mH4 txtWhite">{categoryNames}</h4>
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
                            {product.new && <p className='mOverline txtOrange'>{lang === 'en' ? 'NEW PRODUCT' : 'YENI URUN'}</p>}
                            <h4 className='mH4 ls-1'>{product.title} {product.category[lang]}</h4>
                            <p className='mBody'>
                                {product.description[lang]}
                            </p>
                            <div className="contentButton">
                                <Link to={`/details/${product.slug}`}><p className='mButton1 tac'>{lang === 'en' ? 'SEE PRODUCT' : 'ÜRUNÜ GÖR'}</p></Link>
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