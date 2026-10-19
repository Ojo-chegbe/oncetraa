import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_NAME, SOCIAL_IMAGE, pages, canonicalPath } from '../seo';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: string;
  noindex?: boolean;
  schema?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, type, noindex = false, schema }) => {
  const { pathname } = useLocation();
  const path = canonicalPath(canonicalUrl ? new URL(canonicalUrl, SITE_URL).pathname : pathname);
  const url = SITE_URL + path;
  const page = pages.find(page => page.path === path);
  const image = SITE_URL + SOCIAL_IMAGE;
  const isArticle = schema?.['@type'] === 'Article';
  const organization = { '@type': 'Organization', '@id': SITE_URL + '/#organization', name: SITE_NAME, url: SITE_URL + '/', logo: SITE_URL + '/logo.png' };
  const breadcrumb = { '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    ...(path === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: page?.label || title, item: url }]),
  ] };
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization,
      { '@type': 'WebSite', '@id': SITE_URL + '/#website', url: SITE_URL + '/', name: SITE_NAME, publisher: { '@id': organization['@id'] }, inLanguage: 'en' },
      { '@type': path === '/contact' ? 'ContactPage' : path === '/about' ? 'AboutPage' : 'WebPage', '@id': url + '#webpage', url, name: title, description, inLanguage: 'en', isPartOf: { '@id': SITE_URL + '/#website' }, breadcrumb: { '@id': breadcrumb['@id'] } },
      breadcrumb,
      ...(isArticle ? [{ ...schema, '@context': undefined, '@id': url + '#article', url, mainEntityOfPage: { '@id': url + '#webpage' }, image: [image], publisher: { '@id': organization['@id'] } }] : []),
    ],
  };
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content={type || (isArticle ? 'article' : 'website')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Oncetra ? Cancer awareness, prevention and research in Africa" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Oncetra ? Cancer awareness, prevention and research in Africa" />
      {!noindex && <link rel="canonical" href={url} />}
      {!noindex && <script type="application/ld+json">{JSON.stringify(graph).replace(/</g, '\\u003c')}</script>}
    </Helmet>
  );
};
export default SEO;
