export const prerender = true;
export const trailingSlash = 'never';

export async function load({ url }) {
  return {
    canonicalUrl: url.origin + url.pathname,
  };
}
