import React, {useContext, useState, useEffect} from "react";
import { langContext } from "../../App";
import translatelogo from '../../static/translatelogo.svg'

export default function SelectLang() {
    const [languageBox, setLanguageBox] = useState(true)
    const {lang, setLang} = useContext(langContext)

    useEffect(() => {
        if (localStorage.getItem('languageSelected')) {
            setLanguageBox(false);
        }
    }, []);
    
    function handleLangClick() {
        localStorage.setItem('languageSelected', true )
        setLanguageBox(!languageBox)
    }

    return(
        <>
        {languageBox ? 
        <div className='selectLang'>
            <div className="selectLangItems">
                <div className="langClsBtn">
                    <h4 className='langCloseBtnH4'onClick={handleLangClick}>X</h4>
                </div>
                <h4 className="langHeader4">
                {lang === 'en' ? 'Diliniz İngilizce olarak ayarlanmıştır. Değiştirmek isterseniz lütfen tercih ettiğiniz dilinizi seçiniz.' : 'Your language is set to Turkish. If you want to change it, please select your preferred language.'}
                </h4>
                <div className='langButtons'>
                    <button onClick={() => {setLang('en'); handleLangClick()}} className='mButton1 bg-white'>EN</button>
                    <button onClick={() => {setLang('tr'); 
                    handleLangClick()
                    }} className='mButton1 bg-white'>TR</button>
                </div>
            </div>
        </div>
        :  
        <div className='selectLangFixed'>
            <div className="selectLangFixedItem">
                <button onClick={handleLangClick}>
                    <img src={translatelogo} alt="" />
                    <div className="selectLangFixedTest">{lang === 'en' ? 'Dili Değiştir' : 'Change Language'}</div>
                </button>
            </div>
        </div>
        }
        </>
    )
}