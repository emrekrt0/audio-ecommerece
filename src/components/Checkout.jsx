import { useNavigate } from "react-router-dom"
import Summary from "./smallComp/Summary"

export default function Checkout() {
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
                        <p className='mBody tal' onClick={handleGoBack}>Go Back</p>
                    </div>
                </div>
                <div className="checkOutContainer">
                    <div className="cOutContentTop">
                        <h4 className="mH4 ls-1">CHECKOUT</h4>
                    </div>
                    
                    <div className="cOutForm">
                        <div className="cOutBilling">
                            <h5 className="mSubTitle txtOrange">BILLING DETAILS</h5>
                            
                                <div className="cOutFormItems">
                                    <input type="text" id="name" placeholder="Alexei Ward" pattern="^[A-Za-z]+(?:\s[A-Za-z]+)+$" required />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="cOutFormItems">
                                    <input type="email" id="email" placeholder="alexei@mail.com" required />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                <div className="cOutFormItems">
                                    <input type="text" id="phone" placeholder="+1 202-555-0136" required />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>
                        </div>
                        
                        <div className="cOutShipping">
                            <h5 className="mSubTitle txtOrange">SHIPPING INFO</h5>
                            <div className="cOutFormItems">
                                <input type="text" id="address" placeholder="1137 Williams Avenue" required/>
                                <label htmlFor="address">Your Address</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="number" id="zip" placeholder="10001" required/>
                                <label htmlFor="zip">ZIP Code</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="city" placeholder="New York" required/>
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="country" placeholder="United States" required/>
                                <label htmlFor="country">Country</label>
                            </div>
                        </div>
                        <div className="cOutPayment">
                            <h5 className="mSubTitle txtOrange">PAYMENT DETAILS</h5>
                            <label>Payment Method</label>
                            <div className="cOutFormItems cPayment">
                                <input type="radio" id="eMoney" name="payment" value="eMoney" defaultChecked />
                                <label htmlFor="eMoney">e-Money</label>
                            </div>
                            <div className="cOutFormItems cPayment">
                                <input type="radio" id="cash" name="payment" value="cash" />
                                <label htmlFor="cash">Cash on Delivery</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="emoneyNumb" placeholder="238521993"/>
                                <label htmlFor="emoneyNumb">e-Money Number</label>
                            </div>
                            <div className="cOutFormItems">
                                <input type="text" id="emoneyPin" placeholder="6891"/>
                                <label htmlFor="emoneyPin">e-Money PIN</label>
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