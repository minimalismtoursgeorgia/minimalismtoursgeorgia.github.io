export type Lang = 'en' | 'ka' | 'pl';

const KA_SUPPORTED_PATHS = new Set([
  '/',
  '/batumi-news/',
  '/guest-registration/',
]);

/**
 * Prefix an internal site path with the active language prefix when needed.
 * Preserves hash fragments and query strings.
 */
export function localizePath(path: string, lang: Lang): string {
  if (lang === 'en') return path;

  const [baseAndQuery, hash] = path.split('#');
  const [pathname, query] = baseAndQuery.split('?');
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const cleanPath = normalized.replace(/^\/(pl|ka)(?=\/|$)/, '') || '/';

  let target = cleanPath;
  if (lang === 'pl') {
    target = cleanPath === '/' ? '/pl/' : `/pl${cleanPath}`;
  } else if (lang === 'ka') {
    target = KA_SUPPORTED_PATHS.has(cleanPath)
      ? cleanPath === '/'
        ? '/ka/'
        : `/ka${cleanPath}`
      : cleanPath;
  }

  const withQuery = query ? `${target}?${query}` : target;
  return hash ? `${withQuery}#${hash}` : withQuery;
}
