import 'typeface-source-sans-pro/index.css';

import React from 'react';
import propTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';

import './global.css';
import styles from './layout.module.css';

const TemplateWrapper = ({ children, data }) => (
  <div
    className={styles.site}
  >
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header
      logo={data.logo}
      social={data.social}
    />
    <main
      className={styles.main}
    >
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
    logo: wordpressWpMedia(title: {eq: "logo@4x"}) {
      alt_text
      localFile {
        childImageSharp {
          resolutions(width: 160) {
            ...GatsbyImageSharpResolutions_tracedSVG
          }
        }
      }
    }

    social: wordpressWpMedia(title: {eq: "icon__facebook"}) {
      alt_text
      localFile {
        childImageSharp {
          resolutions(width: 40) {
            ...GatsbyImageSharpResolutions_tracedSVG
          }
        }
      }
    }
  }

`;
