export const prerender = true;

export async function load({ url }) {
  return {
    canonicalUrl: url.origin + url.pathname,
  };
}
