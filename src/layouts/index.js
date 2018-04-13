import 'typeface-source-sans-pro/index.css';
import 'modern-normalize/modern-normalize.css';

import React from 'react';
import propTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';

import './global.css';
import styles from './layout.module.css';

const TemplateWrapper = ({ children, data }) => (
  <div className={styles.site}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: `${data.site.siteMetadata.description}` },
      ]}
    />
    <Header />
    <main className={styles.main}>
      {children()}
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: propTypes.func.isRequired,
  data: propTypes.shape({}).isRequired,
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }

`;
