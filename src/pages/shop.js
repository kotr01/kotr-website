import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ShopMain from '../components/shop/ShopMain';

const Shop = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Kings of the Road | Shop</title>
      </Helmet>
      <h1>Shop</h1>
      <ShopMain data={data} />
    </Layout>
  )
};

export const query = graphql`
  query ShopQuery {
    allContentfulProduct {
      edges {
        node {
          contentful_id
          name
          slug
          price
          tags
          images {
            resize(width: 800) {
              src
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`;

export default Shop;