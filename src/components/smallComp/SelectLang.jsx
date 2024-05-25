import React, {useContext} from "react";
import { langContext } from "../../App";

export default function SelectLang() {
    const {setLang} = useContext(langContext)
    return(
        <div className='selectLang'>
            <h5 className='selectLangText'>Select your language:</h5>
            <div className='langButtons'>
                <button onClick={() => setLang('en')} className='langButton'>EN</button>
                <button onClick={() => setLang('tr')} className='langButton'>TR</button>
            </div>
        </div>
    )
}