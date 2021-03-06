import React from 'react';
import Link from 'gatsby-link';

import styles from './header.module.css';

import DonateForm from '../DonateForm';

// function handleThemeClick(e) {
//   e.preventDefault();
//   console.log('theme change');
// }

const HeaderComponent = () => (
  <header className={styles.header}>
    <Link className={styles.logoLink} to="/">
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.93 320.82">
        <title>A shining lighthouse.</title>
        <path fill="#DEE7E7" d="M48.14 263.27c49.33 34.79 97.75 9.69 145.07-16 45.37-24.62 98.1-42.52 115.24 13.32-73.61-70.89-171.51 109-260.31 2.68" />
        <path fill="#f4faff" d="M190.26 284.6c33.16-23.45 61.59-33.36 84-30.26 31.74 4.39 43.05 26.82 19.72 43.43 7-15.51-14.72-51-103.72-13.17" />
        <path d="M191.44 162.49h-4.72v10.37h9.43v-10.37zm-33.33 108.23L171.32 145s-10.85-2.51-10.85-13.36h61.94c0 10.85-10.85 13.36-10.85 13.36l10 94.9zM191.44 109.06h4.71v10.37h-9.43v-10.37zm0 18.21h18.86v-31l-18.86-10.86-18.87 10.89v31z" fill="#b0a1ba" />
        <path d="M38.38 228.82a159 159 0 0 1-6-30.38l117.45-48.29zM31.6 179.34a159.89 159.89 0 0 1 2.86-27.17l109-14.07zM39.05 134.13a159.53 159.53 0 0 1 8.74-21.75l92.77 12.47zM56.6 96.71a161.61 161.61 0 0 1 11.6-15.87l72.94 30.44zM79.91 68.18A159 159 0 0 1 92.18 57.4l53 40.92zM105.63 47.84q5.78-3.68 11.88-6.84l35 45.86zM131.94 34.37q5.48-2.17 11.14-4l19.44 47.27zM158 26.49q5.19-1.09 10.51-1.85l6 46.75zM191.07 23.05h2.84l-6.09 45.35-4.14-45.21c2.45-.11 4.91-.18 7.39-.18M209.13 24.08c3.5.39 7 .89 10.39 1.5L201.39 69zM234.66 29.08q5.55 1.58 10.93 3.54L214.35 73.1zM260.38 38.86c4 1.92 7.87 4 11.66 6.25l-46.23 35.28zM286 54.38a156.76 156.76 0 0 1 12.21 10L235 90.4zM310.56 76.92A159.53 159.53 0 0 1 322.37 92l-81.1 10.46zM331.93 107.68a158.14 158.14 0 0 1 9.33 21.06l-97-13zM346.6 147a160.64 160.64 0 0 1 3.74 26.79l-106.7-44.52zM350.21 193.3a159.1 159.1 0 0 1-5 30.44l-105.65-81.51z" fill="#f4d06f" />
        <path fill="none" d="M0 0h381.93v320.82H0z" />
      </svg>
      <h1 className={styles.title}>The Lighthouse</h1>
    </Link>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link activeClassName={styles.activeLink} exact className={styles.navLink} to="/">Home</Link>
        </li>
        <li>
          <Link activeClassName={styles.activeLink} className={styles.navLink} to="/about/">About</Link>
        </li>
        <li>
          <Link activeClassName={styles.activeLink} className={styles.navLink} to="/events/">Events</Link>
        </li>
        <li>
          <Link activeClassName={styles.activeLink} className={styles.navLink} to="/ministries/">Ministries</Link>
        </li>
        <li>
          <Link activeClassName={styles.activeLink} className={styles.navLink} to="/serve/">Serve</Link>
        </li>
      </ul>
    </nav>
    <DonateForm />
    <a className={styles.socialLink} href="https://www.facebook.com/www.thelhcc.org/?utm_source=website">
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.89 266.89">
        <title>Click to visit our Facebook page.</title>
        <path fill="#fff" d="M252.16 0H14.73A14.72 14.72 0 0 0 0 14.73v237.43a14.72 14.72 0 0 0 14.73 14.73h127.83V163.54h-34.78v-40.28h34.78V93.55c0-34.47 21.05-53.24 51.8-53.24a285.15 285.15 0 0 1 31.08 1.59v36h-21.32c-16.73 0-20 7.95-20 19.61v25.72H224l-5.19 40.28h-34.7v103.38h68a14.72 14.72 0 0 0 14.73-14.73V14.73A14.72 14.72 0 0 0 252.16 0z" data-name="White" />
      </svg>
    </a>
    {/* <button
      className={styles.themeButton}
      aria-label="Switch Themes"
      onClick={handleThemeClick}
    >
      <svg className={styles.themeSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <path d="M18 0a18 18 0 0 0 0 36 3 3 0 0 0 3-3 2.93 2.93 0 0 0-.78-2 3 3 0 0 1 2.25-5H26a10 10 0 0 0 10-10c0-8.84-8.06-16-18-16zM7 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6-8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm10 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" fill="hsl(276, 15%, 68%)" />
      </svg>
    </button> */}

  </header>
);

export default HeaderComponent;
