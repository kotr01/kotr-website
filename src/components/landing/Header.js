import React from 'react';
import Img from "gatsby-image"

import styles from './Header.module.css';

const Header = ({ image }) => {
  return (
    <div className={`${styles.contain}`}>
      

      <div className={`${styles.header} text-light text-center`}>
        <div className={`${styles.content}`}>
          <h1>Welcome to kingsoftheroad.tv</h1>
        </div>
        <Img 
          outerWrapperClassName="h-100"
          style={{height: '100%'}}
          sizes={image.childImageSharp.sizes}
        />
      </div>
    </div>
  );
};

export default Header;