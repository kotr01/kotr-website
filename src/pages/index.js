import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/landing/Header';
import Main from '../components/landing/Main';
import CarouselHeader from '../components/landing/CarouselHeader';

const Index = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Helmet>
        <title>Kings of the Road</title>
      </Helmet>
      <Header image={data.landingImage} />
      <CarouselHeader />
      <Main />
    </Layout>
  )
};

export const query = graphql`
  query IndexQuery {
    landingImage: file(relativePath: { eq: "images/landingBg.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Index;
