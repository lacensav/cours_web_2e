/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "EB CASO 2B", // Title for your website.
  tagline: "Apprendre à les base du web et comment faire de l’art?",
  url: "https://lacensav.github.io", // Your website URL
  baseUrl: "/cours_web_2e/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  twitterUsername: "borisrorsvort",
  gitHubUsername: "borisrorsvort",
  // Used for publishing and more
  projectName: "cours_web_2e",
  organizationName: "lacensav",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "intro", label: "Leçons" },
    { doc: "exo-intro", label: "Exercices" },
    { page: "help", label: "Contact" },
    { blog: false, label: "News" },
  ],

  /* path to images for header/footer */
  headerIcon: "img/lacambre-logo-line.svg",
  footerIcon: "img/favicon.ico",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#222",
    secondaryColor: "#ee0002",
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `CC 4.0`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "solarized-dark",
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
