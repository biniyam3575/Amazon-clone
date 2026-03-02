import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router';
import { productUrl } from '../../Api/endPoints';
import classes from './ProductDetail.module.css';
import Rating from '@mui/material/Rating';
import Loading from '../../components/Loading/Loading'; 

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={classes.detail_container}>
          <div className={classes.image_container}>
            <img src={product.image} alt={product.title} />
          </div>
          
          <div className={classes.info_container}>
            <h1>{product.title}</h1>
            
            <div className={classes.rating_wrapper}>
              <Rating value={product.rating?.rate || 0} precision={0.5} readOnly />
              <span>{product.rating?.count} reviews</span>
            </div>
            
            <p className={classes.description}>{product.description}</p>
            
            <h2 className={classes.price}>${product.price}</h2>
            
            <button className={classes.add_button}>Add to cart</button>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;