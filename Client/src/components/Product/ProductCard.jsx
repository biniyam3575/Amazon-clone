import React from 'react';
import classes from './ProductCard.module.css';
import Rating from '@mui/material/Rating'; 

const ProductCard = ({ data }) => {
    const { title, image, price, rating } = data;

    return (
        <div className={classes.card_container}>
            <img src={image} alt={title} />
            <div className={classes.card_details}>
                <h3>{title}</h3>
                
                {/* Rating stays right here, above the price */}
                <div className={classes.rating_container}>
                    <Rating 
                        value={rating?.rate || 0} 
                        precision={0.5} 
                        readOnly 
                        size="small" 
                    />
                    <small>({rating?.count || 0})</small>
                </div>
                
                {/* Price and Button are pushed to the bottom by the CSS below */}
                <div className={classes.price_and_button}>
                    <p className={classes.price}>${price}</p>
                    <button className={classes.button}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;