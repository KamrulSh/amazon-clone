import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    console.log("basket test", basket);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/3rd/GCapp/bgc_banner_update_ap_EN_1024x90_20200807.jpg" alt=""></img>

                <div>
                    <h1 className="checkout__title">Shopping Cart</h1>

                    {/* this push product from the data layer in the shopping cart dynamically when add to basket is pressed  */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout__right">
                <div className="checkout__price">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
