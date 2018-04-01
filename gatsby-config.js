require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Lighthouse',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'lighthouse-ngo.mystagingwebsite.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        auth: {
          htaccess_user: process.env.WP_USER,
          htaccess_pass: process.env.WP_PASSWORD,
          htaccess_sendImmediately: false,
        },
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          // sourceUrl: 'https://source-url.com',
          // replacementUrl: 'https://replacement-url.com',
        },
        concurrentRequests: 10,
        // Exclude specific routes using glob parameters
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]` will exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // excludedRoutes: ['/*/*/comments', '/yoast/**'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
