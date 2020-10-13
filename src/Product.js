import React from 'react'
import './Product.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    //console.log("This is basket ==>", basket);
    const addToBasket = () => {
        // dispatch the item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    };

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
                        <StarTwoToneIcon />
                    ))}
                </div>
            </div>
            <img src={image} alt=""></img>

            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product
