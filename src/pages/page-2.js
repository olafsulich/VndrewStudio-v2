import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>vs</h1>
    <Link to="/">Go back to the homepage</Link>
  </>
);

export default SecondPage;
