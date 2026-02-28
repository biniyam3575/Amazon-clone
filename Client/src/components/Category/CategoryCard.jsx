import React from 'react';
import classes from './Category.module.css';

const CategoryCard = ({ data }) => {
  return (
    <div className={classes.category_card}>
        <a href="#">
            <h2>{data.title}</h2>
            <img src={data.imgLink} alt={data.title} />
            <p>Shop now</p>
        </a>
    </div>
  );
};

export default CategoryCard;