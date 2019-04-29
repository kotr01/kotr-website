import React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import cartPlus from '../images/cartPlus.svg';

const Product = ({ data }) => {
  console.log(data);
  const {
    name,
    price,
    description,
    contentful_id,
    slug,
    // tags,
    hasSizes,
    sizes,
    images,
    weight
  } = data.contentfulProduct;

  return (
    <Layout>
      <Helmet>
        <title>Kings of the Road | {name}</title>
      </Helmet>
      <Container className="text-dark py-5">
        <Row>
          <Col md={5}>
            <img src={images[0].resize.src} width="100%" alt=""/>
          </Col>
          <Col md={7}>
            <h1>{name}</h1>
            <h5>£{price}</h5>
            <hr />
            <p>{description.description}</p>
            {hasSizes
              ? <a
                  className="snipcart-add-item"
                  href="#"
                  data-item-id={contentful_id}
                  data-item-name={name}
                  data-item-price={price}
                  data-item-url={`/shop/${slug}`}
                  data-item-custom2-name="Size"
                  data-item-custom2-options={sizes}
                  data-item-weight={weight}
                >
                  <Button color="success">
                    Add To Cart <img src={cartPlus} height="20px" alt="" />
                  </Button>
                </a>
              : <a
                  className="snipcart-add-item"
                  href="#"
                  data-item-id={contentful_id}
                  data-item-name={name}
                  data-item-price={price}
                  data-item-url={`/shop/${slug}`}
                  data-item-weight={weight}
                >
                  <Button color="success">
                    Add To Cart <img src={cartPlus} height="20px" alt="" />
                  </Button>
                </a>
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ProductQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      contentful_id
      slug
      name
      tags
      weight
      hasSizes
      sizes
      images {
        resize (width: 1600) {
          src
        }
      }
      description {
        description
      }
      price
    }
  }
`;

export default Product;