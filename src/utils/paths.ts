export function withBase(path: string): string {
    if (!path) return path;
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;

    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;

    return `${base}${path.replace(/^\//, '')}`;
}
