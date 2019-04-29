import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import TvMain from '../components/tv/TvMain';

const Tv = () => {
  return (
    <Layout>
      <Helmet>
        <title>Kings of the Road | Tv</title>
      </Helmet>
      <TvMain />
    </Layout>
  )
};

export default Tv;