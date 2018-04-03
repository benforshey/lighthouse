import 'typeface-source-sans-pro/index.css';

import React from 'react';
import propTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';

import './global.css';

const defaultTheme = {
  primaryDark: '#684687',
  primaryLight: '#B0A1BA',
  secondaryMid: '#F4D06F',
  neutralDark: '#303333',
  neutral15: 'hsl(180, 3%, 22%)',
  neutralMid: '#DEE7E7',
  neutralLight: '#F4FAFF',
};

const Site = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  flex: 70% 1 1;
  padding: 0 1em;
`;


const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={defaultTheme}>
    <Site>
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
      <Main>
        {children()}
      </Main>
    </Site>
  </ThemeProvider>
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
