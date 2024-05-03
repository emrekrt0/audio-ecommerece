
import headphoneImage from '../../assets/productselection/headphoneImage.svg';
import speakerImage from '../../assets/productselection/speakerImage.svg';
import earphoneImage from '../../assets/productselection/earphoneImage.svg';
import oval from '../../assets/productselection/oval.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { hMenuContext } from '../../App';

export default function Cart() {
    const {hamMenu, setHamMenu} = useContext(hMenuContext)

    function toggleHamMenu() {
        setHamMenu(!hamMenu)
        console.log(hamMenu, 'hamMenu firstcomp');
    }
    return(
       <>
        <div className="cartContainer">
            <div className="cartTop">
                <div className="cartHeader">
                    <h5 className='cartHeaders'>CART (3)</h5>
                </div>
                <div className="cartRmvBtn">
                    <h5 className='cartHeaders'>REMOVE</h5>
                </div>
            </div>
            <div className="cartProductsContainer">
                <div className="cartProducts">
                    <div className="productInf">
                        <div className="porductImg">
                            gorsel1
                        </div>
                        <div className="productTxt">
                            <h4>product 1</h4>
                            <h6>$150</h6>
                        </div>
                    </div>
                    <div className="productQty">
                        <h3>1</h3>
                    </div>
                </div>
            </div>
            <div className="cartFooter">
                <h3>total</h3>
                <h4>$550</h4>
            </div>
            <div className="cartCheckout">
                <h1 className='mButton1 tac'>CHECKOUT</h1>
            </div>
        </div>
       </>
    )
}