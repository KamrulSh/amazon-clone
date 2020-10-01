import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    return (
        // display product info, price, image, rating and add to cart in home section
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <div>
                <img src={image} alt=""></img>
            </div>
            <button>Add to basket</button>

        </div>
    )
}

export default Product
