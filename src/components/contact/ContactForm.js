import React from 'react';
import Img from 'gatsby-image';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

import styles from './ContactForm.module.css';

const ContactForm = ({ image }) => {
  return (
    <div className={`${styles.header} text-light text-center`}>
      <div className={`${styles.content}`}>
        <Container>
          <Row>
            <Col lg={{ offset: 3, size: 6 }}>
              <h2>Get In Touch</h2>
              <hr className="bg-primary w-50" />
              <Form action={`https://formspree.io/jody@kingsoftheroad.tv`} method="POST">
                <FormGroup className="text-left mb-4">
                  <Label for="name" hidden>Name</Label>
                  <Input className="bg-darkTransparent text-light border-top-0 border-bottom-0 border-right-0 border-primary rounded-0" type="text" name="name" id="name" placeholder="Enter your name here..." />
                </FormGroup>
                <FormGroup className="text-left mb-4">
                  <Label for="email" hidden>Email</Label>
                  <Input className="bg-darkTransparent text-light border-top-0 border-bottom-0 border-right-0 border-primary rounded-0" type="email" name="email" id="email" placeholder="Enter your email here..." />
                </FormGroup>
                <FormGroup className="text-left">
                  <Label for="message" hidden>Message</Label>
                  <Input className="bg-darkTransparent text-light border-top-0 border-bottom-0 border-right-0 border-primary rounded-0" type="textarea" name="message" id="message" rows={5} placeholder="Leave your message here..." />
                </FormGroup>
                <Input type="text" name="_gotcha" style={{ display: 'none' }}/>
                <Button className="mt-4" color="primary" size="lg" block>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Img
        outerWrapperClassName="h-100"
        style={{height: '100%'}}
        sizes={image.childImageSharp.sizes}
      />
    </div>
  );
};

export default ContactForm;