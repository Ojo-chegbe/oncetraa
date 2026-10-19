export const SITE_URL = 'https://oncetra.org';
export const SITE_NAME = 'Oncetra';
export const SOCIAL_IMAGE = '/social-preview.jpg';
// Only real, indexable routes belong here. Build verification checks internal links against this list.
export const pages = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Oncetra' },
  { path: '/approach', label: 'Our Approach' },
  { path: '/products', label: 'Products & Pipeline' },
  { path: '/resources/cancer-awareness', label: 'Cancer Awareness' },
  { path: '/resources/plant-medicine', label: 'Plant Medicine & Research' },
  { path: '/get-involved/partner', label: 'Partner With Us' },
  { path: '/get-involved/careers', label: 'Careers' },
  { path: '/get-involved/volunteer', label: 'Volunteer' },
  { path: '/get-involved/community', label: 'Community Programs' },
  { path: '/contact', label: 'Contact' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
];
export function canonicalPath(path: string) {
  return path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
}
