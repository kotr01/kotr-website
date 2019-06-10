import React from 'react';
import {
  Container
} from 'reactstrap';

import DerryBros from '../../images/derrybros.png';
// import Junction20 from '../../images/junction20new.png';
import FleetData from '../../images/fleetdata.png';
import Irwin from '../../images/kenirwin.png';
import Kmc from '../../images/KMC3.png';
import TeLogo from '../../images/telogo.png';

import styles from './Main.module.css';

const Main = () => {
  return (
    <Container fluid className="text-center py-4">
      <div className={styles.sponsors}>

        <div className={styles.sponsorContainer}>
          <a href="https://www.derrybros.com">
            <img className={`${styles.derryBros}`} height="70px" src={DerryBros} alt="" />
          </a>
        </div>
        <div className={styles.sponsorContainer}>
          <a href="https://www.classonehgv-lgv.co.uk">
            <img src={Irwin} height="95px" alt="" />
          </a>
        </div>
        {/* <div className={styles.sponsorContainer}>
          <a href="https://facebook.com/Junction-20-597011900501234/?locale2=en_GB">
            <img src={Junction20} height="70px" />
          </a>
        </div> */}
        <div className={styles.sponsorContainer}>
          <a href="https://www.facebook.com/kmctransport.ireland/">
            <img src={Kmc} height="80px" alt="" />
          </a>  
        </div>
        <div className={styles.sponsorContainer}>
          <a href="http://www.fleetdata.ie">
            <img src={FleetData} height="100px" alt="" />
          </a>  
        </div>
        <div className={styles.sponsorContainer}>
          <a href="https://www.truckelectrics.com/">
            <img src={TeLogo} height="70px" alt="" />
          </a>  
        </div>
        
      </div>
    </Container>
  );
};

export default Main;