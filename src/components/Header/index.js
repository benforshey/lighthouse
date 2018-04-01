import React from 'react';
import propTypes from 'prop-types';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

import styles from './index.module.css';

const Header = ({ logo, social }) => (
  <header className={styles.header}>
    <Link to="/">
      <Image
        outerWrapperClassName={styles.image}
        alt={logo.alt_text}
        resolutions={logo.localFile.childImageSharp.resolutions}
      />
      <h1 className={styles.title}>The Lighthouse</h1>
    </Link>
    <nav>
      <ul>
        <li>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.link} to="/about/">About</Link>
        </li>
        <li>
          <Link className={styles.link} to="/events/">Events</Link>
        </li>
        <li>
          <Link className={styles.link} to="/ministries/">Ministries</Link>
        </li>
        <li>
          <Link className={styles.link} to="/serve/">Serve</Link>
        </li>
      </ul>
    </nav>
    <button>Donate</button>
    <a href="https://www.facebook.com/www.thelhcc.org/?utm_source=website">
      <Image
        outerWrapperClassName={styles.image}
        alt={social.alt_text}
        resolutions={social.localFile.childImageSharp.resolutions}
      />
    </a>
  </header>
);

export default Header;

Header.propTypes = {
  logo: propTypes.shape({}).isRequired,
  social: propTypes.shape({}).isRequired,
};
