module.exports = {
  title: "EB CASO 2B",
  tagline: "Apprendre à les base du web et comment faire de l’art?",
  url: "https://lacensav.github.io",
  baseUrl: "/cours_web_2e/",
  organizationName: "lacensav",
  projectName: "cours_web_2e",
  scripts: [],
  favicon: "img/favicon.ico",
  customFields: {
    gitHubUsername: "borisrorsvort",
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: "../website/sidebars.json",
        },
        blog: {},
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      title: "EB CASO 2B",
      logo: {
        src: "img/lacambre-logo-line.svg",
      },
      items: [
        {
          to: "docs/intro",
          label: "Leçons",
          position: "left",
        },
        {
          to: "docs/exo-intro",
          label: "Exercices",
          position: "left",
        },
      ],
    },
    image: "img/undraw_online.svg",
    footer: {
      copyright: "CC 4.0",
      logo: {
        src: "img/favicon.ico",
      },
    },
  },
};
