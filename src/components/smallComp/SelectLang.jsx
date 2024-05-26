import React, {useContext, useState} from "react";
import { langContext } from "../../App";
import translatelogo from '../../static/translatelogo.svg'

export default function SelectLang() {
    const [languageBox, setLanguageBox] = useState(true)
    const {lang, setLang} = useContext(langContext)
    
    function handleLangClick() {
        setLanguageBox(!languageBox)
    }

    return(
        <>
        {languageBox ? 
        <div className='selectLang'>
            <div className="selectLangItems">
                <div className='selectLangHeader'>
                    <h4>
                    {lang === 'en' ? 'Diliniz İngilizce olarak ayarlanmıştır. Değiştirmek isterseniz lütfen dilinizi seçiniz.' : 'Your language is set to Turkish. If you want to change it, please select your language.'}
                    </h4>
                    <div className="langClose">
                        <h4 className='langCloseBtn'onClick={handleLangClick}>X</h4>
                    </div>
                </div>
                <h5 className='selectLangText'>
                    {lang === 'en' ? 'Dilinizi seçiniz' : 'Select your language'}
                </h5>
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