import React from 'react';
// import Link from 'gatsby-link';
import { Link } from 'gatsby';

import {
  Button
} from 'reactstrap';

import styles from './ProductCard.module.css';

const ProductCard = ({ data }) => {
  const { name, price, /*contentful_id,*/ images, slug } = data;
  return (
    <div className={`${styles.productCard} bg-dark`}>
      <div>
        <img className={styles.productCardImage} src={images[0].resize.src} alt="" />
      </div>
      <div className={`${styles.productCardContent} p-3`}>
        <h3>{name}</h3>
        <p>£{price}</p>
        <Link to={`/shop/${slug}`}>
          <Button color="primary">View Product</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;