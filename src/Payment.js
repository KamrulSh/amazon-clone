import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Payment for (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Chittagong</p>
                        <p>Bangladesh</p>
                    </div>
                </div>

                {/* payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
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

                {/* payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__title">
                        {/* Stripe will go */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
