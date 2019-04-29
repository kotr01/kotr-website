/*-----------------------------------------------------------------------------
  This component exists only to nudge the page content down below the fixed 
  Navbar. The marginTop value should be set to the same height as the Navbar.
-----------------------------------------------------------------------------*/
import React from 'react'

const PageContainer = ({ children }) => {
  return (
    <div style={{ marginTop: '102px', minHeight: '85vh' }}>
      {children}
    </div>
  );
};

export default PageContainer;