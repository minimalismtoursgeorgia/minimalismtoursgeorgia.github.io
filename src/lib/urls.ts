export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  if (!path) return normalizedBase;
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) {
    return path;
  }

  if (path === '/' || path === '') {
    return normalizedBase;
  }

  if (
    normalizedBase !== '/' &&
    (path === normalizedBase.slice(0, -1) || path.startsWith(normalizedBase))
  ) {
    return path;
  }

  const clean = path.replace(/^\/+/, '');
  return `${normalizedBase}${clean}`;
}

export function absoluteUrl(path: string, site?: URL | string): string {
  const origin =
    site instanceof URL
      ? site.toString().replace(/\/+$/, '')
      : typeof site === 'string' && site.length > 0
        ? site.replace(/\/+$/, '')
        : 'https://minimalismtoursgeorgia.github.io';

  const resolvedPath = withBase(path);
  if (/^https?:/i.test(resolvedPath)) {
    return resolvedPath;
  }
  const leadingSlashPath = resolvedPath.startsWith('/')
    ? resolvedPath
    : `/${resolvedPath}`;
  return `${origin}${leadingSlashPath}`;
}
