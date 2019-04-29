import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import styles from './CarouselHeader.module.css';

import carouselImg1 from '../../images/KingsWebCD.jpg';
import carouselImg2 from '../../images/KingsWebDVD.jpg';
import carouselImg3 from '../../images/KingsWebDerrys.jpg';

const CarouselHeader = () => {
  const items = [
    {
      src: carouselImg1,
      altText: 'Kings of The Road CD'
    },
    {
      src: carouselImg2,
      altText: 'Kings of The Road DVD'
    },
    {
      src: carouselImg3,
      altText: 'Derry Bros'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
};

export default CarouselHeader;
