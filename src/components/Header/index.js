import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

// import themeIcon from '../../images/icon_color-palette.svg';

// import styles from './index.css';

function handleDonateClick() {
  console.log('donate');
}

function handleThemeClick(e) {
  e.preventDefault();
  console.log('theme change');
}

const Header = styled.header`
  background-color: ${props => props.theme.neutralDark};
  flex: 13em 0 1;
  padding: 0 1em;
`;

const LogoLink = styled(Link)`
  align-items: center;
  background: ${props => props.theme.neutral15};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .25em 0;
  text-decoration: none;
  width: 100%;
`;

const Title = styled.h1`
  color: ${props => props.theme.neutralMid};
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0;
`;

const Nav = styled.nav`
  margin: 1em 0 0 0;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  background: ${props => props.theme.neutral15};
  box-shadow: 1px 2px 2px 1px ${props => props.theme.neutral15};
  margin: .25em 0;
  padding: .125em;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.neutralLight};
  display: block;
  text-decoration: none;

  :hover,
  :focus {
    color: ${props => props.theme.secondaryMid};
    transition: color .3s ease-out;
  }
`;

const SocialLink = styled.a`
  display: block;
  width: 40px;
`;

const ThemeButton = styled.button`
  background: ${props => props.theme.neutralMid};
  border: none;
  border-radius: 50%;

  height: 48px;
  padding: 0;
  width: 48px;

  & svg {
    width: 36px;
  }

  & [data-name="Layer 1"] {
    fill: ${props => props.theme.primaryDark};
  }
`;

const HeaderComponent = ({ logo, social }) => (
  <Header>
    <LogoLink to="/">
      <Image
        alt={logo.alt_text}
        resolutions={logo.localFile.childImageSharp.resolutions}
      />
      <Title>The Lighthouse</Title>
    </LogoLink>
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/events/">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/ministries/">Ministries</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/serve/">Serve</NavLink>
        </NavItem>
      </NavList>
    </Nav>
    <button
      onClick={handleDonateClick}
    >
      Donate
    </button>
    <ThemeButton
      aria-label="Switch Themes"
      onClick={handleThemeClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <g data-name="Layer 2">
          <path d="M18 0a18 18 0 0 0 0 36 3 3 0 0 0 3-3 2.93 2.93 0 0 0-.78-2 3 3 0 0 1 2.25-5H26a10 10 0 0 0 10-10c0-8.84-8.06-16-18-16zM7 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6-8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm10 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" data-name="Layer 1" />
        </g>
      </svg>
    </ThemeButton>
    <SocialLink href="https://www.facebook.com/www.thelhcc.org/?utm_source=website">
      <Image
        alt={social.alt_text}
        resolutions={social.localFile.childImageSharp.resolutions}
      />
    </SocialLink>
  </Header>
);

export default HeaderComponent;

HeaderComponent.propTypes = {
  logo: propTypes.shape({}).isRequired,
  social: propTypes.shape({}).isRequired,
};
