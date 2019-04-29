import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import facebookLogo from '../images/facebookIcon.svg';
import youtubeIcon from '../images/youtubeIcon.svg';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light text-center pt-3">
      <Container>
        <Row>
          <Col className="mb-3" md={4}>
            <p className="m-0">&copy; Kings Of The Road 2019</p>
          </Col>
          <Col className="mb-3" md={4}>
            <a className="mx-3" href="https://www.facebook.com/Kingoftheroadireland/">
              <img src={facebookLogo} width="32px" alt="" />
            </a>
            <a className="mx-3" href="https://www.youtube.com/channel/UCFg_p3JC9WE6egJXGrCwziQ">
              <img src={youtubeIcon} width="32px" alt="" />
            </a>
          </Col>
          <Col className="mb-3" md={4}>
            <p className="m-0">info@kingsoftheroad.tv</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;