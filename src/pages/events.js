import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import EventsMain from '../components/events/EventsMain';

const Events = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Kings of the Road | Events</title>
      </Helmet>
      <EventsMain data={data} />
    </Layout>
  )
};

export const query = graphql` 
  query EventQuery {
    allContentfulEvent (sort: { fields: date, order: ASC }) {
      edges {
        node {
          name
          dateText
          address
          link
          date
        }
      }
    }
  }
`;

export default Events;