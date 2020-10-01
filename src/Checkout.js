import React from 'react'
import './Checkout.css'
import './Subtotal'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/3rd/GCapp/bgc_banner_update_ap_EN_1024x90_20200807.jpg" alt=""></img>

                <div className="checkout__title">
                    <h1>Shopping Cart</h1>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
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
