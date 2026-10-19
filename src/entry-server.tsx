import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';
export { pages, SITE_URL } from './seo';
export function render(url: string) {
  return renderToString(<HelmetProvider><StaticRouter location={url}><AppRoutes /></StaticRouter></HelmetProvider>);
}
