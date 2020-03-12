import React from 'react';
import { PropTypes } from 'prop-types';
import GlobalStyle from '../styles/globalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <p>Hello</p>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
