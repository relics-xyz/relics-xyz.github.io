import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e04'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '12e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '849'),
            routes: [
              {
                path: '/docs/category/stylesheets',
                component: ComponentCreator('/docs/category/stylesheets', 'f07'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/category/tokensheets',
                component: ComponentCreator('/docs/category/tokensheets', '400'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', 'a4a'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', 'c96'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/collect-page',
                component: ComponentCreator('/docs/stylesheets/collect-page', 'd63'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/customize-page',
                component: ComponentCreator('/docs/stylesheets/customize-page', 'a1d'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/item-viewer-page',
                component: ComponentCreator('/docs/stylesheets/item-viewer-page', 'b1e'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/library-page',
                component: ComponentCreator('/docs/stylesheets/library-page', '818'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/main-window',
                component: ComponentCreator('/docs/stylesheets/main-window', 'abc'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/mixins',
                component: ComponentCreator('/docs/stylesheets/mixins', '769'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/player',
                component: ComponentCreator('/docs/stylesheets/player', '10a'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/stylesheets/start-collect-page',
                component: ComponentCreator('/docs/stylesheets/start-collect-page', 'f6f'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/tokensheets/fonts',
                component: ComponentCreator('/docs/tokensheets/fonts', 'd92'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/tokensheets/icons',
                component: ComponentCreator('/docs/tokensheets/icons', '589'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/tokensheets/palette',
                component: ComponentCreator('/docs/tokensheets/palette', '720'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/tokensheets/sizes',
                component: ComponentCreator('/docs/tokensheets/sizes', '333'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/tokensheets/sounds',
                component: ComponentCreator('/docs/tokensheets/sounds', 'ffb'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/tokensheets/tweaks',
                component: ComponentCreator('/docs/tokensheets/tweaks', 'b71'),
                exact: true,
                sidebar: "styleSidebar"
              },
              {
                path: '/docs/tokensheets/window',
                component: ComponentCreator('/docs/tokensheets/window', '387'),
                exact: true,
                sidebar: "styleSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
