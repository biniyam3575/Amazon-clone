import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import classes from './Result.module.css'; // Don't forget to create this

const Result = () => {
  const [category, setCategory] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(`${productUrl}/products/category/${categoryName}`);
      setCategory(response.data);
    };
    getCategory();
  }, [categoryName]); // Added categoryName as dependency

  return (
    <Layout>
      <section className={classes.results_container}>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_grid}>
          {category?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Result;