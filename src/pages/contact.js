import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import ContactForm from '../components/contact/ContactForm';

const Contact = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Kings of the Road | Contact</title>
      </Helmet>
      <ContactForm image={data.contactImage} />
    </Layout>
  )
};

export const query = graphql`
  query ContactQuery {
    contactImage: file(relativePath: { eq: "images/contact_background_3.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Contact;