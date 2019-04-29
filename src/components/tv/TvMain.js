import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import styles from './TvMain.module.css';

class TvMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  
  render() {
    return (
      <Container className="text-dark mb-5 pt-5">
        <Row>
          <Col>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center'       
            }}>
              <div className={styles.youtubeVideo}>
              <iframe width="100%" src="https://www.youtube.com/embed/j4y9SZh8xg0?rel=0" frameBorder="0" allowFullScreen></iframe></div>
              <div className={styles.youtubeVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/LkcVpC7q2xE?rel=0" frameBorder="0"  allowFullScreen></iframe></div>
              <div className={styles.youtubeVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/T6xn69L9XU0?rel=0" frameBorder="0"  allowFullScreen></iframe></div>
              <div className={styles.youtubeVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/N4jPleC76a0?rel=0" frameBorder="0"  allowFullScreen></iframe></div>
              <div className={styles.youtubeVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/uSF9KDLYhNc?rel=0" frameBorder="0"  allowFullScreen></iframe></div>
              <div className={styles.youtubeVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KEogZfK7rmw?rel=0" frameBorder="0"  allowFullScreen></iframe></div>
              <div className={styles.youtubeVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/A3J-qhb3laU?rel=0" frameBorder="0"  allowFullScreen></iframe></div>
              <div className={styles.youtubeVideo}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/HVOsBePUhN8?rel=0" frameBorder="0"  allowFullScreen></iframe></div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TvMain;