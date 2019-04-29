import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageContainer from './PageContainer';

import '../style.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
};

export default Layout;