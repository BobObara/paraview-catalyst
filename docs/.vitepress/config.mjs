import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/paraview-catalyst",
  title: "ParaView/Catalyst",
  description: "ParaView/Catalyst documentation",
  lastUpdated: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "196x196", href: "/paraview-catalyst/logos/favicon-196x196.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/paraview-catalyst/logos/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/paraview-catalyst/logos/favicon-16x16.png"}],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-S0P6NWR8Y9' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-S0P6NWR8Y9');`
    ],
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/logo.png',
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guide/concepts' },
      { text: 'Use Cases', link: '/usecase/' },
      {
        text: 'Resources',
        items: [
          { text: 'API', link: 'https://docs.paraview.org/en/latest/Catalyst/index.html' },
          { text: 'Discussions', link: 'https://discourse.paraview.org/c/in-situ-support' },
          { text: 'Bugs', link: 'https://gitlab.kitware.com/groups/paraview/-/issues' },
          { text: 'Services', link: 'https://www.kitware.com/support' },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Concepts', link: '/guide/concepts' },
            { text: 'Getting started', link: '/guide/getting-started' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'C', link: '/guide/example-c' },
            { text: 'Fortran 90', link: '/guide/example-fortran' },
            { text: 'Python', link: '/guide/example-python' },
            { text: 'C++', link: '/guide/example-cxx' },
          ]
        },
        {
          text: 'Extract types',
          items: [
            { text: 'Images', link: '/guide/example-image' },
            { text: 'Meshes', link: '/guide/example-mesh' },
          ]
        },
      ],
      '/usecase/': [
        {
          text: 'Problem Domains',
          items: [
            { text: 'Hydrodynamics', link: '/usecase/lulesh' },
            { text: 'Supersonic Turbulence', link: '/usecase/turbulence' },
            { text: 'AI in CFD', link: '/usecase/ai_and_cfd' },
            { text: 'Deep Learning', link: '/usecase/deep_learning' },
            { text: 'Ocean Simulation', link: '/usecase/mpaso' },
            { text: 'Cyclonic Simulation', link: '/usecase/cyclonic' },
            { text: 'High-Energy Physics', link: '/usecase/warpx' }
          ]
        },
        {
          text: 'Industry',
          items: [
            { text: 'XXX', link: '/usecase/xxx' },
          ]
        },
      ],
    },
    footer: {
      copyright: 'Copyright © 2025 Kitware Inc.'
    }
  }
})
