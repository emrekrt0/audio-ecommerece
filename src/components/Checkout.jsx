import { useNavigate } from "react-router-dom"
import Summary from "./smallComp/Summary"
import { useContext } from "react"
import { langContext } from "../App"

export default function Checkout() {
    const { lang } = useContext(langContext)
    const navigate = useNavigate()
    function handleGoBack() {
        navigate(-1)
    }
    return( 
        <>
        <div className="checkOutWrapper">
            <div className="checkOutItems">
                <div className="checkOutTop">
                    <div className="checkOutHeader">
                        <p className='mBody tal' onClick={handleGoBack}>{lang==='en'?'Go Back':'Geri Dön'}</p>
                    </div>
                </div>
                <div className="checkOutContainer">
                    <div className="cOutContentTop">
                        <h4 className="mH4 ls-1">{lang==='en'?'CHECKOUT':'ÖDEME'}</h4>
                    </div>
                    
                    <div className="cOutForm">
                        <div className="cOutBilling">
                            <h5 className="mSubTitle txtOrange">{lang==='en'?'BILLING DETAILS':'FATURA DETAYLARI'}</h5>
                            
                                <div className="cOutFormItems">
                                    <input type="text" id="name" placeholder="Alexei Ward" pattern="^[A-Za-z]+(?:\s[A-Za-z]+)+$" required />
                                    <label htmlFor="name">{lang==='en'?'Name' : 'İsim'}</label>
                                </div>
                                <div className="cOutFormItems">
                                    <input type="email" id="email" placeholder="alexei@mail.com" required />
                                    <label htmlFor="email">{lang==='en'?'Email Address' : 'Email Adresi'}</label>
                                </div>
                                <div className="cOutFormItems">
                                    <input type="text" id="phone" placeholder="+1 202-555-0136" required />
                                    <label htmlFor="phone">{lang==='en'?'Phone Number' : 'Telefon Numarası'}</label>
                                </div>
                        </div>
                        
                        <div className="cOutShipping">
                            <h5 className="mSubTitle txtOrange">{lang==='en'?'SHIPPING INFO' : 'KARGO DETAYLARI'}</h5>
                            <div className="cOutFormItems">
                                <input type="text" id="address" placeholder="1137 Williams Avenue" required/>
                                <label htmlFor="address">{lang==='en'?'Your Address' : 'Adresiniz'}</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="number" id="zip" placeholder="10001" required/>
                                <label htmlFor="zip">{lang==='en'?'ZIP Code':'ZIP Kodu'}</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="city" placeholder="New York" required/>
                                <label htmlFor="city">{lang==='en'?'City' : 'Şehir'}</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="country" placeholder="United States" required/>
                                <label htmlFor="country">{lang==='en'?'Country':'Ülke'}</label>
                            </div>
                        </div>
                        <div className="cOutPayment">
                            <h5 className="mSubTitle txtOrange">{lang==='en'?'PAYMENT DETAILS':'ÖDEME DETAYLARI'}</h5>
                            <label>Payment Method</label>
                            <div className="cOutFormItems cPayment">
                                <input type="radio" id="eMoney" name="payment" value="eMoney" defaultChecked />
                                <label htmlFor="eMoney">{lang==='en'?'e-Money':'Kredi Kartı'}</label>
                            </div>
                            <div className="cOutFormItems cPayment">
                                <input type="radio" id="cash" name="payment" value="cash" />
                                <label htmlFor="cash">{lang==='en'?'Cash on Delivery':'Kapıda Ödeme'}</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="emoneyNumb" placeholder="238521993"/>
                                <label htmlFor="emoneyNumb">{lang==='en'?'e-Money Number':'Kart Numarası'}</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="emoneyPin" placeholder="6891"/>
                                <label htmlFor="emoneyPin">{lang==='en'?'e-Money PIN' : 'Kart Şifresi'}</label>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="cOutSummary">
                    <div className="cOutPay">
                     <Summary />
                    </div>
                </div>
                    
            </div>
        </div>
    </>
    )
}